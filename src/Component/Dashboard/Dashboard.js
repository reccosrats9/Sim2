import React, {Component} from 'react';
import House from '../House/House';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            houses:[]
        }
        this.componentDidMount= this.componentDidMount.bind(this);
        this.deleteHouse= this.deleteHouse.bind(this);
    }

    componentDidMount(){
        axios.get('/api/houses').then(
            res=> this.setState({houses: res.data}))
    }

    deleteHouse(id){
        axios.delete(`/api/houses/${id}`).then(console.log('home deleted'))
        .then(this.componentDidMount)
    }

    render(){
        let {houses}= this.state;
        return(
            <div>
                <div> Dashboard</div>
                <Link to='/wizard/step1' >
                <button> Add New Property</button> 
                </Link>
            {houses.map(house=> {
                return(
                    <House key={house + house.id} deleteHouse= {this.deleteHouse}
                    house={house}
                    />
                )
            } )}
            </div>
        )
    }
}