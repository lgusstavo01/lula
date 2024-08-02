import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import style from "./Learn.module.css";
import { MdDeveloperMode } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import { PiShareNetworkDuotone } from "react-icons/pi";

export function Learn() {
  return (
    <section className={style.box}>
      <div className={style.container}>
        <div className={style.info}>
          <p>VEJA ABAIXO</p>
          <h2>
            Tudo o que você vai aprender após <br />
            adquirir a sua mentoria
          </h2>
        </div>
        <div className={style.cards}>
          <div className={style.card}>
            <span>
              <BsInstagram size={32} />
            </span>
            <h4>Instagram</h4>
            <p>
              Aprenderá como utilizar o instagram de forma profissional para
              atrair clientes na contabilidade. Edição da biografia, destaques,
              o que postar no reels e no feed de forma estratégica.
            </p>
          </div>
          <div className={style.card}>
            <span>
              <BsWhatsapp size={32} />
            </span>
            <h4>Whatsapp</h4>
            <p>
              Como utilizar o Whatsapp como uma ferramenta estratégica para
              captar e fidelizar clientes. Você aprenderá a forma profissional
              de utilizá-lo, a qual aumentará a sua autoridade de forma muito
              rápida.
            </p>
          </div>
          <div className={style.card}>
            <span>
              <MdDeveloperMode size={32} />
            </span>
            <h4>Site</h4>
            <p>
              Aprenderá a estratégia de utilização de sites ao seu favor para
              captar novos clientes. Esse é um excelente cartão de visita
              digital, e muitos clientes vão ao google buscar a sua
              contabilidade. Se você tiver site, sairá na frente.
            </p>
          </div>
          <div className={`${style.card} ${style.columnStart}`}>
            <span>
              <FaRegEye size={32} />
            </span>
            <h4>Comunicação Visual</h4>
            <p>
              A comunicação visual é um ponto chave para você atrair clientes.
              Sabe aquela frase: a primeira impressão é a que fica ? Ela é
              verdadeira! Nós como profissionais da contabilidade precisamos
              prestar atenção nesse ponto importantíssimo.
            </p>
          </div>
          <div className={`${style.card} ${style.columnEnd}`}>
            <span>
              <PiShareNetworkDuotone size={32} />
            </span>
            <h4>Networking</h4>
            <p>
              Fazer novos relacionamentos é muito importante para que possamos
              avançar. Você aprenderá como fazer novos parceiros e clientes
              através do network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
