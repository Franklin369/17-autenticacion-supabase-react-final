import { css } from "styled-components";
import {CiPalette} from "react-icons/ci"
import {BsEmojiLaughing} from "react-icons/bs"
import { RiDeleteBin2Line, RiEditLine } from "react-icons/ri";
import {IoIosArrowDown} from "react-icons/io"
import {RiVipCrownFill} from "react-icons/ri"
import {BiUserCircle} from "react-icons/bi"
import {RiSettings3Line} from "react-icons/ri"
import {MdExitToApp} from "react-icons/md"
import sinfoto from "../assets/dyno.png"
import { FcPicture } from "react-icons/fc";
import {CgMathPlus} from "react-icons/cg"
import {TbBrandSupabase} from "react-icons/tb"
import {FaReact} from "react-icons/fa"
export const v = {
    sidebarWidth: `300px`,
    sidebarWidthInitial: `10vw`,
    smSpacing: `8px`,
    mdSpacing: `16px`,
    lgSpacing: `24px`,
    xlSpacing: `32px`,
    xxlSpacing: `48px`,
    borderRadius: `6px`,
   

    paletacolores:CiPalette,
    emoji: BsEmojiLaughing,
    iconeditarTabla:RiEditLine,
    iconeliminarTabla:RiDeleteBin2Line,
    colorIngresos:`#53B257`,
    colorbgingresos:`#e6ffe7`,
    colorGastos:`#F54E41`,
    colorbgGastos:`#fbcbc9`,
    bpmaggie:`15em`,
    bplisa:`30em`,
    bpbart:`48em`,
    bpmarge:`62em`,
    bphomer:`75em`,
    colorPrincipal:`#00F34A`,
    boxshadowGray:`box-shadow: -2px 14px 20px -4px rgba(0,0,0,0.4);
    -webkit-box-shadow: -2px 14px 20px -4px rgba(0,0,0,0.4);
    -moz-box-shadow: -2px 14px 20px -4px rgba(0,0,0,0.4);`
    ,iconoFlechabajo:IoIosArrowDown,
    iconocorona:RiVipCrownFill,
    iconoUser:BiUserCircle,
    iconoSettings:RiSettings3Line,
    iconoCerrarSesion:MdExitToApp,
    sinfoto: sinfoto,
    iconofotovacia: FcPicture,
    verde:`#53B257`,
    rojo:`#F54E41`,
    agregar:CgMathPlus,
    iconosupabase:TbBrandSupabase,
    iconoreact:FaReact
    
};

export const btnReset = css`
    font-family: inherit;
    outline: none;
    border: none;
    background: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0;
`;
