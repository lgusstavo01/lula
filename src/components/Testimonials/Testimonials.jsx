import styles from "./Testimonials.module.css";
import { useEffect, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "./style.css";

import "swiper/css/bundle";

import { Autoplay } from "swiper/modules";

export function Testimonials() {
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
            entry.target.classList.add(styles["fade-in"]);
          } else {
            // Remove a classe 'fade-in' quando o elemento não está visível
            entry.target.classList.remove(styles["fade-in"]);
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
    <div className={styles.box}>
      <section className={styles.container} ref={conteudoRef}>
        <div className={styles.textContainer}>
          <h2>Veja depoimentos de pessoas que investiram.</h2>
        </div>
        <div>
          <div>
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              modules={[Autoplay]}
              autoplay={{ delay: 5000 }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
              }}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="textSwiper">
                  <div>
                    <h2>Luiz Gustavo</h2>
                    <p>Developer WEB</p>
                  </div>
                </div>
                <div className="depoimento">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, accusantium. Delectus, accusamus. Quidem tenetur
                    quisquam, eveniet asperiores amet quasi tempore facilis
                    voluptas, iure animi quae, reiciendis vel praesentium
                    consectetur illum?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="textSwiper">
                  <div>
                    <h2>Luiz Gustavo</h2>
                    <p>Developer WEB</p>
                  </div>
                </div>
                <div className="depoimento">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, accusantium. Delectus, accusamus. Quidem tenetur
                    quisquam, eveniet asperiores amet quasi tempore facilis
                    voluptas, iure animi quae, reiciendis vel praesentium
                    consectetur illum?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="textSwiper">
                  <div>
                    <h2>Luiz Gustavo</h2>
                    <p>Developer WEB</p>
                  </div>
                </div>
                <div className="depoimento">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, accusantium. Delectus, accusamus. Quidem tenetur
                    quisquam, eveniet asperiores amet quasi tempore facilis
                    voluptas, iure animi quae, reiciendis vel praesentium
                    consectetur illum?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="textSwiper">
                  <div>
                    <h2>Luiz Gustavo</h2>
                    <p>Developer WEB</p>
                  </div>
                </div>
                <div className="depoimento">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, accusantium. Delectus, accusamus. Quidem tenetur
                    quisquam, eveniet asperiores amet quasi tempore facilis
                    voluptas, iure animi quae, reiciendis vel praesentium
                    consectetur illum?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="textSwiper">
                  <div>
                    <h2>Luiz Gustavo</h2>
                    <p>Developer WEB</p>
                  </div>
                </div>
                <div className="depoimento">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, accusantium. Delectus, accusamus. Quidem tenetur
                    quisquam, eveniet asperiores amet quasi tempore facilis
                    voluptas, iure animi quae, reiciendis vel praesentium
                    consectetur illum?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="textSwiper">
                  <div>
                    <h2>Luiz Gustavo</h2>
                    <p>Developer WEB</p>
                  </div>
                </div>
                <div className="depoimento">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur, accusantium. Delectus, accusamus. Quidem tenetur
                    quisquam, eveniet asperiores amet quasi tempore facilis
                    voluptas, iure animi quae, reiciendis vel praesentium
                    consectetur illum?
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className={styles.links}>
            <a
              href="https://wa.me/551234567890?text=Eu%20tenho%20interesse%20na%20mentoria!"
              target="_blank"
            >
              Venha ser um mentorado
            </a>
            {/* <a href="">
              <LuMessagesSquare />
              Falar com um especialista
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
