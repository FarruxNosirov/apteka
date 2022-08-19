import React from "react";
import style from "../../styles/Shop_Brend.module.css";
import { deafultValue } from "../Data";
const Shop_Brend = () => {
  const { img1, img2, img3, img4, img5 } = deafultValue.shop_Brend;
  return (
    <div className={style.Shop_Brend}>
      <div className={style.container}>
        <div className={style.Shop_Brend_container}>
          <div className={style.one_content}>
            <div className={style.one_content_img_1}>
              <img src={img1.img_url} alt="" />
            </div>
            <div className={style.one_content_img_2}>
              <img src={img2.img_url} alt="" />
            </div>
          </div>
          <div className={style.two_content}>
            <h1>Natural and</h1>
            <h2>certified organic</h2>
            <div className={style.two_content_img}>
              <img src="/Zuxra Sevara.svg" alt="" />
            </div>
            <p>
              Create your own beauty with our collection and present a new look
              to those around you. And we are always here for you.
            </p>
            <button>For reference</button>
          </div>
          <div className={style.three_content}>
            <div className={style.two_content_img_1}>
              <img src={img3.img_url} alt="" />
            </div>
            <div className={style.two_content_img_2}>
              <img src={img4.img_url} alt="" />
            </div>
            <div className={style.two_content_img_3}>
              <img src={img5.img_url} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop_Brend;
