import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout/BlogLayout'
import BlogContent from '../components/BlogTemplet/BlogContent'
import styles from '../stylesheets/templet.module.scss'
import Img from 'gatsby-image'
import SEO from "../components/seo"

const Home = (props) => {
    return(
    <>
             <SEO title="B2B International School Lead Generation Case Study | BizAmps"
                  description="How does account-based marketing work with email strategy?- we captured 10% of the whole target market immediately increasing sales leads through the our targeted outreach"/>
             
             <BlogLayout 
                logo={props.data.logo.childImageSharp.fluid}
                altForBG={"Email Outreach email"}
                bg={props.data.bg1.childImageSharp.fluid}
                mobbg={props.data.mobbg.childImageSharp.fluid}
                blogMobText={props.data.text.childImageSharp.fluid}
                blog1={props.data.blog1.childImageSharp.fluid}
                blog2={props.data.blog2.childImageSharp.fluid}
                blog3={props.data.blog3.childImageSharp.fluid}
                founder={props.data.founder.childImageSharp.fluid}
                current={'International Institutes'}
             >

             <div className={styles.headingContainer} style={{backgroundColor:"#2566BA"}}>
                <h1 className={styles.heading}>B2B Lead Generation through ABM Strategy</h1>
                <h2 className={styles.Mobheading}><b>B2B Lead Generation through ABM Strategy</b></h2>
             </div>

             <div className={styles.blogContainer}>             
                <div className={styles.blogContainer2}>
                  <h2 style={{fontFamily:"Roboto" }}>About The Client:</h2>
                  <p>The client provides a learning platform that intends to redesign the current  teacher education systems by building a network of millions of teachers. They are on a mission to empower teachers by curating tools and techniques that are easily usable in the classroom. They help teachers in skilling themselves on latest teaching methodologies and monitoring their learning to analyse if  they have improved by leaps and bounds.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Problem:</h2>
                  <p>The client was unable to outsource any leads even after hiring a highly networked sales partner.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Channel:</h2>
                  <p>Primarily focused on Cold Emails.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Process Overview:</h2>
                  <p>1. In the given scenario, the client provided us with the email ids. We used LinkedIn Connection Request Automation to get more contact information of the targets. <br></br>
                    2. The content strategists wrote customized Emails for each of the prospects.<br></br>
                    3. We uploaded 10 leads/day to our Email Outreach software.<br></br>
                    4. We followed up with the prospects for 3 months.<br></br>
                    5. Alongside, showed the prospects Ads on Facebook, Google, and other Apps.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Accomplishments:</h2>
                  <p>The client was able to engage with 10% of the entire target market immediately.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Key Bottlenecks:</h2>
                  <p>•Inability to efficiently manage the ‘No, thank you’ responses with cross-sell &  down-sell offers.</p>
                  <p>•Did not resort to Account-based marketing from the very beginning.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Client outreach replies</h2>  
                  <div className={styles.BlogimageContainer}><Img className={styles.image} alt={"Clients Outreach for leadgen"} fluid={props.data.Img1.childImageSharp.fluid}/></div>

                </div>
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

      bg1: file(relativePath: { eq: "InternationalInstituteBG.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    mobbg: file(relativePath: { eq: "InternationaslSchoolsMobBG.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    text: file(relativePath: { eq: "InternationalInstitutesText.png" }) {
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

      Img1: file(relativePath: { eq: "InternationalInstitutesImg.png" }) {
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

}
`;