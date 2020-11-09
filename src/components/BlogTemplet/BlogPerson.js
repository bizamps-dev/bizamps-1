import React from 'react'

import styles from '../../stylesheets/templet.module.scss'
import Img from 'gatsby-image'

const Person = (props) => {
    return(
        <>
            <div className={styles.box}>
                <div className={styles.imageContainer}>
                <Img className={styles.personAlign}fluid={props.person} />
                </div>
                <div className={styles.boxalign}>
                <div className={styles.personTitle}>Akshat Kharbanda</div>
                <div className={styles.personSubtitle}>Struggled with B2B leadgen for 3.5 years. Took 1.5 years to perfect a system that throws out hot leads at the end.</div> 
                </div>
            </div>
        </>
    )
}

export default Person;
