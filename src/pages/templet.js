import React from 'react';
import { Link,graphql } from "gatsby"
import styles from "../stylesheets/templet.module.scss"
import BackgroundImage from 'gatsby-background-image'

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
            <BackgroundImage fluid={props.data.bg3.childImageSharp.fluid} className={styles.container} >
            <div className={styles.navbar}>
                <Navbar logo={props.data.bizampsLogo.childImageSharp.fluid} />
            </div>
            </BackgroundImage >
            <div className={styles.blogContainer}>
                <BlogContent />
            </div>
            <div className={styles.personContainer}>
                <BlogPerson />
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

    bg3: file(relativePath: { eq: "Blogbg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }

  }
`;