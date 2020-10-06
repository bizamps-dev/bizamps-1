import React from "react";
import PropTypes from "prop-types";
import { Link,graphql } from "gatsby"
import styles from "../../stylesheets/templet.module.scss"
import BackgroundImage from 'gatsby-background-image'


import Layout from '../layout'
import Navbar from '../navbar/Navbar'
import BlogPerson from '../BlogTemplet/BlogPerson'
import Form from '../BlogTemplet/BlogForm'
// import Location from '../components/Location/Location'
import Img from 'gatsby-image'
import Footer from '../Footer/footer'


const BlogLayout = (props) => {
    return(
        <>
            
                <BackgroundImage fluid={props.bg} className={styles.container1}>
                    <Navbar logo={props.logo} />
                </BackgroundImage >

                <BackgroundImage fluid={props.mobbg} className={styles.container2}>
                    <Navbar logo={props.logo} />
                    <Img fluid={props.blogMobText} className={styles.blogMobText}/>
                </BackgroundImage >

                <main>{ props.children }</main> 

                <div className={styles.personContainer}>
                    <BlogPerson person={props.founder}/>
                </div>

                <div className={styles.formcontainer}>
                    <Form/>
                </div>

                {/* <div className={styles.location1}>
                <Location  first="Home" second="Expertise" third="[Blog] Value In Sales? "/>
                </div> */}

                <Footer />

            
        </>
    )
}

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
  }


export default BlogLayout;

