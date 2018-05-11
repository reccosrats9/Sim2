import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class StepOne extends Component{

    constructor(){
        super()
        this.state= {
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.updateName= this.updateName.bind(this);
        this.updateAddress= this.updateAddress.bind(this);
        this.updateCity= this.updateCity.bind(this);
        this.updateState= this.updateState.bind(this);
        this.updateZip= this.updateZip.bind(this);

    }

    updateName(e){
        this.setState({name: e.target.value})
    }

    updateAddress(e){
        this.setState({address: e.target.value})
    }

    updateCity(e){
        this.setState({city: e.target.value})
    }

    updateState(e){
        this.setState({state: e.target.value})
    }

    updateZip(e){
        this.setState({zip: e.target.value})
    }

    render(){
        return(
            <div>
                <div> Property Name
                <input onChange={this.updateName}
                value= {this.state.name} />
                </div>                
                <div> Address
                <input onChange={this.updateAddress}
                value= {this.state.address}/>
                </div>
                <div> City
                <input onChange={this.updateCity}
                value= {this.state.city}/>
                </div>
                <div> State
                <input onChange={this.updateState}
                value= {this.state.state}/>
                </div>
                <div>Zip
                <input onChange={this.updateZip}
                value= {this.state.zip}/>
                </div>
                <Link to='/wizard/step2' >
                <button >Next Step</button>
                </Link>

            </div>
        )
    }
}