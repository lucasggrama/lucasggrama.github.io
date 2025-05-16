import { Briefcase, Code, FileJson, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Sobre <span className="text-primary"> Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Técnico em informática & Desenvolvedor Front-end
            </h3>

            <p className="text-muted-foreground text-justify">
              Tenho curso técnico em informática pelo CEFET-MG com experiencias
              no desenvolvimento de software usando tecnologias como React,
              Java, Python, C++ e PHP.
            </p>

            <p className="text-muted-foreground text-justify">
              Sou apaixonado por criar soluções elegantes para problemas
              complexos e estou constantemente aprendendo novas tecnologias.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entrar em contato
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar Currículo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <FileJson className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Desenvolvimento Front-end
                  </h4>
                  <p className="text-muted-foreground">
                    Criando websites e aplicações web responsivas com frameworks
                    modernos.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Desenvolvimento Back-end
                  </h4>
                  <p className="text-muted-foreground">
                    Construindo APIs robustas, integrações e lógica de negócio
                    utilizando linguagens como Java, Python e PHP.
                  </p>
                </div>
              </div>
            </div>
            {/* UI/UX Design Card */}
            {/* 
            <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                        <User className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                        <h4 className="font-semibold text-lg">UI/UX Design</h4>
                        <p className="text-muted-foreground">
                            Designing intuitive user interfaces and seamless user
                            experiences.
                        </p>
                    </div>
                </div>
            </div>
            */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Levantamento e análise de requisitos de software
                  </h4>
                  <p className="text-muted-foreground">
                    Participando ativamente do ciclo completo de desenvolvimento
                    de projetos, com foco em metodologias ágeis{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
