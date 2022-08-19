import React from "react";
import style from "../../styles/Heder_modal.module.css";
import { AiOutlineClose } from "react-icons/ai";

const Heder_modal = ({ valueRight, setValueRight }) => {
  return (
    <div
      style={{ left: valueRight ? "0%" : "-100%" }}
      className={style.Heder_modal}
    >
      <div className={style.content_container}>
        <div className={style.icons}>
          <AiOutlineClose onClick={() => setValueRight(false)} />
        </div>
        <div className={style.logo}>
          <div>
            <img src="/Logo.png" />
          </div>
        </div>
        <div className={style.propirte}>
          <ul className={style.ul_container}>
            <li>
              <a href="#">Shop All</a>
            </li>
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
          </ul>
        </div>
        <div className={style.contact}>
          <div className={style.contact_numbir}>
            <a href="">
              <span>+998 000 00 00</span>
            </a>
          </div>
          <div className={style.contact_call}>
            <div className={style.icon}>
              <img src="Vector.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heder_modal;
