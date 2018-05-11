import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import {connect} from 'react-redux';
import {updateOne} from '../../ducks/reducer';

class StepOne extends Component{

    constructor(){
        super()
        this.state= {
            name: '',
            address: '',
            city: '',
            stateIn: '',
            zip: null
        }
        this.updateName= this.updateName.bind(this);
        this.updateAddress= this.updateAddress.bind(this);
        this.updateCity= this.updateCity.bind(this);
        this.updateStateIn= this.updateStateIn.bind(this);
        this.updateZip= this.updateZip.bind(this);

    }

    componentDidMount(){
        let {name, address, city, stateIn, zip}= this.props
        console.log({name, address, city, stateIn, zip})
        this.setState({name, address, city, stateIn, zip })
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

    updateStateIn(e){
        this.setState({stateIn: e.target.value})
    }

    updateZip(e){
        this.setState({zip: e.target.value})
    }

    render(){
        let {name, address, city, stateIn, zip} =this.state
        return(
            <div>
                <div> Property Name
                <input onChange={this.updateName}
                value= {name} />
                </div>                
                <div> Address
                <input onChange={this.updateAddress}
                value= {address}/>
                </div>
                <div> City
                <input onChange={this.updateCity}
                value= {city}/>
                </div>
                <div> State
                <input onChange={this.updateStateIn}
                value= {stateIn}/>
                </div>
                <div>Zip
                <input onChange={this.updateZip}
                value= {zip}/>
                </div>
                <Link to='/wizard/step2' >
                <button onClick={e=>this.props.updateOne(name, address, city, stateIn, zip)}>Next Step</button>
                </Link>

            </div>
        )
    }
}

function mapStateToProps(state){
    const {name, address, city, stateIn, zip} =state
    return{
        name, 
        address, 
        city, 
        stateIn, 
        zip
    }

}

export default connect(mapStateToProps, {updateOne})(StepOne);