import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class StepTwo extends Component{

    constructor(){
        super()
        this.state= {
            imgURL: ''
        }
        this.updateImg= this.updateImg.bind(this)
    }

    updateImg(e){
        this.setState({imgURL: e.target.value})
    }

    render(){
        return(
            <div>
                <div> Image URL
                <input onChange={this.updateImg}
                value= {this.state.imgURL} />
                </div>                

            <Link to='/wizard/step1' >
                <button>Previous Step</button>
            </Link>
            <Link to='/wizard/step3' >    
                <button>Next Step</button>
            </Link>
            </div>
        )
    }
}