import React from "react";
import style from "../../styles/Feature.module.css";
import { deafultValue } from "../Data";

const Feature = () => {
  const { img_url, img_url2, p_value, h3_value, h3_value2 } =
    deafultValue.Feature;
  return (
    <div className={style.Feature}>
      <div className={style.container}>
        <div className={style.Feature_container}>
          <div className={style.feature_img}>
            <div>
              <img src={img_url} alt="" />
            </div>
          </div>
          <div className={style.feature_title}>
            <div className={style.content_img}>
              <img src={img_url2} alt="" />
            </div>
            <h3>{h3_value}</h3>
            <h3>{h3_value2}</h3>
            <p>{p_value}</p>
            <button>Read more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
