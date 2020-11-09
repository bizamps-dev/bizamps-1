import React,{useState ,Component}from 'react'

import styles from '../../stylesheets/templet.module.scss'







// import { useForm } from 'react-hubspot'
 
// export default () => {
//   const { data, isLoading, isError, handleSubmit } = useForm({
//     portalId: '1779155',
//     formId: '9392b242-42b4-4e04-bca8-3beb56cd8c8e'
//   })
 
//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="email" type="text" placeholder="email" />
//       <button type="submit"></button>
//     </form>
//   )
// }



// const Form = () => {
//     return(
//         <>
//                 <div className={styles.formTitle}>Leave a Reply</div>
//                 <div className={styles.formSubtitle}> Your email address will not be published. Required fields are marked*</div>
//                 <div className={styles.formContainer2}>
                        
//                         <input className={styles.input}type="text" id="name" placeholder="Email*" required></input>
//                         <input className={styles.input}type="text" id="website" placeholder="Website URL *" required></input>
//                         <input className={styles.input}type="text" id="phone" placeholder="Phone *" required></input>
//                         <input className={styles.message}type="text" id="message" placeholder="Message" required></input>
//                         <button className={styles.SubmitButtom}><a href="/b2b-digital-sales-marketing-agency-that-actually-delivers-good-results-in-delhi-ncr" style={{textDecoration:"none",color:"#ffffff"}} > SUBMIT</a></button>
                    
//                 </div>
            
//         </>
//     )
// }

// export default Form;




const Form = () => {
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (evt) => {

        evt.preventDefault();
        var xhr = new XMLHttpRequest();
        var url = 'https://api.hsforms.com/submissions/v3/integration/submit/1779155/9392b242-42b4-4e04-bca8-3beb56cd8c8e';
        var type = "POST";
        var contentType = "application/json";
        var dataType= "json";
        var getCookie = document.cookie.replace(/(?:(?:^|.;\s)hubspotutk\s*\=\s*([^;]*).$)|^.$/, "$1");
        // var headers= {
        //     "accept": "application/json",
        //     "Access-Control-Allow-Origin":"*"
        //   };
        var data = {
            "fields": [
                {
                    "name": "email",
                    "value": email
                },
                {
                    "name": "url",
                    "value": url
                },
                {
                    "name": "phoneNumber",
                    "value": phoneNumber
                },
                {
                    "name": "message",
                    "value": message
                }
            ],
            "context": {
                "hutk": getCookie, // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
                "pageUri": "https://bizamps-b2b.netlify.app/",
                "pageName": "B2B Account-based Marketing Consultancy | BizAmps"
              },
            "legalConsentOptions":{ // Include this object when GDPR options are enabled
                "consent":{
                  "consentToProcess":true,
                  "text":"I agree to allow Example Company to store and process my personal data.",
                  "communications":[
                    {
                      "value":true,
                      "subscriptionTypeId":999,
                      "text":"I agree to receive marketing communications from Example Company."
                    }
                  ]
                }
              }
        }
        console.log(data)
        var final_data = JSON.stringify(data)

        xhr.open('POST', url);
        // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
        xhr.setRequestHeader('Content-Type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                alert(xhr.responseText); // Returns a 200 response if the submission is successful.
            } else if (xhr.readyState === 4 && xhr.status === 403) {
                alert(xhr.responseText); // Returns a 403 error if the portal isn't allowed to post submissions.     
            } else if (xhr.readyState === 4 && xhr.status === 404) {
                alert(xhr.responseText); //Returns a 404 error if the formGuid isn't found    
            } else if(xhr.responseText ===4 && xhr.status === 400){
                alert(xhr.responseText); //Returns a 400 error if the formGuid isn't found 
            }
        }
        // Sends the request 
        xhr.send(final_data)
    }

    return (
        <form onSubmit={handleSubmit}>

                <div className={styles.formTitle}>Leave a Reply</div>
                <div className={styles.formSubtitle}> Your email address will not be published. Required fields are marked*</div>
                <div className={styles.formContainer2}>
                   
                        <input className={styles.input}type="text" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email*" required></input>
                        <input className={styles.input}type="text" id="website" value={url} onChange={e => setUrl(e.target.value)} placeholder="Website URL *" required></input>
                        <input className={styles.input}type="text" id="phone" value={phoneNumber} onChange={e => setphoneNumber(e.target.value)} placeholder="Phone *" required></input>
                        <input className={styles.message}type="text" id="message" value={message} onChange={e => setMessage(e.target.value)} placeholder="Message" required></input>
                        <button className={styles.SubmitButtom}  type="submit"> SUBMIT</button>
                    
                </div>
            
        </form> 
    )
      
    
}

export default Form;

// export default class Foo extends Component {
//     componentWillMount(){
    
//     const script = document.createElement("script");
    
    
//         script.src = "https://js.hsforms.net/forms/v2.js";
//         script.async = true;
    
//     document.body.appendChild(script);
    
    
//       }
//       componentDidUpdate(){
//         //you will need to change the below to match your portal ID and your form ID
//          hbspt.forms.create({ 
//          portalId: '1779155',
//          formId: '9392b242-42b4-4e04-bca8-3beb56cd8c8e'
//        });
//       }
//       render() {
//         return(
//                     <>
//                             <div className={styles.formTitle}>Leave a Reply</div>
//                             <div className={styles.formSubtitle}> Your email address will not be published. Required fields are marked*</div>
//                             <div className={styles.formContainer2}>
                                    
//                                     <input className={styles.input}type="text" id="name" placeholder="Email*" required></input>
//                                     <input className={styles.input}type="text" id="website" placeholder="Website URL *" required></input>
//                                     <input className={styles.input}type="text" id="phone" placeholder="Phone *" required></input>
//                                     <input className={styles.message}type="text" id="message" placeholder="Message" required></input>
//                                     <button className={styles.SubmitButtom}><a href="/b2b-digital-sales-marketing-agency-that-actually-delivers-good-results-in-delhi-ncr" style={{textDecoration:"none",color:"#ffffff"}} > SUBMIT</a></button>
                                
//                             </div>
                        
//                     </>
//                 )
//         }
// }
