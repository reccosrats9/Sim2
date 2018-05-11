import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class StepThree extends Component{

    constructor(){
        super()
        this.state= {
            mortgage: 0, 
            rent: 0
        }
        this.updateMortgage= this.updateMortgage.bind(this)
        this.updateRent= this.updateRent.bind(this)
        this.addHouse= this.addHouse.bind(this)

    }
    
    updateMortgage(e){
        this.setState({mortgage: e.target.value})
    }
    updateRent(e){
        this.setState({rent: e.target.value})
    }
    addHouse(e){
        let {name, address, city, state, zip}= this.state
        axios.post('/api/houses', {name, address, city, state, zip})
        .then(()=> console.log('added new house'))

        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        })
    }


    render(){
        return(
            <div>
                <div> Monthly Mortgage Amount
                <input onChange={this.updateMortgage}
                value= {this.state.mortgage} />
                </div> 
                <div> Desired Monthly Rent    
                <input onChange={this.updateRent}
                value= {this.state.rent} />
                </div>             

            <Link to='/wizard/step2' >
                <button>Previous Step</button>
            </Link>
            <Link to = '/'>
                < button onClick= {this.addHouse}>Complete</button>
            </Link>
            </div>
        )
    }
}