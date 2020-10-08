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
                blogMobText={props.data.text.childImageSharp.fluid}
                founder={props.data.founder.childImageSharp.fluid}
                current={'[BLOG] Bofu Content'}
                blog1={props.data.blog1.childImageSharp.fluid}
                blog2={props.data.blog2.childImageSharp.fluid}
                blog3={props.data.blog3.childImageSharp.fluid}
                blog4={props.data.blog4.childImageSharp.fluid}
                blog5={props.data.blog5.childImageSharp.fluid}
                checkoutBlog={true}
             >
              <div className={styles.blogContainer}>             
               <div className={styles.blogContainer2}>

                <p>What if your content could attract only the relevant sales-ready buyers and leads? Sounds like an awesome dream right? But, genuine buyers who do not waste your time are hard to find.</p>
                <p>But if you plan to do that for your B2B agency, the cost per click for such ads can be as high as $35! That is equivalent to buying 35 lottery tickets! And let’s face it; they both have the same odds.</p>
                <p>So is there a way to do it for cheap?</p>
                <p>The answer to this is BOFU content- Bottom of the Funnel content. This refers to the content that only resonates with your target audience. This way the content created is less but a perfect fit for the target. It is basically created for people who want many people to read their content but attract only the qualified leads. </p>

                <p><b>41% of B2B marketers say they always or frequently craft content based on specific points
                of the buyer’s journey (source).</b></p>
                <p>That means more than half of the B2B sales agencies do not curate BOFU content.</p>

                <p>Before understanding BOFU content, let me ask you a question.
                 How many times have you filled a form after reading a blog? -Hardly once or twice after reading<br></br>
                a really great piece of content, right? </p>
                <p>That brings me to my next question.<br></br>
                What do you search for when you go out to buy something?</p>
                <p>Before making a fairly huge investment, we are overly cautious.</p>

                <p><b>92% of buyers say that content plays an important role in their buying decision.</b></p>
                <p>But there is also a bad news. 1 in 2 buyers report that they usually receive content irrelevant to their pain point. So at which stage does content development comes into play?</p>
                <p>Let’s say you are planning to buy a new phone.
                These are the steps any normal person would follow</p>

                <p><b>1. Research</b></p>
                <p>Before buying a new phone you would first research the features it has. The processor, the
                camera quality, the battery life, and so on.</p>

                <p><b>2. Reviews</b></p>
                <p>After learning about the features you will go on and look at the reviews as the word of mouth affects the buying decision the most.</p>

                <p><b>3. Pricing</b></p>
                <p>Next, you’ll research about the pricing, the offers, and discounts available.</p>

                <p><b>4. Alternatives</b></p>
                <p>Lastly, you’ll look for alternatives. You will compare the features, reviews, and prices of phone A and phone B and then make the buying decision.</p>

                <p>So these steps are common for a majority of buyers. Thus curating content based on these points is really effective.</p>

                <p><b>67% of B2B marketers always or frequently focus on creating content for their audience vs. their brand (source).</b></p>

                <p>Ask yourself, “What will the buyer search before buying my product or service?”</p>
                <p>For context, let me give you some tips and tricks to improve your content in B2B sales</p>

                <p><b>The best XYZ in….</b></p>
                <p>For example – The best marketing agency for B2B sales</p>

                <p><b>Price comparison.</b></p>
                <p>Everyone compares prices. Some industries may be more price-sensitive than others.</p>

                <p><b>Steal search.</b></p>
                <p>You can actually steal search by just mentioning their name.
                  For instance-‘ An alternative to hubspot attracts not only the people who are searching for
                  alternatives to hubspot but also the ones who are researching about it.</p>

                <p><b>Easy ranking</b></p>
                <p>For those who have no idea but SEO, don’t worry!
                  XYZ + city is one way of easily ranking in the top 3 top searches. If I market myself as a B2B sales agency –Delhi, even though it appears in limited searches, I might surely connect with someone who is looking for this service in Delhi.</p>

                <p><b>Competitor keyword search</b></p>
                <p>This is yet another easy way of getting attention from buyers. When you use the market leader’s name as a keyword you not just steal search but also get a chance to show the buyers a comparative study between the two.</p>
                <p>For eg –“Is XYZ the new substitute for the iPhone?”</p>
                <p>Apart from this it is important to create an audience base or a target market.</p>

                <p><b>92% of organizations most successful at B2B content marketing say their organization is focused on building audiences.</b></p>

                <p style={{fontFamily:'Roboto'}}>The following are steps that you can follow to attract qualified people at the end of their buying stage.</p>

                <div className={styles.BlogimageContainer}><Img className={styles.image} fluid={props.data.image.childImageSharp.fluid}/>
                </div>


               </div>
              </div>

              <div className={styles.videoContainer}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/4_US28BNm8A" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

    bg1: file(relativePath: { eq: "BlogBofubg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    mobbg: file(relativePath: { eq: "MobBlogBofuBg.jpg" }) {
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

      image: file(relativePath: { eq: "BlogBofulimage.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      text: file(relativePath: { eq: "BlogBofuText.png" }) {
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


}
`;