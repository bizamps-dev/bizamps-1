import React, { useState } from "react";
import styles from '../../stylesheets/templet.module.scss'
import { Redirect } from "@reach/router";
import { Link } from "gatsby"
//import flower from "../../pages/b2b-digital-sales-marketing-agency-that-actually-delivers-good-results-in-delhi-ncr"

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [website, setWebsite] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");


    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/1779155/0f533596-d32d-4d43-9d0a-e629c90f0610'
        var data = {
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
                {
                    "name": "website",
                    "value": website
                },
                {
                    "name": "phone",
                    "value": phone
                },
                {
                    "name": "message",
                    "value": message
                },
                
            ],
            "context": {
                "pageUri": "www.Bizamps.com",
                "pageName": "BizAmps"
            },
        }
        console.log(data)
        var final_data = JSON.stringify(data)

        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');
        
        const page =()=> {
        
                window.open("/b2b-digital-sales-marketing-agency-that-actually-delivers-good-results-in-delhi-ncr/")
            
        }
       
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
              // Returns a 200 response if the submission is successful.
               page()
            } else if (xhr.readyState === 4 && xhr.status === 403) {
                alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.     
            } else if (xhr.readyState === 4 && xhr.status === 404) {
                alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found    
            }
        }
        // Sends the request 
        xhr.send(final_data)

        
    }
    return (
        <form onSubmit={handleSubmit} className={styles.formcontainer} >

                <div className={styles.formTitle}>Leave a Reply</div>
               <div className={styles.formSubtitle}> Your email address will not be published. Required fields are marked*</div>
               <div className={styles.formContainer2}>
                   
                       <input className={styles.input} 
                        type="text" 
                        id="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} 
                        placeholder="Email*" required></input>

                        <input className={styles.input}
                        type="text" 
                        id="website" 
                        value={website} 
                        onChange={e => setWebsite(e.target.value)} 
                        placeholder="Website URL *" required></input>

                        <input className={styles.input}
                        type="text" 
                        id="phone" 
                        value={phone} 
                        onChange={e => setPhone(e.target.value)} 
                        placeholder="Phone *" required></input>

                        <input className={styles.message}
                        type="text" 
                        id="message" 
                        value={message} 
                        onChange={e => setMessage(e.target.value)} 
                        placeholder="Message" required></input>

                       <button className={styles.SubmitButtom}  type="submit" value="submit" > SUBMIT</button> 
                </div>
            
            

            {/* <h4>
                Subscribe To Newsletter
            </h4>
            <label>
                Email
                <input
                    type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </label>
            <label>
                Website:
                <input
                    type="text"
                    value={website}
                    onChange={e => setWebsite(e.target.value)}
                />
            </label>
            <label>
                Phone:
                <input
                    type="number"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                />
            </label>
            <label>
                message:
                <input
                    type="text"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                />
            </label>
   
            <input type="submit" value="Submit" /> */}
         </form>    
        
    );
}

export default Subscribe
