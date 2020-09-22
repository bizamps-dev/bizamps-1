import React from 'react'

import styles from '../../stylesheets/templet.module.scss'

const Form = () => {
    return(
        <>
                <div className={styles.formTitle}>Leave a Reply</div>
                <div className={styles.formSubtitle}> Your email address will not be published. Required fields are marked*</div>
                <div className={styles.formContainer2}>
                   
                        <input className={styles.input}type="text" id="name" placeholder="Email*"></input>
                        <input className={styles.input}type="text" id="website" placeholder="Website URL *"></input>
                        <input className={styles.input}type="text" id="phone" placeholder="Phone *"></input>
                        <input className={styles.message}type="text" id="message" placeholder="Message"></input>
                        <button className={styles.SubmitButtom}> SUBMIT</button>
                    
                </div>
            
        </>
    )
}

export default Form;