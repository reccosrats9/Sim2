import React from 'react';
import './House.css'

export default function House (props){
    return(
        <div className='house' >
            <button onClick= {()=>props.deleteHouse(props.house.id)}>X</button>
                <div> <img className='pics' src={props.house.img} /> </div>
                <div> Property Name: {props.house.name}</div>
                <div> Address:{props.house.address}</div>
                <div> City:{props.house.city}</div>
                <div> State:{props.house.state}</div>
                <div> Zip: {props.house.zip}</div>
                <div> Monthly Mortgage: {props.house.mortgage}</div>
                <div> Desired Rent: {props.house.rent}</div>

        </div>
    )
}