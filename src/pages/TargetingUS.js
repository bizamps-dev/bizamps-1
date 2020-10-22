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
             <SEO title="B2B Marketing for Blockchain Tech Enterpise | Case study"
                  description="See How we enhanced business leads for a U.S. based blockchain tech services startup using our lead generation techniques and LinkedIn outreach-b2b enterprise case study.
                  "/>
                  
             <BlogLayout 
                logo={props.data.logo.childImageSharp.fluid}
                bg={props.data.bg1.childImageSharp.fluid}
                mobbg={props.data.mobbg.childImageSharp.fluid}
                DesktopText={props.data.text1.childImageSharp.fluid}
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
                  <p>The client is a blockchain and software development services provider looking  for product development and blockchain-related development projects in the US.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Scenario:</h2>
                  <p>Before working with Bizamps, the company acquired clients through personal  networks and referrals. Thus, they were looking for a more scalable and predictable way of getting leads, prospects, and clients.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Target:</h2>
                  <p>CEO and technology heads of blockchain companies for 1-100 employees in  the USA</p>

                  <h2 style={{fontFamily:"Roboto" }}>Channel:</h2>
                  <p>Concise, Text-only, Conversational, Non-sales-y cold emails, and LinkedIn message chains.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Thoughts behind channel selection:</h2>
                  <p>Since we were only targeting crypto and blockchain startups in the U.S, our  target market consisted of only 3000 target accounts. Hence 1-on-1 marketing  mediums like LinkedIn & emails made more sense because we would not be wasting any money mass ad or marketing campaigns as their target market avidly uses these mediums. On top of that, these mediums being free made the deal even sweeter.</p>

                  <h2 style={{fontFamily:"Roboto" }}>Process Overview:</h2>
                  <p>We collected the data from different sources like LinkedIn and various data  enrichment tools. <br></br>
                    1. Our content strategists carefully understood the client’s services and the  target's problems. BizAmps then crafted content that acknowledged the target's problems, grabbed their attention, and generated responses. <br></br>
                    2. We established LinkedIn connections with the prospects using the automated tool from the client’s profile. Later, we initiated blockchain related conversations with them.<br></br>
                    3. We uploaded 50 leads per day to our email outreach software that reached out and followed up with the prospects for 3 months.</p><br></br>

                  <h2 style={{fontFamily:"Roboto" }}>Accomplishments:</h2>
                  <p>1. The client was able to reach out to 1000 prospects resulting in 75 responses.  Out of the 75 responses, 40+ responded positively, inviting conversations. <br></br>
                    2. From these 40+ responses, 11-10 were established as strong conversations.  This helped the company gain one client with 2 more clients close to being secured. Apart from this, we established a couple of 1:1 connections and fruitful conversations. <br></br>
                    3. The client's network grew on LinkedIn in a way that should prove beneficial in the long run.</p><br></br>

                  <h2 style={{fontFamily:"Roboto" }}>Client outreach replies</h2>  
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

    logo: file(relativePath: { eq: "bizampsLogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    bg1: file(relativePath: { eq: "TargetingBG.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    mobbg: file(relativePath: { eq: "TargetingUSMobBG.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

    text: file(relativePath: { eq: "TargetingText.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    
    text1: file(relativePath: { eq: "TargetingUsDesktopText.png" }) {
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

    Img1: file(relativePath: { eq: "TargetingImg.png" }) {
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