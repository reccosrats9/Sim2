import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {updateThree, cancel} from '../../ducks/reducer';

class StepThree extends Component{

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
    
    componentDidMount(){
        let {mortgage, rent}= this.props
        console.log(mortgage, rent)
        this.setState({mortgage, rent})
    }

    updateMortgage(e){
        this.setState({mortgage: e.target.value})
    }
    updateRent(e){
        this.setState({rent: e.target.value})
    }
    addHouse(e){

        let {name, address, city, state, zip, imgURL}= this.props.state
        let {mortgage, rent}= this.state
        console.log(this.props)
        axios.post('/api/houses', {name, address, city, state, zip, imgURL, mortgage, rent})
        .then(()=> console.log('added new house'))
        
        this.props.cancel()

        // this.setState({
        //     name: '',
        //     address: '',
        //     city: '',
        //     state: '',
        //     zip: 0
        // })
    }


    render(){
        let {mortgage, rent}= this.state
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
                <button onClick={e=>this.props.updateThree(mortgage, rent)}>Previous Step</button>
            </Link>
            <Link to = '/'>
                < button onClick= {this.addHouse}>Complete</button>
            </Link>
            </div>
        )
    }
}

function mapStateToProps(state){
    // const {mortgage, rent} =state
    return{
        // mortgage, rent
        state
    }

}


export default connect(mapStateToProps, {updateThree, cancel})(StepThree);