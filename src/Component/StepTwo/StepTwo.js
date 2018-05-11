import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import {connect} from 'react-redux';
import {updateTwo} from '../../ducks/reducer';

class StepTwo extends Component{

    constructor(){
        super()
        this.state= {
            imgURL: ''
        }
        this.updateImg= this.updateImg.bind(this)
    }

    componentDidMount(){
        let {imgURL}= this.props
        this.setState({imgURL})
    }

    updateImg(e){
        this.setState({imgURL: e.target.value})
    }

    render(){
        let {imgURL}= this.state
        return(
            <div>
                <div> Image URL
                <input onChange={this.updateImg}
                value= {imgURL} />
                </div>                

            <Link to='/wizard/step1' >
                <button onClick={e=>this.props.updateTwo(imgURL)} >Previous Step</button>
            </Link>
            <Link to='/wizard/step3' >    
                <button onClick={e=>this.props.updateTwo(imgURL)} >Next Step</button>
            </Link>
            </div>
        )
    }
}
function mapStateToProps(state){
    const {imgURL} =state
    return{
        imgURL
    }

}

export default connect(mapStateToProps, {updateTwo})(StepTwo);