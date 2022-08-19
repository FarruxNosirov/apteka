import React from "react";
import style from "../../styles/Human_Picture.module.css";
import { deafultValue } from "../Data";

const Human_Picture = () => {
  const { data } = deafultValue.Human_Picture;
  return (
    <div className={style.Human_Picture}>
      <div className={style.container}>
        {data.map((item) => {
          return (
            <div className={style.item}>
              <div className={style.item_icon}>Body Wash</div>
              <img src={item.img_url} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Human_Picture;
