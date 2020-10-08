import React from 'react';
import { Link,graphql } from "gatsby"
import styles from "../stylesheets/templet.module.scss"
import BackgroundImage from 'gatsby-background-image'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import Navbar from '../components/navbar/Navbar'
import BlogContent from '../components/BlogTemplet/BlogContent'
import BlogPerson from '../components/BlogTemplet/BlogPerson'
import Form from '../components/BlogTemplet/BlogForm'
import Location from '../components/Location/Location'
import Footer from '../components/Footer/footer'


const Templet = (props) => {
    return(
        <>
            <Layout>
                <BackgroundImage fluid={props.data.bg1.childImageSharp.fluid} className={styles.container1}>
                    <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid}
                            color={"blue"}/>
                </BackgroundImage >

                <BackgroundImage fluid={props.data.bg2.childImageSharp.fluid} className={styles.container2}>
                    <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} />
                </BackgroundImage >

        
            <div className={styles.blogContainer}>
                <BlogContent 
                illus1={props.data.pic1.childImageSharp.fluid}
                illus2={props.data.pic2.childImageSharp.fluid}/>
            </div> 

            <div className={styles.personContainer}>
                <BlogPerson person={props.data.person.childImageSharp.fluid}/>
            </div>

            <div className={styles.formcontainer}>
                <Form/>
            </div>

            <div className={styles.location1}>
              <Location  first="Home" second="Expertise" third="[Blog] Value In Sales? "/>
            </div>

            <Footer />

            </Layout>
        </>
    )
}

export default Templet;

export const BlogPageQuery = graphql`
  query {
    
    bizampsLogo: file(relativePath: { eq: "bizampsLogo.png" }) {
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

    bg2: file(relativePath: { eq: "MobBlogbg3.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    drone: file(relativePath: { eq: "Drone.png" }) {
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

    person: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`;

