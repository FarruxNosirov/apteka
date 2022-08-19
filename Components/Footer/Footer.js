import React from "react";
import style from "../../styles/Footer.module.css";
import { deafultValue } from "../Data";
import { BsFacebook, BsPinterest, BsTwitter } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  const { item_1, item_2, item_3, item_4 } = deafultValue.Footer;
  const { logo_img } = deafultValue.Header;
  return (
    <div className={style.Footer}>
      <div className={style.container}>
        <div className={style.footer_container}>
          <div className={style.item_1}>
            <div className={style.item_1_img}>
              <img src={logo_img.img_url} alt="" />
            </div>
            <div className={style.box_1}>
              <p>{item_1.p_value_1}</p>
            </div>
            <div className={style.box_2}>
              <p>{item_1.p_value_2}</p>
            </div>
          </div>
          <div className={style.item_2}>
            <div className={style.item_2_title}>
              <h3> {item_2.title} </h3>
            </div>
            <div className={style.content}>
              <ul className={style.content_ul_1}>
                {item_2.data_1.map((valeu) => {
                  return <li key={valeu.id}>{valeu.value}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className={style.item_3}>
            <div className={style.item_3_title}>
              <h3>{item_3.title} </h3>
            </div>
            <div className={style.div_value}>
              <p>{item_3.p_value_1}</p>
              <span> {item_3.span_value_1}</span>
            </div>
            <div className={style.div_value_2}>
              <p>{item_3.p_value_2}</p>
              <span> {item_3.span_value_2}</span>
            </div>
          </div>
          <div className={style.item_4}>
            <div className={style.item_4_title}>
              <h3>{item_4.title} </h3>
            </div>
            <div className={style.item_4_body}>
              <div className={style.document}>
                <h4>{item_4.h4_value}</h4>
                <p> {item_4.p_value_1} </p>
                <p> {item_4.p_value_2} </p>
                <p> {item_4.p_value_3} </p>
                <p> {item_4.p_value_4} </p>
              </div>
              <div className={style.icons}>
                <BsFacebook />
                <AiOutlineInstagram />
                <BsPinterest />
                <BsTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
