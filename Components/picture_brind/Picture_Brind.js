import React from "react";
import style from "../../styles/Picture_Brind.module.css";
import { deafultValue } from "../Data";
const Picture_Brind = () => {
  const image = deafultValue.picture_Brind.img_url;
  return (
    <div className={style.Picture_Brind}>
      <div className={style.container}>
        <div className={style.Picture_Brind_container}>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Picture_Brind;
