import React from 'react'
import styles from '../../stylesheets/templet.module.scss'
import Img from 'gatsby-image'


const Checkout = (props) => {

    const contentLeft =[
        {
            image:props.blog1,
            title:"[BLOG] ‘Value’ in Sales?",
            link:"/wth-does-value-even-mean-in-sales-how-to-really-deliver-it"
        },
        {
            image:props.blog2,
            title:"[BLOG] When To Outsource Lead Generation?",
            link:"/when-to-outsource-leadgen-in-house-or-agency-if-the-cost-is-same"
        },
        {
            image:props.blog3,
            title:"[BLOG] 100 Direct Mails vs 100 Cold Emails?",
            link:"/100-letter-100-emails"
        }
    ]

     const contentRight=[
         {
            image:props.blog4,
            title:"[BLOG] After Starting a Sales Agency",
            link:"/what-to-do-after-starting-a-sales-agency"
        },
        {
            image:props.blog5,
            title:"[BLOG] Bofu Content",
            link:"/b2b-sales-funnel-strategy"
        },
        {
            image:props.blog6,
            title:"[BLOG] Expectations for Outsourcing Leadgen?",
            link:"/what-to-expect-when-outsourcing-leadgen-is-it-worth-it-cost"
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
            link:"/b2b-case-study-schools"
        },
        {
            image:props.blog2,
            title:"Targeting Investors for Crowd Funding Campaigns in UK",
            link:"/crowd-funding-case-study"
        },
        {
            image:props.blog3,
            title:"How a U.S. based blockchain tech company enhanced sales through BizAmps. ",
            link:"/blockchain-web-development-case-study"
        }
    ]
    const contentRightCS =[
        {
            image:props.blog4,
            title:"Targeting Senior HRs of Top Indian companies",
            link:"/targeting-senior-hrs-of-top-indian-companies-b2b-enterprise-case-study"
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
