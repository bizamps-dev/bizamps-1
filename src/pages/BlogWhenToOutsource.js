import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout/BlogLayout'
import BlogContent from '../components/BlogTemplet/BlogContent'
import styles from '../stylesheets/templet.module.scss'



const Home = (props) => {
    return(
    <>
             <BlogLayout 
                logo={props.data.logo.childImageSharp.fluid}
                bg={props.data.bg1.childImageSharp.fluid}
                mobbg={props.data.mobbg.childImageSharp.fluid}
                founder={props.data.founder.childImageSharp.fluid}
             >
               <div className={styles.blogContainer}>             
               <div className={styles.blogContainer2}>
                  <p className={styles.QuestionBlog2}>Q: Should you outsource 100% LeadGen?</p>
                    <p>A1: It goes without saying, in the long term: <span style={{color:'#2F80ED'}}> Never Outsource 100% LeadGen.</span></p>
                    <p style={{fontWeight:"bold"}}>Here’s why:</p>
                    <p>What if the agency/channel starts to die down? You are looking at an anxiety-filled time of empty pipelines and initiation of slow decline!
                    Initially, you can outsource 100% of it until you ready to scale though make sure the agency doesn’t spam your brand name.</p>


                  <p className={styles.QuestionBlog2}>Q: How long does it take to see consistent results?</p>
                    <p>A2: <b>Three months </b>, even with your own full time in-house team. It’s just how it is.</p>
                    <p>There are more variables than you can imagine with outbound marketing. Read our insider’s guide to avoid my mistakes.</p>

                    <p className={styles.QuestionBlog2}>Q: What’s it’s gonna cost me in-house vs outsourced to an agency?</p>
                      <p>A3: Inhouse -₹50K – ₹2L , Agency – ₹80K to ₹2L</p>
                      <p>assuming part-time workers for inhouse ) At Bizamps, we even add our heavy lifting and sales automation services in <span>lead generation pricing.</span>(If the client needs that)</p>


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

    bg1: file(relativePath: { eq: "WhenToOutsource.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mobbg: file(relativePath: { eq: "mobofblog2.jpg" }) {
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


}
`;