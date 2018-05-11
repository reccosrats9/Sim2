const initialState={
    name: '',
    address: '',
    city: '',
    stateIn: '',
    zip: 0,
    imgURL: '',
    mortgage: 0, 
    rent: 0
}

const UPDATE_ONE= 'UPDATE_ONE'
const UPDATE_TWO= 'UPDATE_TWO'
const UPDATE_THREE= 'UPDATE_THREE'
const CANCEL = 'CANCEL'

export default function reducer(state=initialState, action){
    switch(action.type){
        case UPDATE_ONE:
            return(Object.assign({}, state, {name: action.payload.name, address: action.payload.address, city: action.payload.city, stateIn: action.payload.stateIn, zip: action.payload.zip}))
            console.log(state)
        case UPDATE_TWO:
            return(Object.assign({}, state, {imgURL: action.payload}))
            console.log(state)
        case UPDATE_THREE: 
            return(Object.assign({}, state, {mortage: action.payload.mortage, rent: action.payload.rent}))
            console.log(state)
        case CANCEL:
            return(Object.assign({}, state, action.payload))
        default: 
            return state
    }
}

export function updateOne(name, address, city, stateIn, zip){
    return{
        type: UPDATE_ONE,
        payload: {name, address, city, stateIn, zip}
    }
}

export function updateTwo(imgURL){
    return{
        type: UPDATE_TWO,
        payload: imgURL
    }
}

export function updateThree(mortgage, rent){
    return{
        type: UPDATE_THREE,
        payload: {mortgage, rent}
    }
}

export function cancel(){
    return{
        type: CANCEL,
        payload: initialState
    }
}