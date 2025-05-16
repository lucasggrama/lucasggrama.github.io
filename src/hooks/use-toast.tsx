import * as React from "react";

// Configurações
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 5000; // Tempo antes de remover o toast (5s)

let count = 0;
function genId(): string {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

// Tipagens
export type Toast = {
  id: string;
  open: boolean;
  title?: string;
  description?: string;
  onOpenChange?: (open: boolean) => void;
  [key: string]: any;
};

type ToastState = {
  toasts: Toast[];
};

type AddToastAction = {
  type: "ADD_TOAST";
  toast: Toast;
};

type UpdateToastAction = {
  type: "UPDATE_TOAST";
  toast: Toast;
};

type DismissToastAction = {
  type: "DISMISS_TOAST";
  toastId?: string;
};

type RemoveToastAction = {
  type: "REMOVE_TOAST";
  toastId?: string;
};

type ToastAction =
  | AddToastAction
  | UpdateToastAction
  | DismissToastAction
  | RemoveToastAction;

// Estado e gerenciamento
const toastTimeouts: Map<string, ReturnType<typeof setTimeout>> = new Map();
let memoryState: ToastState = { toasts: [] };
const listeners: Array<(state: ToastState) => void> = [];

function dispatch(action: ToastAction) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

function addToRemoveQueue(toastId: string): void {
  if (toastTimeouts.has(toastId)) return;

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({ type: "REMOVE_TOAST", toastId });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
}

// Reducer
function reducer(state: ToastState, action: ToastAction): ToastState {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case "DISMISS_TOAST":
      if (action.toastId) {
        addToRemoveQueue(action.toastId);
      } else {
        state.toasts.forEach((toast) => addToRemoveQueue(toast.id));
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          action.toastId === undefined || t.id === action.toastId
            ? { ...t, open: false }
            : t
        ),
      };

    case "REMOVE_TOAST":
      if (action.toastId === undefined) {
        return { ...state, toasts: [] };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };

    default:
      return state;
  }
}

// API do Toast
type ToastProps = Omit<Toast, "id" | "open" | "onOpenChange"> & {
  id?: string;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

function toast(props: ToastProps) {
  const id = props.id ?? genId();

  const update = (props: ToastProps) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id, open: props.open ?? true },
    });

  const dismiss = () =>
    dispatch({
      type: "DISMISS_TOAST",
      toastId: id,
    });

  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open: boolean) => {
        if (!open) dismiss();
      },
    },
  });

  return { id, dismiss, update };
}

// Hook principal
function useToast() {
  const [state, setState] = React.useState<ToastState>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  };
}

export { useToast, toast };
