import React from 'react';
import { graphql } from 'gatsby';
import BlogLayout from '../components/BlogLayout/BlogLayout'
import styles from '../stylesheets/templet.module.scss'
import SEO from "../components/seo"



const Home = (props) => {
    return(
    <>
             <SEO title="What To Know After Starting a Sales Agency | Complete Guide"
                  description="These principles will ultimately help you make better choices while channeling to scaling your sales agency"/>
             
             <BlogLayout 
                logo={props.data.logo.childImageSharp.fluid}
                hamburger={props.data.hamburger.childImageSharp.fluid}
                bg={props.data.bg1.childImageSharp.fluid}
                mobbg={props.data.mobbg.childImageSharp.fluid}
                blogMobText={props.data.text.childImageSharp.fluid}
                founder={props.data.founder.childImageSharp.fluid}
                current={'[BLOG] After Starting a Sales Agency'}
                blog1={props.data.blog1.childImageSharp.fluid}
                blog2={props.data.blog2.childImageSharp.fluid}
                blog3={props.data.blog3.childImageSharp.fluid}
                blog4={props.data.blog4.childImageSharp.fluid}
                blog5={props.data.blog5.childImageSharp.fluid}
                blog6={props.data.blog6.childImageSharp.fluid}
                color={"#2F80ED"}
                checkoutBlog={true}
             >
              <div className={styles.blogContainer}>             
                <div className={styles.blogContainer2}>

                  <h1 style={{color:"black",marginLeft:"0rem",fontFamily:"Libre Baskerville",fontSize:"3rem",lineHeight:"3.2rem" }}>"Don’t judge each day by the harvest you reap but by the seeds you plant."</h1>
                  <p style={{fontFamily:"Roboto",fontSize:"2rem" }}>- Robert Louis Stevenson</p>
                  <p>I, the founder of BizAmps -A B2B marketing agency have been in this field for quite some time now. I am here to share with you some of my learnings that will help you make better choices while scaling your sales agency. </p>
                  <p>The following are the principles I learned in my 3-year journey in the B2B space.</p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto"}}><b>DISCLAIMER:</b></p>
                  <p>· This blog does not tell you ‘how to do it’ but tells you ‘what to do’ <br></br>
                     · This blog contains enough information you need to start your own sales agency.</p>
                     <br></br>
                  <p>So, let's begin!  </p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto",fontSize:"2rem",fontWeight:"600" }}><b></b>1. Channel and Cadence. </p>
                  <br></br>

                  <p style={{fontFamily:"Roboto"}}><b>Channel</b></p>
                  <p>In my 3 years’ experience, I’ve noticed that some channels work better than others.</p>
                  <p>Example: </p>
                  <p>· LinkedIn works best when one wants to approach angel investors. </p>
                  <p>· Calling works when the target is not tech-savvy.</p>
                  <p>· Direct mail works when you want to stand out.  </p>
                  <p>When you start using all these channels, there’ll come a point where you’ll know the channel that is working the best for you. When you do, don’t stop using other channels, but scale the one that works the best. </p>
                  <p style={{fontFamily:"Roboto"}}><b>Cadence</b></p> 
                  <p>Don’t just send one message. Even though sometimes it works, you should send multiple messages with various time intervals.</p>
                  <p>One way is to send 1 message in 7 days. </p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto",fontSize:"2rem" }}><b>2. Offering</b></p>
                  <p>The offerings matter.</p>  
                  <p>Firstly, if the product has a need in the current situation then the leads will hit the sky. </p>
                  <p>Example: In the Covid-19 pandemic, the sale of sanitizers spiked.</p> 
                  <p>Secondly, different people find value in different offerings. So filter your audience accordingly </p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto",fontSize:"2rem" }}><b>3. Messaging</b></p>
                  <p>Messaging is very important. It can either make or break your campaign.</p> 
                  <p>While hiring people, try looking for someone who has done such work before. There is a high possibility that you won’t find such a person. No one really knows what could work for sure. </p> 
                  <p>So be prepared to conduct A/B testing yourself. A/B testing your subject line can increase open rates by 49%. </p>
                  <p>Also, pay attention to the details and test everything. </p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto",fontSize:"2rem" }}><b>4. Scaling and Debugging </b></p>
                  <p>When you figure something out, scale it.</p> 
                  <p>When you try to multiply, you are bound to face certain barriers like your account getting limited or getting banned. Don’t worry here, it’s a small thing. Create another account and continue your work at the same speed. </p>
                  <p>Sometimes your mails might end up in the spam folder. Look for tools and figure out a way through which the emails can last longer.</p> 
                  <p>Later in the blog, I’ll explain the techniques to scale. </p>
                  <p>Let’s dive into these points even deeper </p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto"}}><b>1. Email </b></p>
                  <p>One thing to keep in mind while conducting email outreach is that your email must be of 5 lines, preferably under 100 words. If the person has to scroll down, it won’t be read.  </p>
                  <p>Keep it simple. Use plain text. </p>
                  <p>Keep yourself updated with the latest tricks. </p>
                  <p>One word subject lines like ‘ leads’, ‘BizAmps’, and so on, using “Hey XYZ” instead of “Hi XYZ” are some of the latest tricks that increase response rate by 10-12% provided your initial response rate is over 0%.</p> 
                  <p>One important thing to note here is to not be misleading in any way. Misleading reduces the credibility of your future emails. </p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto",fontSize:"2rem",fontWeight:"600" }}>FUN FACTS ABOUT COLD EMAILS: </p>
                  <p>· 35% of recipients open emails based on the subject line alone.</p> 
                  <p>· Email personalization can increase your reply rate by 100%.</p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto"}}><b>2. LinkedIn</b></p>
                  <p>Keep your text under 2 lines and 2 paragraphs.</p>
                  <p>Linked in has various features that you need to understand and use correctly, for instance, the ‘Inmail’ has a greater space than the free messages window and thus, both should be used accordingly.</p>
                  <p>Here, a proper understanding of LinkedIn’s UX comes handy.</p>
                  <p>LinkedIn has your CV, your picture, and more relevant information about you than any other platform. You can capitalize on that, making your account more relevant.</p>
                  <p>Lastly, know your limits. Don’t sound too sales-y. Refrain from spamming people with irrelevant information.</p>
                  <p>The biggest mistake a marketer can make is underestimate the potential of LinkedIn.</p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto",fontSize:"2rem",fontWeight:"600" }}>FUN FACT ABOUT LINKED:</p>
                  <p> · 57% of LinkedIn users are men, and 43% are women.</p> 
                  <p>· 61% of LinkedIn’s users are between 25 and 34 years old</p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto"}}><b>3. Calling</b></p>
                  <p>Don’t be afraid of calling. Being afraid will make you sound less confident and that will be a major turn off.</p>
                  <p>Record the calls. Listen to it later and write down a few hooks that you think the client resonates with and stress on those things when following up.</p>
                  <p>You can also write down new hooks and use it as a script.</p>
                  <p>However, calling has its own limitations.</p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto",fontSize:"2rem",fontWeight:"600"}}>FUN FACTS ABOUT COLD CALLING:</p>
                  <p>· The best time to make a cold call is in the afternoon between 4:00-5:00pm. The second best time is 8:00-10:00am.</p>
                  <p>· The first 10 seconds determine the response to your cold call. Make those 10 seconds count.</p> 
                  <br></br>
                  <p>These 3 channels when used together for 3-6 months can result in getting responses from prospects. Be persistent.</p>
                  <p>Another thing that I learned in this 3-year experience is that a change in the message that earlier gave negative responses gives positive responses.</p>
                  <p>A while ago I decided to change the headline of the content we were working on. This minor change resulted in the huge success of the campaign.</p>
                  <p>Once you have all this in place, the question is-</p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto",fontSize:"2rem" }}><b>How to scale your sales agency?</b></p>
                  <p>There are 2 ways to scale your sales agency.</p>
                  <p style={{fontFamily:"Roboto"}}><b>·Automate</b></p>
                  <p>Automation can make the process easier and faster. There are various tools available online that help you automate.</p>
                  <p style={{fontFamily:"Roboto"}}><b>·Duplicate</b></p>
                  <p>Get more people. Increase the size of your target audience, mainly because automation can prove very costly if you don’t utilize the paid tools optimally</p>
                  <br></br>
                  <br></br>

                  <p style={{fontFamily:"Roboto",fontSize:"2rem" }}><b>Roadblocks</b></p>
                  <p style={{fontFamily:"Roboto"}}><b>I. Learning curve:</b></p>
                  <p>When we started off, we only focused on cold emailing. Later we added LinkedIn on top of it. We started calling after 2 years.</p>
                  <p>Basically what I want to say is that you learn as you do.</p>
                  <p>Look out for what works best for you and scale on that.</p>
                  <p>The advantage here is that the faster you learn, the more the people you leave behind in the race and catch up with the ones ahead of you.</p>
                  <p style={{fontFamily:"Roboto"}}><b>II.Science</b></p>
                  <p>It’s a science, not an art.</p>
                  <p>If you A/B test enough, if you debug and resolve your problems quickly so that they don’t repeat then you’re there!</p>
                  <p>And also, when you find something working for you, MULTIPLY.</p>
                  <p>Lastly, do what you like doing. If you find yourself procrastinating then probably you’re not that into the work. If that’s the case, get someone else to do it for you.</p>
                  <p>For Example-</p>
                  <p>Hate calling? You can easily find people who love calling and might be willing to do it for you at a low cost.</p>
                  <p>Want to know more? Watch my 43 min video on</p>
                  <p>‘Automate B2B lead generation workshop’</p>
                </div>
              </div>

              <div className={styles.videoContainer}>
              <iframe title="What To Know After Starting a Sales Agency | Complete Guide" width="560" height="315" src="https://www.youtube.com/embed/P1dLJCqluOg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

    bg1: file(relativePath: { eq: "BlogsalesAgency.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mobbg: file(relativePath: { eq: "mobBlogSalesAgency.png" }) {
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

      text: file(relativePath: { eq: "BlogSalesText.png" }) {
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