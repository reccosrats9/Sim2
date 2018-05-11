import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class StepOne extends Component{

    constructor(){
        super()
        this.state= {
            imgURL: ''
        }
        this.updateName= this.updateName.bind(this);
        this.updateAddress= this.updateAddress.bind(this);
        this.updateCity= this.updateCity.bind(this);
        this.updateState= this.updateState.bind(this);
        this.updateZip= this.updateZip.bind(this);
        this.addHouse= this.addHouse.bind(this)

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

                <button onClick={this.addHouse} >Complete
                </button>

            </div>
        )
    }
}