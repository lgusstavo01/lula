import { useEffect, useRef } from 'react';

import style from "./Hero.module.css";

import heroFoto from "../../assets/hero-lula.png";

export function Hero() {

  const conteudoRef = useRef(null);

  useEffect(() => {
    // Cria um novo IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        // Itera sobre cada entrada de interseção
        entries.forEach((entry) => {
          // Verifica se o elemento está visível na viewport
          if (entry.isIntersecting) {
            // Adiciona a classe 'fade-in' quando o elemento está visível
            entry.target.classList.add(style['fade-in']);
          } else {
            // Remove a classe 'fade-in' quando o elemento não está visível
            entry.target.classList.remove(style['fade-in']);
          }
        });
      },
      // Define o limiar de interseção para 10%
      { threshold: 0.1 }
    );

    // Inicia a observação do elemento conteudo
    if (conteudoRef.current) {
      observer.observe(conteudoRef.current);
    }

    // Limpa o observador quando o componente é desmontado
    return () => {
      if (conteudoRef.current) {
        observer.unobserve(conteudoRef.current);
      }
    };
  }, []);


  return (
    <section className={style.box}>
      <div className={style.container} ref={conteudoRef}>
        <div className={style.infos}>
          <h1>
            <span>Contador</span>, se você quer conquistar clientes mensalmente,
            mas não sabe como, <span>você está no lugar certo!</span>
          </h1>
          <p>
            Aprenda <span>agora mesmo um método infalível</span> de como
            conquistar de <span>2 a 5 clientes</span>, aplicando
            <span> estratégias validadas</span> no offline e no digital,
            <span> sem precisar investir em trafego pago.</span>
          </p>
          <button><a  href="https://wa.me/551234567890?text=Eu%20tenho%20interesse%20na%20mentoria!" target="_blank">QUERO APRENDER</a></button>
        </div>
        <div className={style.img}>
          <img src={heroFoto} alt="" />
        </div>
      </div>
    </section>
  );
}
