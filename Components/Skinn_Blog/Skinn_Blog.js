import React from "react";
import style from "../../styles/Skinn_Blog.module.css";
import { deafultValue } from "../Data";

const Skinn_Blog = () => {
  const { skinn_title, data } = deafultValue.Skinn_Blog;
  return (
    <div className={style.Skinn_Blog}>
      <div className="container">
        <div className={style.Skinn_Blog_Container}>
          <div className={style.title}>
            <h2>{skinn_title.value}</h2>
          </div>
          <div className={style.blog_body}>
            {data.map((item) => {
              return (
                <div className={style.blog_body_item}>
                  <div className={style.item_img}>
                    <img src={item.img_url} alt={item.title} />
                  </div>
                  <div className={style.item_doc}>
                    <p>{item.title}</p>
                    <button>Read more</button>
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

export default Skinn_Blog;
