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

                      <p>Outsourcing is scary. Be it lead generation or even web design.</p>
                      <p>Your expectations, hope, money and most importantly TIME is on the line. It’s too much.</p>
                      <p>So? What to do?</p>
                      <p>Simple, Ask for some freaking Guarantees!</p>
                      <p>Read this complete post to know about Outsourcing Leadgen in detail.</p>

                      <p className={styles.QuestionBlog2}>The problem with giving Guarantee as a vendor.
                      [Akshat’s Rant]</p>
                      <p>We provide B2B lead generation service.</p>
                      <p>I am using my own lead generation service as the primary and only strategy for a very long time but even my team can’t guarantee if we will generate ANY sales leads the next month, while we have historic data to back it up. majorly because it depends if the prospect resonates with our offering. Period. Then there are shocks that these fast-moving media channels give us. For example: Google cutting primary inbox delivery rates by 75% for each of our clients prospecting emails. LinkedIn attacking accounts that automate drip campaigns, etc but nevertheless, we need to make commitments and not excuses.</p>

                      <p className={styles.QuestionBlog2}>How to formulate a guarantee with a vendor, who can’t offer one?</p>
                      <p>Break down their success formula theory and then ask for guarantees against the variables.</p>
                      <p>For example, Our variables for lead generation via LinkedIn & email outreach looks like:</p>
                      <p>#Leads= (Number emails(or)messages sent * Open rate * Reply Rate)
                      Historic Data = (500 * 30% * 7%) = 11 leads</p>
                      <p>They can’t guarantee reply rate & open rate but they can guarantee the speed at which they can test subject lines to improve open rates.</p>
                      <p>They can guarantee the speed at which they can test the email body for a higher reply rate. Also, They can guarantee ‘Number of emails or LinkedIn messages’ sent/day.</p>
                      <p><b>So they guarantee me:</b></p>
                      <p>-500 new emails/month<br></br>
                         -If the open rate is less than 30% then 3 new subject line test within 3 days<br></br>
                         -If the reply rate is less than 7% then a new email body copy/offer within 7 days</p>
                      <p><b>You will be surprised how effectively this, because creating new body copy and testing is taxing and they want to avoid it.</b></p>

                      <p className={styles.QuestionBlog2}>Your vendor: Are you giving up on this project?
                      You: Hell Yeah!</p>
                      <p>Deadline: After a point, Some projects should be declared dead.<br></br>
                         Less than 20 leads in 90 days.<br></br>
                         The project goes into the comma!<br></br>
                         If you are at this stage with a vendor, ask for a deliverable service instead of performance-based service alone as compensation.</p>
                      <p>We@BizAmps usually offer CRM Sales Automation Workflow setup as deliverable service when project goes into comma.</p>

                      <p className={styles.QuestionBlog2}>Skin in the game.</p>
                      <p>Voices in my head when I lose a client:<br></br>
                         Go kill yourself Akshat! You lost a good client today. Now, how you replace him?<br></br>
                         Plus, you didn’t even get a case study…Double kill yourself, Akshat!<br></br>
                         But agencies like mine lose a client because they get complaisant or they over-promise to win the deal.<br></br>
                         While you the client, probably loses time and money, all of which could have been put to better use.</p>
                      <p><b>A gutsy idea to make them proactive:</b></p> 
                      <p>Profit-sharing or Performance Bonus.<br></br>
                         The incentives don’t need to be huge.<br></br>
                         Do this and see how service providers automatically get aligned to your business goals and keep on reminding them.<br></br>
                         You basically get an invested partner for cheap.<br></br>
                         You immediately got on their VIP client list.<br></br>
                         >PS: I learned this watching my behavior when a client suggested this. I was doing things that were so out of scope for money that I don’t know when would I see.</p>  

                         <p className={styles.QuestionBlog2}>What to expect when Outsourcing Leadgen? Is it worth its cost?</p>
                         <p><b>Expect this:</b></p>
                         <p>• 15 to 45 days of the ramp-up period, you should start to see a few leads at the     start of month two.<br></br>
                            • While in some cases you might get 50 leads in the first 60 days.<br></br>
                            •Though mostly, Promising results coming in month three.</p>
                        <p><b>Don’t Expect:</b></p>
                        <p>• Them to understand your market and target audience, audiences react differently      to different products. Plus they don’t need to.<br></br>
                           • Teach them about your business and market, help them paint a  picture of your marke</p>

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

    bg1: file(relativePath: { eq: "WhatToExpect.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mobbg: file(relativePath: { eq: "OutsourcingLeadgen.png" }) {
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