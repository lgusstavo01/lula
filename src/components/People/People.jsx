import { useEffect, useRef } from 'react';

import style from "./People.module.css";

import { CiUser } from "react-icons/ci";
import { CiCreditCardOff } from "react-icons/ci";
import { IoBusinessOutline } from "react-icons/io5";
import { GoPersonAdd } from "react-icons/go";

export function People() {
  const conteudoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style['fade-in']);
          } else {
            entry.target.classList.remove(style['fade-in']);
          }
        });
      },
      { threshold: 0.1 }
    );

    conteudoRefs.current.forEach(ref => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      conteudoRefs.current.forEach(ref => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className={style.box}>
      <div className={style.container}>
        <div className={style.title}>
          <h2>Para quem é a mentoria?</h2>
        </div>
        <div className={style.cards}>
          <div className={style.card} ref={(el) => (conteudoRefs.current[0] = el)}>
           <p><GoPersonAdd size={64}/></p>
            <h4>Para você ...</h4>
            <p>
              que é empresário contábil, mas não sabe como se posicionar no
              digital para atrair mais clientes.
            </p>
          </div>
          <div className={style.card} ref={(el) => (conteudoRefs.current[1] = el)}>
            <p><CiUser size={64}/></p>
            <h4>Para você ...</h4>
            <p>
              que é contador CLT, mas querem começar a formar a sua carteira de
              clientes.
            </p>
          </div>
          <div className={style.card} ref={(el) => (conteudoRefs.current[2] = el)}>
            <p><IoBusinessOutline size={64}/></p>
            <h4>Para você ...</h4>
            <p>
              que já iniciou seu negócio contábil, mas sente que precisa de um
              acompanhamento, pois não consegue clientes mensalmente.
            </p>
          </div>
          <div className={style.card} ref={(el) => (conteudoRefs.current[3] = el)}>
            <p><CiCreditCardOff size={64}/></p>
            <h4>Para você ...</h4>
            <p>
              que não tem CRC, ou ainda é estudante de contabilidade, mas deseja
              começar a empreender no ramo.
            </p>
          </div>
        </div>
        <div className={style.button}>
          <button>
            <a  href="https://wa.me/551234567890?text=Eu%20tenho%20interesse%20na%20mentoria!" target="_blank">Eu quero essa mentoria</a>
          </button>
        </div>
      </div>
    </div>
  );
}
