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
                    <div className={styles.leadImage}>
                        <Img fluid={props.data.leadPrediction.childImageSharp.fluid} />
                    </div>
                    <p className={styles.pricingClass}>Flow's Purpose - Cold Lead to Warm Prospects</p>
                    <div className={styles.end}></div>
            </div>

            <div className={styles.Container1}>
                    <h1>Pricing</h1>
                    <div className={styles.pricingAlign}>
                        <div className={styles.pricingchild1}>
                          <div className={styles.child1Heading}>
                            <h2 style={{margin:"1rem"}}>Building In-House Team</h2>
                          </div>
                          <div className={styles.child1Content}>
                            <p className={styles.pricingSubtitle}>Calculate Yourself?</p>
                            <p className={styles.pricingClass}>Marketing Expert – 75K/month</p>
                            <p className={styles.pricingClass}>Prospector (Junior) – 15K/month</p>
                            <p className={styles.pricingClass}>Web Developer – 40K/month</p>
                            <p className={styles.pricingClass}>Content Writer (Freelance) – 25K</p>
                            <p className={styles.pricingClass}>Tool Cost – Unknown.</p>
                            <p className={styles.pricingClass}>Timeline – Uncertain</p>
                            <p className={styles.pricingClass}>Strategy? – Maybe</p>
                            <p className={styles.pricingClass}>Good Results? – Maybe</p>
                          </div>
                        </div>

                        <div className={styles.pricingchild1}>
                          <div className={styles.child1Heading}>
                            <h3 style={{margin:"1rem"}}>Business Amplifier™ - Client Acquisition Automation</h3>
                          </div>
                          <p className={styles.pricingClass}>BizAmps Agency</p>
                          <div className={styles.child1Content}>
                            <p className={styles.pricingSubtitle}>Flat Price</p>
                            <p className={styles.pricingClass}>Marketing Strategist & Plan</p>
                            <p className={styles.pricingClass}>B2B Lead Prospector (Junior)</p>
                            <p className={styles.pricingClass}>WordPress Web Developer</p>
                            <p className={styles.pricingClass}>Copywriter</p>
                            <p className={styles.pricingClass}>No Hidden Tools Cost/Fees</p>
                            <p className={styles.pricingClass}>6 Months & Done</p>
                            <p className={styles.pricingClass}>Proven Marketing Strategy</p>
                            <p className={styles.pricingClass}>Automation Setup Done-For-You</p>
                            <p className={styles.pricingClass}>Analytics – Lead’s activity,Session Recording</p>
                            <p className={styles.pricingClass}>Instant Notifications Setup–Hot Lead System</p>
                            <p className={styles.pricingClass}>PS: It’s less than 7 Lakh for complete (all incl.)</p>
                            <p className={styles.pricingClass}><b>Video has everything you need to know</b></p>
                            <div className={styles.pricingFooter}>
                              <h4 style={{margin:"1rem"}}><b>VIEW EXACT PRICE WITH INSTANT PROPOSAL</b></h4>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className={styles.end}></div>
            </div>

            <div className={styles.insiderContainer}>
                <h1>How we actually build it:</h1>
                <h2>#InsidePeak</h2>
                <div className={styles.peekContainer}>
                    <div className={styles.peekAlign}>
                        <div className={styles.peekContent}>
                            <div className={styles.step}>Step 1:</div>
                            <div style={{width:"100%",height:"10vh",margin:"1rem 0rem"}}>
                              <h2 className={styles.peekText}>Automate qualified prospect generation</h2>
                            </div>  
                            <div className={styles.peekImg}>
                                <Img fluid={props.data.peek1.childImageSharp.fluid} />
                            </div>
                        </div>
                        <div className={styles.peekContent}>
                            <div className={styles.step}>Step 3:</div>
                            <div style={{width:"100%",height:"10vh",margin:"1rem 0rem"}}>
                              <h2 className={styles.peekText}>We build Offer/Product & Trust Pages for you</h2>
                            </div>
                            <div className={styles.peekImg}>
                                <Img fluid={props.data.peek2.childImageSharp.fluid} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.peekAlign}>
                        <div className={styles.peekContent}>
                            <div className={styles.step}>Step 7:</div>
                            <div style={{width:"80%",height:"10vh",margin:"1rem 0rem"}}>
                              <h2 className={styles.peekText}>Set & Forget Sales Email Automation for Nurturing Cold Leads</h2>
                            </div>  
                            <div style={{width:"90%"}}>
                                <Img fluid={props.data.peek3.childImageSharp.fluid} />
                            </div>
                        </div>
                        <div className={styles.peekContent}>
                            <div className={styles.step}>Step 8:</div>
                            <div style={{width:"80%",height:"10vh",margin:"1rem 0rem"}}>
                              <h2 className={styles.peekText}>Imagine automated follow-up across the internet</h2>
                            </div>
                            <div style={{width:"90%"}}>
                                <Img fluid={props.data.peek4.childImageSharp.fluid} />
                            </div>
                        </div>
                    </div>
                   
                        <div className={styles.peekContent}>
                            <div className={styles.step}>Step 10:</div>
                            <h2 className={styles.peekText}>Step 10: Lead got Hot! Got Notified?</h2>
                            <h3 className={styles.peekText}> #InsidePeak #BizAmpsExclusive #FreeForever</h3>
                            <div className={styles.peekImg}>
                                <Img fluid={props.data.peek5.childImageSharp.fluid} />
                            </div>
                        </div>
                   
                </div>
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

    leadPrediction: file(relativePath: { eq: "LeadsPrediction.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
  }
    peek1: file(relativePath: { eq: "peek1.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  peek2: file(relativePath: { eq: "peek2.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  peek3: file(relativePath: { eq: "peek3.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  peek4: file(relativePath: { eq: "peek4.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  peek5: file(relativePath: { eq: "peek5.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`