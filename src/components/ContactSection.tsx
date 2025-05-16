import { Linkedin, Mail, MapPin } from "lucide-react";
import { useToast } from "../hooks/use-toast";

export const ContactSection = () => {
  useToast();

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Entre em <span className="text-primary">Contato</span>
        </h2>

        <div className="space-y-10 w-full">
          {/* Informações de Contato */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Informações de Contato</h3>

            <div className="flex flex-col gap-6">
              {/* E-mail */}
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:lucasggrama@protonmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    lucasggrama@protonmail.com
                  </a>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium">Localização</h4>
                  <p className="text-muted-foreground">
                    Belo Horizonte, MG, Brasil
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Redes sociais */}
          <div>
            <h4 className="font-medium mb-4">Conecte-se Comigo</h4>
            <div className="flex justify-center gap-4">
              <a
                href="https://br.linkedin.com/in/lucas-guimar%C3%A3es-grama-2b4053292"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Linkedin />
              </a>
              {/* Outras redes sociais, se quiser adicionar:
              <a href="#"><Instagram /></a>
              <a href="#"><Twitter /></a>
              <a href="#"><Twitch /></a>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
