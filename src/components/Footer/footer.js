import React from 'react'

import Facebook from '../../assets/Footer/Facebook'
import Instagram from '../../assets/Footer/Instagram'
import Linkedin from '../../assets/Footer/Linkedin'
import Slideshare from '../../assets/Footer/Slideshare'
import Twitter from '../../assets/Footer/Twitter'
import Youtube from '../../assets/Footer/Youtube'

import '../../stylesheets/footer.css'

const Footer = () => {
    return (
        <div className="footerContainer" >
            <div className="iconContainer">
                <a href="https://www.youtube.com/channel/UCdEdhgYoVI73IR21AmylKRw" target="_blank"><span className="icons"><Youtube/></span></a>
                <a href="https://www.slideshare.net/AkshatKharbanda" target="_blank"><span className="icons"><Slideshare /></span></a>
                <a href="https://www.linkedin.com/company/biz-amps/" target="_blank"><span className="icons"><Linkedin /></span></a>
                <a href="https://www.instagram.com/bizamps/?hl=en" target="_blank"><span className="icons"><Instagram /></span></a>
                <a href="https://www.facebook.com/businessamplifiers" target="_blank"><span className="icons"><Facebook /></span></a>
                <a href="https://www.youtube.com/channel/UCdEdhgYoVI73IR21AmylKRw" target="_blank"><span className="icons"><Twitter /></span></a>
            </div>
            <hr/>
            <div className="title">BizAmps is B2B marketing consultancy based out of India. The team is spread across Delhi NCR, Chandigarh & Mumbai</div>
            <div className="subtitle"><a style={{textDecoration:"none",color: "#FFFFFF"}} href="/PrivacyPolicy" target="_blank">All Rights Reserved © Copyright 2020 | Privacy policy</a> </div>
        </div>
    )
}

export default Footer
