import { useEffect, useRef } from "react";

import style from "./Bonus.module.css";

export function Bonus() {
  const conteudoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style["fade-in"]);
          } else {
            entry.target.classList.remove(style["fade-in"]);
          }
        });
      },
      { threshold: 0.1 }
    );

    conteudoRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      conteudoRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className={style.box}>
      <div className={style.container}>
        <div className={style.info}>
          <p>VEJA ABAIXO</p>
          <h2>
            Tudo o que você vai <span>receber</span> após <br />
            <span>adquirir</span> a sua <span> mentoria</span>
          </h2>
        </div>
        <div className={style.cards}>
          <div
            className={style.card}
            ref={(el) => (conteudoRefs.current[0] = el)}
          >
            <h3>Pack Canvas</h3>
            <p>
              50 Artes prontas para você postar nas suas redes sociais
              contábeis. Vai em tamanho de feed e no tamanho de stories, bem
              como em formato estático ou carrossel para você diversificar.
            </p>
          </div>
          <div
            className={style.card}
            ref={(el) => (conteudoRefs.current[1] = el)}
          >
            <h3>Template Notion</h3>
            <p>
              Template do notion para você fazer gestão de tarefas e de
              relacionamento com clientes do seu escritório contábil. Ótima
              ferramenta para você criar padrões para o seu escritório e
              aumentar o nível de produtividade.
            </p>
          </div>
          <div
            className={style.card}
            ref={(el) => (conteudoRefs.current[2] = el)}
          >
            <h3>Parceria com Mentor</h3>
            <p>
              Todos os meus mentorados tem acesso a ser meu parceiro de negócio.
              Essa é uma grande oportunidade para que você não perca serviços
              por não ter o conhecimento técnico. Você consegue o cliente e nós
              fazemos o serviço juntos para você aprender.
            </p>
          </div>
          <div
            className={style.card}
            ref={(el) => (conteudoRefs.current[3] = el)}
          >
            <h3>Curso Master Contabil</h3>
            <p>
              Você terá 1 ano de acesso exclusivo ao meu curso, o qual já tem
              aulas gravadas e semanalmente saem 2 aulas novas para você
              alavancar os seus resultados.
            </p>
          </div>
          <div
            className={style.card}
            ref={(el) => (conteudoRefs.current[4] = el)}
          >
            <h3>Modelos de Contratos</h3>
            <p>
              Você terá acesso a diversos modelos de contratos prontos. Modelo
              de contrato social, alterações e de serviços contábeis.
            </p>
          </div>
          <div
            className={style.card}
            ref={(el) => (conteudoRefs.current[5] = el)}
          >
            <h3>Modelo de Propostas</h3>
            <p>
              Propostas comerciais que geram credibilidade na hora do fechamento
              com o cliente. Lembre-se que comunicação visual é de suma
              importância para você se destacar.
            </p>
          </div>
        </div>
        <div className={style.button}>
          <a
            href="https://wa.me/551234567890?text=Eu%20tenho%20interesse%20na%20mentoria!"
            target="_blank"
          >
            Venha adiquirir os seus bônus
          </a>
        </div>
      </div>
    </section>
  );
}
