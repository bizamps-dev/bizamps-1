import React,{useState} from 'react'
import Img from 'gatsby-image'
import { Link } from "gatsby"

import Dropdowns from "./Dropdowns"

import Hamburger from "../../assets/Navbar/Hamburger"
import ClickedHamburger from "../../assets/Navbar/ClickedHamburger"

import styles from "../../stylesheets/nav.module.scss"


const Navbar=(props)=>{
  const [click,setClick]=useState(false)
  const [dropdown,setDropdown]=useState(false)

  const handleClick=()=>setClick(!click)

  const options = [
    {
      name : 'Expertise',
      subOptions : [
        {
          name : '[Guide] Best of ABM',
          link : "/i-went-through-every-account-based-marketing-webinar-talk-ebook-and-heres-the-best-of-them"
        },
        {
          name : '[Guide] LeadGen Cold outreach',
          link : "/cold"
        },
        {
          name : '[Blog] Value In Sales?',
          link : "/wth-does-value-even-mean-in-sales-how-to-really-deliver-it"
        },
        {
          name : '[Blog] When to Outsource LeadGen?',
          link : "/when-to-outsource-leadgen-in-house-or-agency-if-the-cost-is-same"
        },
        {
          name : '[Blog] Expectations for Outsourcing LeadGen?',
          link : "/what-to-expect-when-outsourcing-leadgen-is-it-worth-it-cost"
        },
        {
          name : '[Blog] 100 Direct Mails vs 100 Cold Emails',
          link : "/100-letter-100-emails"
        },
        {
          name : '[Blog] After Starting a Sales Agency',
          link : "/what-to-do-after-starting-a-sales-agency"
        },
        {
          name : '[Blog] Bofu Content',
          link : "/b2b-sales-funnel-strategy"
        },
      ]
    },
    {
      name : 'Pricing',
      subOptions : [
        {
          name : 'B2B Marketing Packages',
          link : "/b2b-marketing-package"
        },
        {
          name : 'Marketing Strategy Consultancy',
          link : "/custom-digital-sales-marketing-plan"
        },
      ]
    },
    {
      name : 'Case Stories',
      subOptions : [
        {
          name : 'Indian Enterprises',
          link : "/targeting-senior-hrs-of-top-indian-companies-b2b-enterprise-case-study"
        },
        {
          name : 'International Institutes',
          link : "/b2b-case-study-schools"
        },
        {
          name : 'Targeting U.S.',
          link : "/blockchain-web-development-case-study"
        },
        {
          name : 'Crowd Funding',
          link : "/crowd-funding-case-study"
        },
      ]
    }
  ]

  const renderOptions = options.map((item,index)=>{
    return (
         <Dropdowns 
         color={props.color}
         option={item} />
    )
  })

  return (
    <>
    <div className={styles.navContainer}>

      <div className={styles.navbar}>
        <Link to="/"><Img fluid={props.logo} className={styles.logo} alt={"B2B Marketing agency"}/> </Link>

         <div className={styles.menu} onClick={handleClick}>
          <div className={styles.hamburger}>
            {
              click ? <ClickedHamburger />  : <Hamburger />
            }
          </div>
        </div> 

        </div>

        <div className={styles.optionContainer} >
          {renderOptions}
        </div>

        {
          click ?  <div className={styles.optionContainerMobi} >
          {renderOptions}
        </div> : null
        }

       
    </div>
    </>
  )
}

// const Navbar = (props) => {
//     const toggleNav=()=>{
//       const nav=document.getElementById("nav")
//       if (nav.className === styles.nav) {
//         nav.className=styles.toggleNav
//       } else {
//         nav.className = styles.nav;
//       }
//     }
//     return (
//         <div className={styles.navContainer}>
//           <div><Img fluid={props.logo} className={styles.logo}  /> </div>
//           <div className={styles.navToggle} onClick={toggleNav}  ><span></span><span></span><span></span></div> 
//           <ul className={styles.nav} id="nav">
//             <li className={styles.navlist}>
//               <div style={{display:"flex",flexDirection:"row"}}>
//               <text className={styles.text}>Expertise</text>
//               <div className={styles.arrow} ><NavBottomArrow /></div>
//               </div>
//             <div className={styles.dropdown}>
//                 <Link>[Guide] Best of ABM</Link>
//                 <Link>[Guide] LeadGen Cold outreach</Link>
//                 <Link>[Blog] Value In Sales?</Link>
//                 <Link>[Blog] When to Outsource LeadGen?</Link>
//                 <Link>[Blog] Expectations for Outsourcing LeadGen?</Link>
//             </div>   
//             </li>
//             <li className={styles.navlist}>
//               <div style={{display:"flex",flexDirection:"row"}}>
//             <text className={styles.text}>Pricing</text>
//               <div className={styles.arrow}><NavBottomArrow /></div>
//               </div>
//             <div className={styles.dropdown}>
//                 <Link>B2B Marketing Packages</Link>
//                 <Link>Marketing Strategy Consultancy</Link>
//             </div> 
//             </li>
//             <li className={styles.navlist}>
//               <div style={{display:"flex",flexDirection:"row"}}>
//             <text className={styles.text}>Case Stories</text>
//               <div className={styles.arrow}><NavBottomArrow /></div>
//               </div>
//             <div className={styles.dropdown}>
//                 <Link>Indian Enterprises</Link>
//                 <Link>International Institutes</Link>
//                 <Link>Targeting U.S.</Link>
//                 <Link>Crowd Funding</Link>
//             </div> 
//             </li>
//           </ul>
          
//         </div>
//     )
// }

export default Navbar
