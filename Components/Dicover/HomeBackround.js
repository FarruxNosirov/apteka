import React from "react";
import style from "../../styles/HomeBackround.module.css";

const HomeBackround = () => {
  return (
    <div className={style.Homebac}>
      <div className={style.container}>
        <div className={style.HomeBackround_container}>
          <div className={style.content_description}>
            <div className={style.description_container}>
              <div className={style.text}>
                <h1>
                  Discover The <br /> Beauty Within
                </h1>
              </div>
              <div className={style.btn_img}>
                <button>View collection</button>
                <img src="/You.png" alt="" />
              </div>
            </div>
          </div>
          <div className={style.content_bcg_img}></div>
        </div>
      </div>
      <div className={style.mobile}></div>
    </div>
  );
};

export default HomeBackround;
