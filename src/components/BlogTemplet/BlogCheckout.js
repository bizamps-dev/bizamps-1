import React from 'react'
import styles from '../../stylesheets/templet.module.scss'
import Img from 'gatsby-image'


const Checkout = (props) => {

    const contentLeft =[
        {
            image:props.blog1,
            title:"[BLOG] ‘Value’ in Sales?",
            link:"/BlogValueInSales"
        },
        {
            image:props.blog2,
            title:"[BLOG] When To Outsource Lead Generation?",
            link:"/BlogWhenToOutsource"
        },
        {
            image:props.blog3,
            title:"[BLOG] 100 Direct Mails vs 100 Cold Emails?",
            link:"/Blog100Mails"
        }
    ]

     const contentRight=[
         {
            image:props.blog4,
            title:"[BLOG] After Starting a Sales Agency",
            link:"/BlogSalesAgency"
        },
        {
            image:props.blog5,
            title:"[BLOG] Bofu Content",
            link:"/BlogBofu"
        },
        {
            image:props.blog6,
            title:"[BLOG] Expectations for Outsourcing Leadgen?",
            link:"/BlogExpectionsOfOutsourcing"
        },

    ]

   

    return(
       <>
             <div className={styles.checkoutContent}>
            {
             contentLeft.map((item,index)=>{
                return (
                   
                    <div key={index} className={styles.checkoutGroup}>
                        <Img className={styles.checkoutImage} fluid= {item.image}/>
                        <div className={styles.checkoutText}><a href={item.link}>{item.title}</a> </div>
                    </div>
                    
                    )
                 })
            }
        </div>
        <div className={styles.checkoutContent}>
            {
             contentRight.map((item,index)=>{
                return (
                   
                    <div key={index} className={styles.checkoutGroup}>
                        <Img className={styles.checkoutImage} fluid= {item.image}/>
                        <div className={styles.checkoutText}><a href={item.link}>{item.title}</a> </div>
                    </div>
                    
                    )
                 })
            }
        </div>
     </> 
    )
}


export const CheckoutCS = (props) => {

    const contentLeftCS =[
        {
            image:props.blog1,
            title:"B2B Case Study Targeting International Schools",
            link:"/InternationalInstitutes"
        },
        {
            image:props.blog2,
            title:"Targeting Investors for Crowd Funding Campaigns in UK",
            link:"/CrowdFunding"
        },
        {
            image:props.blog3,
            title:"How a U.S. based blockchain tech company enhanced sales through BizAmps. ",
            link:"/TargetingUS"
        }
    ]
    const contentRightCS =[
        {
            image:props.blog4,
            title:"Targeting Senior HRs of Top Indian companies",
            link:"/IndianEnterprise"
        },
        {
            image:{},
            title:"",
            link:""
        },
        {
            image:{},
            title:"",
            link:""
        },
        
    ]

   

    return(
       <>
             <div className={styles.checkoutContent}>
            {
             contentLeftCS.map((item,index)=>{
                return (
                   
                    <div key={index} className={styles.checkoutGroup}>
                        <Img className={styles.checkoutImage} fluid= {item.image}/>
                        <div className={styles.checkoutText}><a href={item.link}>{item.title}</a> </div>
                    </div>
                    
                    )
                 })
            }
        </div>
        <div className={styles.checkoutContent}>
            {
             contentRightCS.map((item,index)=>{
                return (
                   
                    <div key={index} className={styles.checkoutGroup}>
                        <Img className={styles.checkoutImage} fluid= {item.image}/>
                        <div className={styles.checkoutText}><a href={item.link}>{item.title}</a> </div>
                    </div>
                    
                    )
                 })
            }
        </div>
     </> 
    )
}

export default Checkout;
