import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout/BlogLayout'
import styles from '../stylesheets/templet.module.scss'
import Img from 'gatsby-image'
import SEO from "../components/seo"

const Home = (props) => {
    return(
    <>
             <SEO title="B2B Outreach Clients: Enterprise Case Study | BizAmps"
                  description="Here is the complete B2B Enterprise Case Study for you. 75+ Responses within 2.5 months of Clients Outreach with 25+ positively invited conversations with top corporations of India"/>
                  
             <BlogLayout 
                logo={props.data.logo.childImageSharp.fluid}
                hamburger={props.data.hamburger.childImageSharp.fluid}
                bg={props.data.bg1.childImageSharp.fluid}
                mobbg={props.data.mobbg.childImageSharp.fluid}
                blogMobText={props.data.text.childImageSharp.fluid}
                blog1={props.data.blog1.childImageSharp.fluid}
                blog2={props.data.blog2.childImageSharp.fluid}
                blog3={props.data.blog3.childImageSharp.fluid}
                blog4={props.data.blog4.childImageSharp.fluid}
                founder={props.data.founder.childImageSharp.fluid}
                current={'Indian Enterprise'}
                color={'#2F80ED'}
             >

             <div className={styles.headingContainer}>
                <h1 className={styles.heading}>B2B Enterprise Case Study</h1>
                <h2 className={styles.Mobheading}><b>B2B Enterprise Case Study</b></h2>
             </div>

             <div className={styles.blogContainer}>             
                <div className={styles.blogContainer2}>

                  
                  <h2 style={{fontFamily:"Roboto", marginLeft:"0rem",marginBottom:"0.5rem" }}>About The Client:</h2>
                  <p>The client wanted to pivot away from cold calling to a more efficient method. Previously, six agencies had helped them achieve their goal to some extent. However, these companies lacked considerably in generating consistent outputs.</p>
                  <br></br>

                  <h2 style={{fontFamily:"Roboto", marginLeft:"0rem",marginBottom:"0.5rem" }}>Problem:</h2>
                  <p>The client wanted to pivot away from cold calling to a more efficient method. Previously, six agencies had helped them achieve their goal to some extent. However, these companies lacked considerably in generating consistent outputs.</p>
                  <br></br>

                  <h2 style={{fontFamily:"Roboto", marginLeft:"0rem",marginBottom:"0.5rem" }}>Target:</h2>
                  <p>Chief Human Resources Officer of companies with over 1000 employees in  Delhi -NCR & Mumbai region.</p>
                  <br></br>
                  <h2 style={{fontFamily:"Roboto", marginLeft:"0rem",marginBottom:"0.5rem" }}>Channel:</h2>
                  <p>Cold Emails + LinkedIn<br></br>
                  Here is the complete process overview of our B2B Enterprise Case Study.</p>
                  <br></br>

                  <h2 style={{fontFamily:"Roboto", marginLeft:"0rem",marginBottom:"0.5rem" }}>Process Overview:</h2>
                  <p>1. We collected the data from different sources like LinkedIn and various data  enrichment tools.<br></br>
                  2. Our content strategists carefully understood the client’s services and curated  content after understanding how their services can solve the target’s  problems. This was able to grab their attention, generating responses. <br></br>
                  3. Established connections with the targets on LinkedIn using the automated tool  from the Client’s profile.<br></br>
                  4.The B2B researcher wrote customized Emails for each of the leads and prospects.<br></br>
                  5. We uploaded 30 leads per day to our Email Outreach software which reached  out and followed up with the prospects for 3 months.<br></br>
                  6. Alongside, showed the prospects Ads on Facebook, Google, and other Apps.</p>
                  <br></br>

                  <h2 style={{fontFamily:"Roboto", marginLeft:"0rem",marginBottom:"0.5rem" }}>Accomplishments:</h2>
                  <p>• The process mentioned above helped the client to generate 25+ responses  within 2.5 months of starting outreach. <br></br>
                  • The client was able to reach out to 1000 prospects resulting into 75 responses, out of which 25+ responded positively inviting conversations.</p>
                  <br></br>

                  <h2 style={{fontFamily:"Roboto", marginLeft:"0rem",marginBottom:"0.5rem" }}>Key Bottlenecks:</h2>
                  <p>• Since the client’s website was not optimized for generating leads when the Ads were run, we had to discontinue that form of lead generation.<br></br>
                   • We realized starting LinkedIn earlier would have helped us generate more leads.</p>
                  <br></br>

                  <h2 style={{fontFamily:"Roboto", marginLeft:"0rem",marginBottom:"0.5rem" }}>Client outreach replies</h2>

                  <div className={styles.BlogimageContainer}><Img className={styles.image} fluid={props.data.Img1.childImageSharp.fluid}/></div>

                </div>
              </div>
             </BlogLayout> 
              
    </>
    )
}

export default Home;

export const BlogLedgenQuery = graphql`
  query {

    logo: file(relativePath: { eq: "LogoPurple.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      hamburger: file(relativePath: { eq: "blueHamburger.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    bg1: file(relativePath: { eq: "IndianEnterpriseBG.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    mobbg: file(relativePath: { eq: "IndianEnterpriseMobBG.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    text: file(relativePath: { eq: "IndianEnterpriseText.png" }) {
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

      Img1: file(relativePath: { eq: "IndianEnterpriseImg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blog1: file(relativePath: { eq: "CS1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blog2: file(relativePath: { eq: "CS2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blog3: file(relativePath: { eq: "CS3.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      blog4: file(relativePath: { eq: "CS4.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

}
`;