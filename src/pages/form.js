import React from 'react';
import styles from "../stylesheets/templet.module.scss"
import Form from '../components/BlogTemplet/BlogForm'

const form = () => {
    return(
        <div style={{width:"100%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <Form />
        </div>
    )
}

export default form;
