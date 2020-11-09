import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout/BlogLayout'
import styles from '../stylesheets/templet.module.scss'
import SEO from "../components/seo"



const Home = (props) => {
    return(
    <>
             <SEO title="When to Outsource Lead Generation to grow sales leads?"
                  description="Go In-house or Agency, if the cost of both are same? The rights time to outsorces depends on a bunch of factors in your company and industry"/> 
             <BlogLayout 
                logo={props.data.logo.childImageSharp.fluid}
                bg={props.data.bg1.childImageSharp.fluid}
                blogMobText={props.data.text.childImageSharp.fluid}
                mobbg={props.data.mobbg.childImageSharp.fluid}
                founder={props.data.founder.childImageSharp.fluid}
                current={'[BLOG] When To Outsource Lead Generation?'}
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
                  <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: Should you outsource 100% LeadGen?</h1>
                    <p >A1: It goes without saying, in the long term: Never Outsource 100% LeadGen.</p>
                    <p style={{fontWeight:"bold"}}>Here’s why:</p>
                    <p>What if the agency/channel starts to die down? You are looking at an anxiety-filled time of empty pipelines and initiation of slow decline!
                    Initially, you can outsource 100% of it until you ready to scale though make sure the agency doesn’t spam your brand name.</p>
                    <br></br>
                    <br></br>

                    <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: How long does it take to see consistent results?</h1>
                    <p>A2: Three months , even with your own full time in-house team. It’s just how it is.</p>
                    <p>There are more variables than you can imagine with outbound marketing. Read our insider’s guide to avoid my mistakes.</p>
                    <br></br>
                    <br></br>

                    <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: What’s it’s gonna cost me in-house vs outsourced to an agency?</h1>
                    <p>A3: Inhouse -₹50K – ₹2L , Agency – ₹80K to ₹2L</p>
                    <p>assuming part-time workers for inhouse ) At Bizamps, we even add our heavy lifting and sales automation services in lead generation pricing.(If the client needs that)</p>
                    <br></br>
                    <br></br>

                    <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: How should I set up a working lead generation system right the first time?</h1>
                    <p>A4: Try some activity in-house first, THEN Bring on an agency/consultant.</p>
                    <p>Mostly agencies/consultants are very efficient, they know highly effective strategies but they are rarely investing as much time and focus as your team will. Your aim should be to learn their secrets.</p>
                    <br></br>
                    <br></br>

                    <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: I ain’t got time for that, My value of acquiring a new client is super high!</h1>
                    <p>A5: Cool, Hire an agency  (not a freelancer, you will need a small team to execute this successfully) </p>
                    <br></br>
                    <br></br>

                    <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: What are the problems with these types of leads?</h1>
                    <p>A6: They are rarely in ready-to-buy mode. Though helps you build a really long-lasting pipeline.</p>
                    <p>You will need good salesmanship to pursue the leads (salesman, not order-taker). You also would need to earn persistence and positive attitude points if you are in a competitive industry.</p>
                    <br></br>
                    <br></br>

                    <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: At bare-bones, Who all do I need?</h1>
                    <p>A7: 1 strategist cum Project manager, 1 Tech guy, 1 prospect researcher, 1 writer (Tools & Know-how)</p>
                    <p>*All can be part-time.</p>
                    <br></br>
                    <br></br>
                
                    <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: Why take agency/consultant help at all?</h1>
                    <p>A8: Mostly people you hire either lack tactical knowledge or strategically knowledge to see the full picture.</p>
                    <p>Just have lead won’t get you deals, Having deal flow won’t make you a profit if deal size is small.</p>
                    <br></br>
                    <br></br>

                    <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: How possible is it to succeed in-house?</h1>
                    <p>A9: 30%, if you can find all the right people with scalable B2B Lead Generation some experience.</p>
                    <p>*See Q&A 7</p>
                    <br></br>
                    <br></br>

                  <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: How likely is agency gonna succeed, assuming I hire BizAmps?</h1>
                    <p>A10: 80%</p>
                    <p>20% – If you are in India & targeting the biggest corporations in US & UK selling bulky solutions. For that hire really fancy sales development reps(SDR).</p>
                    <br></br>
                    <br></br>

                  <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: What is this success?</h1>
                    <p>A11: Consistent 10-50 qualified monthly leads. Depending on the geography you are targeting.</p>
                    <p>Here’s a benchmark report by U.S SaaS startups on the cost of client acquisition. Cost of SDRs, what to expect, etc – </p>
                    <br></br>
                    <br></br>

                  <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: What’s a lead?</h1>
                    <p>A12: A prospect who knows what you are selling and is a decision-maker of the size of the company you have chosen to target in particular geo and have AGREED TO MEET/DISCUSS.</p>
                  <br></br>
                  <br></br>

                  <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: How do you generate them?</h1>
                    <p>A13: via LinkedIn & email outreach & retargeting ads</p>
                  <br></br>
                  <br></br>

                  <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: What if it doesn’t work?</h1>  
                    <p>A14: Usually to our clients we give a 3-month free work written guarantee if they are not satisfied even when they might be generating leads.</p>
                  <br></br>
                  <br></br>

                    <h1 style={{color:"black",marginLeft:"0rem",marginBottom:"0.5rem"  }}>Q: Akshat, you rock!</h1>
                      <p>A: Thanks, you too!</p>
                  





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

    mobbg: file(relativePath: { eq: "BlogOutsourceMobbg.jpg" }) {
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

      text: file(relativePath: { eq: "BlogOutsourceText.png" }) {
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