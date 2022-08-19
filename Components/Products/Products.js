import React from "react";
import style from "../../styles/Products.module.css";
import { deafultValue } from "../Data";

const Products = () => {
  const { logo_png, data } = deafultValue.Products;

  return (
    <div className={style.Products}>
      <div className={style.container}>
        <div className={style.Products_container}>
          <div className={style.des_content}>
            <div className={style.des_content_img}>
              <img src={logo_png.img_url} alt="" />
            </div>
            <h1>Healthy skin, wildly you</h1>
          </div>
          <div className={style.itims_content}>
            {data.map((item) => {
              return (
                <div key={item.id} className={style.item}>
                  <div className={style.item_img}>
                    <div>
                      <img src={item.img_url} alt="" />
                    </div>
                  </div>
                  <div className={style.item_doc}>
                    <div className={style.total}>
                      <p>{item.name}</p>
                      <p>{item.total}</p>
                    </div>
                    <h3 className={style.tatil}>{item.title}</h3>
                  </div>
                  <div className={style.item_btn}>
                    <button>Shop now</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
