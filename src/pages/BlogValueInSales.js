import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout/BlogLayout'
import BlogContent from '../components/BlogTemplet/BlogContent'
import styles from '../stylesheets/templet.module.scss'
import Img from 'gatsby-image'



const Home = (props) => {
    return(
    <>
             <BlogLayout 
                logo={props.data.logo.childImageSharp.fluid}
                bg={props.data.bg1.childImageSharp.fluid}
                mobbg={props.data.mobbg.childImageSharp.fluid}
                founder={props.data.founder.childImageSharp.fluid}
             >
             {/* <BlogContent 
              illus1={props.data.pic1.childImageSharp.fluid}
              illus2={props.data.pic2.childImageSharp.fluid}/> */}
            <div className={styles.blogContainer}>
            <div className={styles.blogContainer2}>
                <p>God, I don’t know how many times during a sales trainer’s presentation I have heard ‘Add Value’. 
                </p>
                <p>
                 Which effectively is: Send them an article, case study, etc. (like your prospect doesn’t know how to use google)  According to my experience,
                </p>
                <p>
                After that, anytime anyone mentions ‘add value’ too many times without the specifics, I run away, knowing that this person doesn’t have anything to add of value.
                </p>
                <p>
                According to my experience,'Value' is Δ delta</p>
                
               <div className={styles.BlogimageContainer}><Img className={styles.image} fluid={props.data.pic1.childImageSharp.fluid}/>
               <span className={styles.imageText}> After situation – Before situation = Value </span> 
               </div>
                <p>
                For example:  
                </p>
                <p>
                If a girl walks up to me and says ‘I like you’, value-added to my emotional situation will be:
                </p>
                <p>
                Feeling Superb (after) – Feeling Normal (before) = Superb value add.
                </p>
                <p> <b>Adding value while following up</b></p>
                <p>
                You need to follow up and you need a good reason to email that prospect again, Here’s a tip  
                </p>
                <p>
                Don’t just send an article. Share an exclusive insight! or share an experience of yours, that your prospect can’t find in an article anywhere. Most articles on the internet are non-actionable and pure speculation.
                </p>
                <p>
                Put your credibility on the line, behind the random articles links that you are sending, The credibility that your experience adds is pure value.
                </p>
                <p>
                Sales folks, more here:
                </p>
                <p><b> Value-adding follow up template:</b></p>
                <p style={{opacity:0.8}}>
                "Hi [prospect] Last time we discussed you were working on A. I had few articles in my bookmarks that I think you should read. This article is wrong – Don’t do A instead do B, I have seen companies doing B are very satisfied.<br>
                </br> Because when you ‘A’, we have ‘X’ though process but we forget about ‘Y’ factor….. Blah blah… If you do A, you might lose 6 months to trial and error, Plus it is not sustainable."
                </p>
                <p style={{fontSize:"2rem",lineHeight:"2.3rem",fontWeight:"600",margin:"1.5rem 0.5rem",fontFamily:"Roboto"}}>Perceived Value & Why discovery meetings are important:</p>
                <p>Let’s be honest, there is no guarantee that the last email we sent will get a +ve reply because we don’t know the information we added was something new or relevant to that prospect at that time. This brings us to the concept of perceived value.</p>
                <p>
                Transparency has a lot of value, only if the client has been burned before by a vendor who was not transparent because he has now seen the horror show of non-transparent vendors
                </p>
                <p>
                This is why discovery calls are important, even if you sell a product or a productized service. It tells you what this prospect might find of value.
                </p>
                <p>
                Some clients don’t give a rat’s ass about your transparency pitch and they would just say ” I just want more leads and sales now!”
                </p>
                <p style={{fontSize:"2rem",lineHeight:"2.3rem",fontWeight:"600",margin:"1.5rem 0.5rem",fontFamily:"Roboto"}}>Relative Perceived Value & Content Marketing</p>
                <p>
                Now, let’s bring in your competition and take this one step further.
                </p>
                <p>
                There are 702 pieces of videos/blogs I want to go through in my OneTab chrome extension but I prioritize some authors over others, always. 
                </p>
                <p>
                Here’s Why: <br></br>I know some authors would have done the hardest work of not only ‘curating’ the facts but would have put their sweat and tears to find the secret information, the real benchmarks of real companies by individually contacting these target companies and have compiled the report as a scientific research paper, that people might refer for years to come. Real value shines through! 
                </p>
                <p>
                And it’s worth it because life’s too short, reputation too valuable and winners take all.
                </p>
                <div className={styles.BlogimageContainer}><Img className={styles.image} fluid={props.data.pic2.childImageSharp.fluid}/></div>
                
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

    bg1: file(relativePath: { eq: "Blogbg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mobbg: file(relativePath: { eq: "MobBlogbg3.png" }) {
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

      pic1: file(relativePath: { eq: "BlogIllustration1.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
  
      pic2: file(relativePath: { eq: "BlogIllustration2.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }


}
`;