import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout/BlogLayout'
import styles from '../stylesheets/templet.module.scss'
import Img from 'gatsby-image'
import SEO from "../components/seo"


const Home = (props) => {
    return(
    <>
             <SEO title="100 letters VS 100 emails, what is better?"
                  description="Is old really gold? The best way to reach executives is via Direct Mail, but is it? See results of our experiment"/>
            
             <BlogLayout 
                logo={props.data.logo.childImageSharp.fluid}
                hamburger={props.data.hamburger.childImageSharp.fluid}
                bg={props.data.bg1.childImageSharp.fluid}
                mobbg={props.data.mobbg.childImageSharp.fluid}
                blogMobText={props.data.text.childImageSharp.fluid}
                founder={props.data.founder.childImageSharp.fluid}
                current={'[BLOG] Direct Mails vs Cold emails'}
                blog1={props.data.blog1.childImageSharp.fluid}
                blog2={props.data.blog2.childImageSharp.fluid}
                blog3={props.data.blog3.childImageSharp.fluid}
                blog4={props.data.blog4.childImageSharp.fluid}
                blog5={props.data.blog5.childImageSharp.fluid}
                blog6={props.data.blog6.childImageSharp.fluid}
                checkoutBlog={true}
             >
                 <div className={styles.blogContainer}>             
                  <div className={styles.blogContainer2}>
                    <p>We conducted an experiment where we sent 100 letter and 100 emails to cold prospects to see which one yields better results, here's the process and result:</p>

                    <p style={{display:"flex",justifyContent:"center",fontSize:"2rem",margin:"2rem"}}><b>Process overview:</b></p>
                    <p>While conducting the experiment, I kept certain things constant for better results.</p>   <p> 1. I customized the first two lines of the emails and letters both.<br></br>
                        2. Budget: INR 5,000 each<br></br>
                        3. Key performance indicator: Leads<br></br>
                        4. Detailed Breakdown</p>
                        <br></br>
                        <br></br>

                    <h2 style={{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}}>The following table shows the detailed breakdown of the 2 processes.</h2>
                    <br></br>
                    <div className={styles.BlogimageContainer}><Img className={styles.table} fluid={props.data.table1.childImageSharp.fluid}/></div>
                    <br></br>
                    <p>Clearly, email wins! Even though the net result is the same, emails save time! And well, time is money… right?</p>
                    <br></br>
                    <br></br>

                    <p className={styles.QuestionBlog2}>But why did I even consider direct mail in the first place?</p>
                    <p>Why should one waste time, money, and efforts in sending out letters to clients when emails can get the job done in seconds.</p>
                    <p>“Envelopes actually addressed by hand often outperform all others in controlled split-tests.” - Dan Kennedy</p>
                    <p>Dan Kennedy, whom I respect a lot, is a traditional marketer and a very notable copywriter.</p>
                    <p>He believes that various old school methods get the work done better than modern digitized ones.</p>
                    <br></br>
                    <br></br>

                    <h2 style={{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}}>Secondly, direct mail stands out.</h2>
                    <p>The average lifespan of an email is now just 2 seconds and brand recall directly after seeing a digital ad is just 44%, compared to direct mail which has a brand recall of 75%. This helps in account-based marketing.</p>
                    <p>However, over the years printing costs have fallen but the postage costs have increased considerably, and thus direct mail cannot be used as the only means to approach people.</p>
                    <br></br>
                    <br></br>

                    <h2 style={{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}}>One can use direct mails when approaching a group of people who are not tech-savvy.</h2>
                    <p>Direct mail also works well when the motive is to grab the attention of people holding top positions like the CFO or CMO of a company. Their attention is super valuable but scarce.</p>
                    <p>Imagine getting 800 emails every day versus getting a letter addressed specifically to you. Wouldn’t you opt for the letter too?
                    </p>
                    <br></br>
                    <br></br>

                    <h2 style={{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}}>We can use direct mails when the target market is small.</h2>
                    <p>You can see it as a small field of crops. When the field is small, the farmer can manually sow the seeds and thus does not need heavy machinery.</p>
                    <p>A small target allows you to customize your letters without incurring enormous costs.</p> 
                    <p>However, many businesses refrain from using it.</p>
                    <p>This is because email with its low start-up costs still receives a larger return on investment despite the higher response rate of direct mail.</p>
                    <br></br>
                    <br></br>

                    <h2 style={{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}}>Email marketing delivers over 5x higher ROI than direct mail.</h2>
                    <p>Emails are cheap and track-able unlike letters that might get lost in the post offices even after spending money on them. Besides, people are more comfortable in sharing their email ids as they can simply unsubscribe if they receive emails they are not interested in.</p>
                    <p>Thus, if given a choice, I would rather send a gift across than wasting 7 hours in writing letters!
                    </p>
                    <br></br>
                    <br></br>

                    <h2 style={{color:"black",marginBottom:"0.2rem",marginLeft:"0rem"}}>So, while small businesses are concerned, letters work; but to scale you have to switch to emails.</h2>
                    <p>We at BizAmps use email automation that ensures your emails are received by the right people and the right time. No waste of time or money!</p>
                    <p>We customize the first liners and also curate content that would please the reader and also generate a need for your service.</p>
                    <p>Check out our B2B Marketing pricing and packages</p>
                    <p>So, when life gives you BizAmps, take the leads!</p>
                  </div>
               </div>

               <div className={styles.videoContainer}>
               <iframe title="100 letters VS 100 emails, what is better?" width="560" height="315" src="https://www.youtube.com/embed/56GQPH9KJjE" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
              
             </BlogLayout> 
              
    </>
    )
}

export default Home;

export const BlogLedgenQuery = graphql`
  query {

    logo: file(relativePath: { eq: "bizampsLogo.png" }) {
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

    bg1: file(relativePath: { eq: "Blog100mailsbg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mobbg: file(relativePath: { eq: "Mob100mails.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    founder: file(relativePath: { eq: "person.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    table: file(relativePath: { eq: "Blog100mailsTable.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    table1: file(relativePath: { eq: "Blog100mailsTable.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    text: file(relativePath: { eq: "Blog100MailText.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    blog1: file(relativePath: { eq: "Blog1.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    blog2: file(relativePath: { eq: "Blog2.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    blog3: file(relativePath: { eq: "Blog3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    blog4: file(relativePath: { eq: "Blog4.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    blog5: file(relativePath: { eq: "Blog5.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    blog6: file(relativePath: { eq: "Blog6.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

}
`;