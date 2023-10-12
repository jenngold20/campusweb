import React, {useContext} from 'react'
import { ContextGlobal } from "./utils/global.context"
import icons3f from "../images/icons3f.png"
import Instagram from "../images/Instagram.png"
import fb from "../images/fb.png"
import Linkedin from "../images/Linkedin.png"
import logomuni from "../images/logomuni.png"
import logotecno3f from "../images/logotecno3f.png"






const Footer = () => {

  const {theme } = useContext(ContextGlobal);

  return (
    <footer className={theme}>
      <img src={logotecno3f} alt='LogoTecno'/>
      <img src={logomuni} alt='LogoTecno'/>


      <p>© Copyright 2023 - Tecno3F Términos y condiciones de uso</p>


      <div className='ico'>
      <img src={icons3f} alt= '3F'/>
      <img src={fb} alt='Facebook'/>
      <img src={Instagram} alt='instagram'/>
      <img src={Linkedin} alt='linkedin'/>
      </div>    
    </footer>
  )
}

export default Footer