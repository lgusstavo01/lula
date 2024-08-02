import style from "./Hero.module.css";

import heroFoto from "../../assets/hero-lula.png";

export function Hero() {
  return (
    <section className={style.box}>
      <div className={style.container}>
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
          <button>QUERO APRENDER</button>
        </div>
        <div className={style.img}>
          <img src={heroFoto} alt="" />
        </div>
      </div>
    </section>
  );
}
