import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class Wizard extends Component{

  

    render(){
        return(
            <div>
                <Link to='/' >
                <button> Cancel</button> 
                </Link>

            </div>
        )
    }
}