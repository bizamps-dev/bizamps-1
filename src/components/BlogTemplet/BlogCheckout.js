import React from 'react'
import styles from '../../stylesheets/templet.module.scss'
import Img from 'gatsby-image'


const Checkout = (props) => {

    const contentLeft =[
        {
            image:props.blog1,
            title:"[BLOG] ‘Value’ in Sales?",
            link:"./BlogValueInSales"
        },
        {
            image:props.blog2,
            title:"[BLOG] When To Outsource Lead Generation?",
            link:"./BlogWhenToOutsource"
        },
        {
            image:props.blog3,
            title:"[BLOG] 100 Direct Mails vs 100 Cold Emails?",
            link:"./Blog100Mails"
        }
    ]

     const contentRight=[
         {
            image:props.blog4,
            title:"[BLOG] After Starting a Sales Agency",
            link:"./BlogSalesAgency"
        },
        {
            image:props.blog5,
            title:"[BLOG] Bofu Content",
            link:"./BlogBofu"
        },
        {
            image:props.blog1,
            title:"[BLOG] ‘Value’ in Sales?",
            link:"./BlogValueInSales"
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
export default Checkout;