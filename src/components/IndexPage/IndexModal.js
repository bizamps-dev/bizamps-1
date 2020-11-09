import React,{useEffect,useState} from 'react'
import styles from '../../stylesheets/index.module.scss'
import ModalArrow from '../../assets/indexPage/Modalarrow'
import LeftCarouselArrow from '../../assets/indexPage/LeftCarouselArrow'
import RightCarouselArrow from '../../assets/indexPage/RightCarouselArrow'

const IndexModal = (props) => {

  const [content,setContent]=useState(props.content)
  const [currentIndex,setCurrentIndex]=useState(0)
  const [counter,setCounter]=useState(0)

  useEffect(()=>{
      setInterval(()=>{  
        setCounter(prev=>prev+1)    
      },1000)
  },[])

  useEffect(()=>{
    if(counter%3===0&&counter!==0){
      setCurrentIndex(prev=>prev===content.length-1?0:prev+1)
    }
  },[counter])

  const previous=()=>{
    if(currentIndex===0)
    {
      setCurrentIndex(content.length-1)
      setCounter(0)
    }
    else{
      setCurrentIndex(prev=>prev-1)
      setCounter(0)
    }
  }

  const next=()=>{
    if(currentIndex===content.length-1)
    {
      setCurrentIndex(0)
      setCounter(0)
    }
    else{
      setCurrentIndex(prev=>prev+1)
      setCounter(0)
    }
  }
  
    return(
      <>
        <div className={styles.modalContainer}>
          <div className={styles.modalCard}>
            <span className={styles.modalsvg} onClick={props.handelClick}><ModalArrow/></span>
            <div className={styles.arrow} onClick={props.handelClick}> {"<"} </div>
            <div>{props.title}</div>
          </div>
          <div className={styles.carousel}>
            <span className={styles.leftCarouselArrow} onClick={previous}><LeftCarouselArrow/></span>
            <div className={styles.carouselArrow1} onClick={previous}>{"<"}</div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
              <div className={styles.carouselTitle}>{content[currentIndex].title} </div>
              <div className={styles.carouselSubtitle}>{content[currentIndex].subtitle} </div>
              <div className={styles.carouselCaption}>{content[currentIndex].caption}</div>
            </div>
            <span className={styles.rightCarouselArrow} onClick={next}><RightCarouselArrow/></span>
            <div className={styles.carouselArrow2} onClick={next}>{">"}</div>
          </div>
        </div>
      </>
    )
}

export default IndexModal