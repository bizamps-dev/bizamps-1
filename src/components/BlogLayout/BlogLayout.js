import React,{useState,useEffect} from 'react'
import PropTypes from "prop-types";
import { Link,graphql } from "gatsby"
import styles from "../../stylesheets/templet.module.scss"
import BackgroundImage from 'gatsby-background-image'


import Layout from '../layout'
import Navbar from '../navbar/Navbar'
import BlogPerson from '../BlogTemplet/BlogPerson'
import Form from '../BlogTemplet/BlogForm'
import Checkout,{CheckoutCS}from '../BlogTemplet/BlogCheckout'
import Location from '../../components/Location/Location'
import Img from 'gatsby-image'
import Footer from '../Footer/footer'


const BlogLayout = (props) => {

    const [showCheckout,setshowCheckout]=useState(props.checkoutBlog)
        
    return(
        
        <>
                <BackgroundImage alt={props.altForBG} fluid={props.bg} className={styles.container1}>
                    <Navbar logo={props.logo} 
                    color={props.color}/>
                    {/* <Img fluid={props.DesktopText} className={styles.desktopText}/> */}
                </BackgroundImage >

                <BackgroundImage fluid={props.mobbg} className={styles.container2}>
                    <Navbar logo={props.logo} />
                    <Img fluid={props.blogMobText} className={styles.blogMobText}/>
                </BackgroundImage >

                <main>{ props.children }</main> 

                { showCheckout===true ? <div className={styles.checkoutContainer}>
                    <div className={styles.checkoutTitle}>Checkout Our Other Blogs</div>
                    <Checkout
                    blog1={props.blog1}
                    blog2={props.blog2}
                    blog3={props.blog3}
                    blog4={props.blog4}
                    blog5={props.blog5}
                    />
                </div> : 
                 <div className={styles.checkoutContainer}>
                 <div className={styles.checkoutTitle}>Checkout Our Other Case Stories</div>
                 <CheckoutCS
                 blog1={props.blog1}
                 blog2={props.blog2}
                 blog3={props.blog3}
                 />
                </div>
            }

                <div className={styles.personContainer}>
                    <BlogPerson person={props.founder}/>
                </div>

                <div className={styles.formcontainer}>
                    <Form/>
                </div>

                <div className={styles.location1}>
                <Location  first="Home" second="Expertise" third={props.current}/>
                </div>

                <Footer />

            
        </>
    )
}

BlogLayout.propTypes = {
    children: PropTypes.node.isRequired,
  }


export default BlogLayout;

