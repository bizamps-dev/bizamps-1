import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { graphql } from "gatsby"
import Img from 'gatsby-image'


import Navbar from "../components/navbar/Navbar";
import WeAreCard from "../components/B2BMarketingPage/WeAreCard";
import LeadIcon from "../assets/B2BMarketingPackages/LeadIcon";
import LeadIconMob from "../assets/B2BMarketingPackages/LeadIconMob";
import RevenueIcon from "../assets/B2BMarketingPackages/RevenueIcon";
import RevenueIconMob from "../assets/B2BMarketingPackages/RevenueIconMob"
import Testimonial from "../components/Testimonial/Testimonial"
import Footer from '../components/Footer/footer';
import Pdf from "../assets/pdf/Cold outreach Bizamp Guide_Final_For_Print.pdf";

import styles from '../stylesheets/marketingSales.module.scss';



const Marketing= (props) =>{

    return(
        <>
            <BackgroundImage fluid={props.data.BG.childImageSharp.fluid}  className={styles.container} >
                    <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} 
                    hamburger={props.data.hamburger.childImageSharp.fluid}
                    />
                    <Img fluid={props.data.DesktopBGText.childImageSharp.fluid} className={styles.blogDesktopText}/>
            </BackgroundImage > 

            <BackgroundImage fluid={props.data.MobBG.childImageSharp.fluid}  className={styles.mobContainer} >
                    <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} 
                    hamburger={props.data.hamburger.childImageSharp.fluid}/>
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

            <div className={styles.pdf}>
              <a href={Pdf} download ><button className={styles.button}>DOWNLOAD PDF</button></a> {' '}
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
                <h1 style={{margin:"1rem"}}>How we actually build it:</h1>
                <h2>#InsidePeek</h2>
                <div className={styles.peekContainer}>
                    <div className={styles.peekAlign}>
                        <div className={styles.peekContent}>
                            <div className={styles.step}>Step 1:</div>
                            <div className={styles.peekItem}>
                              <h2 className={styles.peekText}>Automate qualified prospect generation</h2>
                            </div>  
                            <div className={styles.peekImg}>
                                <Img fluid={props.data.peek1.childImageSharp.fluid} />
                            </div>
                        </div>
                        <div className={styles.peekContent}>
                            <div className={styles.step}>Step 3:</div>
                            <div className={styles.peekItem}>
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
                            <div className={styles.peekItem}>
                              <h2 className={styles.peekText}>Set & Forget Sales Email Automation for Nurturing Cold Leads</h2>
                            </div>  
                            <div >
                                <Img fluid={props.data.peek3.childImageSharp.fluid} />
                            </div>
                        </div>
                        <div className={styles.peekContent}>
                            <div className={styles.step}>Step 8:</div>
                            <div className={styles.peekItem}>
                              <h2 className={styles.peekText}>Imagine automated follow-up across the internet</h2>
                            </div>
                            <div>
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

            <div className={styles.problemContainer}>
              <h1>Custom 10-Step Marketing Plan</h1>
              <div className={styles.problemContainer1}>
                  <div className={styles.problemContent}>
                      <Img className={styles.pricingImg} style={{marginBottom:"0.5rem"}} fluid={props.data.project.childImageSharp.fluid} />
                      <p className={styles.pClass}><b>Project Title</b></p>
                  </div>
                  <div className={styles.problemContent}>
                      <Img className={styles.pricingImg} style={{marginBottom:"0.5rem"}} fluid={props.data.project1.childImageSharp.fluid} />
                      <p className={styles.pClass}> <b>User Flow- Cold to Client</b></p>
                  </div>  
              </div>
              <a href="/b2b-marketing-package"><button className={styles.button} style={{background: '#001735'}}>MARKETING PLAN BUT WHY?</button></a>
            </div>

            <div className={styles.four0Container}>
                <h1 style={{marginBottom:"0rem"}}>We are not for you, if...</h1>
                <p className={styles.pClass}><b>No Goal: You don’t have a goal in mind before engaging us<br></br>
                No Sales Process: You don’t have sales process!</b></p>
                <Img className={styles.four0Img} fluid={props.data.four0four.childImageSharp.fluid} />
            </div>
          
          

           <div className={styles.weAreContent}>
              <div className={styles.weAreHeading}>At BizAmps, We are..</div>
              <div className={styles.weAreCards}>
              <WeAreCard icon={LeadIcon} iconMob={LeadIconMob} title="Lead Generation Experts" subtitle="No generalists here" />
              <WeAreCard icon={RevenueIcon} iconMob={RevenueIconMob} title="Revenue Focused" subtitle="Growing your top-line" caption="Setting systems for life" />
              </div>
             <p className={styles.pClass}><b>Remember the fear, stress, panic</b></p>
             <p className={styles.pClass}>because of no NEW revenue and old revenue stream may stop one day?</p>
             <div className={styles.end}></div>
          </div>

           <div className={styles.problemContainer}>
              <h1>What your Sales-Marketing team actually thinks</h1>
              <div className={styles.problemContainer1}>
                  <div className={styles.problemContent}>
                      <Img className={styles.pricingImg} style={{marginBottom:"0.5rem"}} fluid={props.data.problem1.childImageSharp.fluid} />
                      <p className={styles.pClass}><b>#ProblemsWeSolve</b></p>
                  </div>
                  <div className={styles.problemContent}>
                      <Img className={styles.pricingImg} style={{marginBottom:"0.5rem"}} fluid={props.data.problem2.childImageSharp.fluid} />
                      <p className={styles.pClass}> <b>#ProblemsWeSolve</b></p>
                  </div>
              </div>
          </div>
          
          <div className={styles.teamContainer}>
            <div className={styles.founder}>
              <Img className={styles.founderImg} fluid={props.data.akshat.childImageSharp.fluid}  />
              <div className={styles.name}>Akshat Kharbanda</div>
              <div className={styles.designation}>Marketing Tactician</div>
              <div className={styles.designation}>For Phone Call: 9717019667 Location: NCR (Delhi, Gurgaon, Noida)</div>
            </div>
            <div className={styles.team}>
                <h2>Hi, I’m Akshat</h2>
                <h3>I have helped multiple businesses get clients in a systemic fashion.
                    Build them lead generations machines.
                    Managed more than $1 million of adspend.
                    Doubled inbound prospects within 15 days of already successfully running marketing campaigns.
                </h3>
                <a href="https://calendly.com/akshatkharbanda/30min?month=2020-06" target="_blank" rel="noreferrer" ><button className={styles.teamButton}>SCHEDULE A CALL</button></a>
            </div>
          </div>

          <div className={styles.teamMobContainer}>
            <div className={styles.founder}>
               <Img className={styles.founderImg} fluid={props.data.akshat.childImageSharp.fluid}  />
               <h2>Hi, I’m Akshat</h2>
                <p className={styles.pClass} style={{fontSize:"1.3rem",lineHeight:"1.6rem"}}>I have helped multiple businesses get clients in a systemic fashion.
                    Build them lead generations machines.
                    Managed more than $1 million of adspend.
                    Doubled inbound prospects within 15 days of already successfully running marketing campaigns.
                </p>
                <a href="https://calendly.com/akshatkharbanda/30min?month=2020-06" target="_blank" rel="noreferrer"><button className={styles.teamButton}>SCHEDULE A CALL</button></a>
            </div>
          </div>


          <div>
            <Testimonial conor={props.data.conor.childImageSharp.fluid} gautam={props.data.gautam.childImageSharp.fluid} />
          </div>

          <div className={styles.callContainer}>
                <h2 style={{marginBottom:"1rem"}}>BUSINESS AMPLIFIER™ - Bundled All Incl. Service</h2>
                <p className={styles.pClass}>Asia's First & Only 'Highly Automated Sales-Marketing Funnel' Done-For-You Setup</p>
                <a href="/form" target="_blank"><button className={styles.button}>GET INSTANT PROPOSAL & PRICING</button></a>
          </div>

          <div className={styles.videoContainer}>
                 <iframe title="digital sale marketing" width="800" height="450" src="https://www.youtube.com/embed/0qMZFoqsBC0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>

          

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

      hamburger: file(relativePath: { eq: "whiteHamburger.png" }) {
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
  conor: file(relativePath: { eq: "conor.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  gautam: file(relativePath: { eq: "gautam.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  akshat: file(relativePath: { eq: "akshat.jpg" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  problem1: file(relativePath: { eq: "problem1.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  problem2: file(relativePath: { eq: "problem2.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  project: file(relativePath: { eq: "project.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  project1: file(relativePath: { eq: "project1.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  four0four: file(relativePath: { eq: "four0four.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`