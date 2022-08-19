import React from "react";
import style from "../../styles/Info.module.css";
import { deafultValue } from "../Data";

const Info = () => {
  const { imgs, p_value } = deafultValue.Info;
  return (
    <div className={style.Info}>
      <div className={style.container}>
        <div className={style.box_1}>
          <p>
            Our store contains the latest innovations in the beauty industry.
            Therefore, it is very easy and simple to choose and buy cosmetics.
            We are famous for its uniqueness and best quality. You can always
            choose products for yourself and your loved ones: organic cosmetics;
            men's cosmetics and perfumes; decorative cosmetics; sun cream; body
            care products; cosmetic accessories.
          </p>
        </div>
        <div className={style.box_2}>
          <ul>
            {imgs.map((item) => {
              return (
                <li key={item.id}>
                  <img src={item.img_url} alt="" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Info;
