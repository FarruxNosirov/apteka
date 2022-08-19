import React, { useState } from "react";
import style from "../../styles/Header.module.css";
import Heder_modal from "../Modal/Heder_modal";
import { AiOutlineMenu } from "react-icons/ai";
import { MdCall } from "react-icons/md";
import { deafultValue } from "../Data";

const Header = () => {
  const { logo_img } = deafultValue.Header;
  const [valueRight, setValueRight] = useState(false);
  return (
    <div className={style.Header}>
      <div className={style.container}>
        <div className={style.Header_container}>
          <div className={style.icon_menu}>
            <AiOutlineMenu
              size={24}
              color="#68513F"
              onClick={() => setValueRight(true)}
            />
          </div>
          <div className={style.logo}>
            <img src={logo_img.img_url} />
          </div>
          <a href="tel:+9989011951625" className={style.call_icon}>
            <MdCall size={24} color="#68513F" />
          </a>
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
              <a href="tel:+998901951625" className={style.icon}>
                <img src="Vector.png" alt="" />
              </a>
            </div>
          </div>
        </div>
        <Heder_modal setValueRight={setValueRight} valueRight={valueRight} />
      </div>
    </div>
  );
};

export default Header;
