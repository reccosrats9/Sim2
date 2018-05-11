import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import axios from 'axios';
import {Switch, Route} from 'react-router-dom';
import StepOne from '../StepOne/StepOne';
import StepTwo from '../StepTwo/StepTwo';
import StepThree from '../StepThree/StepThree';
import {connect} from 'react-redux';
import {cancel} from '../../ducks/reducer';

export default class Wizard extends Component{

  

    render(){
        return(
            <div>
                <Link to='/' >
                <button onClick={e=>cancel()} >  Cancel</button> 
                </Link>
                <Switch>
                    <Route component={StepOne} path ='/wizard/step1' />
                    <Route component={StepTwo} path ='/wizard/step2' />
                    <Route component={StepThree} path ='/wizard/step3' exact />
                </Switch>

            </div>
        )
    }
}

connect( null, {cancel})(Wizard)