import React ,{Component} from 'react'
import styles from '../../stylesheets/index.module.scss'
import IndexModal from './IndexModal'



class IndexProcessCard extends Component  {
    state={
        showModal:false
    }
    modal = () => {
        this.setState({showModal:true})
    }
    closeModal = () => {
        this.setState({showModal:false})
    }
    render() {
        return (
            <>
                <div className={styles.processCard}>
                    <div className={styles.processTitle}>{this.props.title}</div>
                    <div className={styles.processSubtitle}>{this.props.subtitle}</div>
                    <button className={styles.processButton} onClick={this.modal}>Know More</button>
                </div>
                {this.state.showModal===true ? <IndexModal handelClick={this.closeModal} title={this.props.title} content={this.props.content}/>: null}
            </>
        )
    }
    
}

export default IndexProcessCard
