import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from "gatsby"
import Img from 'gatsby-image'


import Navbar from "../components/navbar/Navbar";
import styles from '../stylesheets/marketingSales.module.scss';
import Location from "../components/Location/Location";
import Footer from '../components/Footer/footer'



const Marketing= (props) =>{

    return(
        <>
            <BackgroundImage fluid={props.data.BG.childImageSharp.fluid}  className={styles.container} >
                    <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} />
                    <Img fluid={props.data.DesktopBGText.childImageSharp.fluid} className={styles.blogDesktopText}/>
            </BackgroundImage > 

            <BackgroundImage fluid={props.data.MobBG.childImageSharp.fluid}  className={styles.mobContainer} >
                    <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} />
                    <Img fluid={props.data.MobBGText.childImageSharp.fluid} className={styles.blogMobText}/>
            </BackgroundImage >

            <div className={styles.leadPredictionContainer}>
                    <h1>What you actually build:</h1>
                    <h2>Automated Email System until your prospects respond</h2>

            </div>

           

            <div className={styles.callContainer}>
                <h2>Book a call with Akshat</h2>
                <a href="https://calendly.com/akshatkharbanda/30min?month=2020-06" target="_blank"><button className={styles.button}>SEE TIME SLOTS</button></a>
            </div>

            <div className={styles.personContainer}>
                <div className={styles.person}>
                    <p className={styles.pClass}>"Akshat knows digital marketing, in and out. <br></br>It’s every worth your while to use BizAmps for your digital marketing initiatives. <br></br>Akshat holds an edge over others in delivering on performance marketing and SEO targets."</p>
                    <div className={styles.image}>
                        <Img fluid={props.data.image.childImageSharp.fluid} />
                    </div>
                    <p className={styles.pClass}><b>Aishwarya Vardhan Chaturvedi</b></p>
                    <p className={styles.pClass}>Head of Business Development HR SaaS Company</p>
                </div>
            </div>

            <div className={styles.videoContainer}>
                   <iframe width="800" height="450" src="https://www.youtube.com/embed/0qMZFoqsBC0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

            <Location first="Home" second="Expertise" third="Privacy Policy" />

            <Footer />
        </>
    )

}

export default Marketing;

export const IndexPageQuery = graphql`
  query {

    bizampsLogo: file(relativePath: { eq: "bizampsLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    BG: file(relativePath: { eq: "DigitalSalesMarketing-Desktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
    }

    MobBG: file(relativePath: { eq: "DigitalSalesMarketing-Mobile.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
    }

    MobBGText: file(relativePath: { eq: "MarketingMobText.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
    }

    DesktopBGText: file(relativePath: { eq: "MarketingDesktopText.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
    }

    image: file(relativePath: { eq: "aishwarya1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
    }
}`