import React from 'react'
import styles from '../../stylesheets/templet.module.scss'
import Img from 'gatsby-image'

const Checkout = (props) => {

    const contentLeft =[
        {
            image:props.blog1,
            title:"[BLOG] ‘Value’ in Sales?"
        },
        {
            image:props.blog2,
            title:"[BLOG] When To Outsource Lead Generation?"
        },
        {
            image:props.blog3,
            title:"[BLOG] 100 Direct Mails vs 100 Cold Emails?"
        }
    ]

     const contentRight=[
         {
            image:props.blog4,
            title:"[BLOG] After Starting a Sales Agency"
        },
        {
            image:props.blog5,
            title:"[BLOG] Bofu Content"
        },
        {
            image:props.blog1,
            title:"[BLOG] ‘Value’ in Sales?"
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
                        <a>{item.title}</a> 
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
                        <a>{item.title}</a> 
                    </div>
                    
                    )
                 })
            }
        </div>
     </> 
    )
}
export default Checkout;