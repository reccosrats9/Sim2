const initialState={
    name: '',
    address: '',
    city: '',
    state: '',
    zip: 0,
    imgURL: '',
    mortgage: 0, 
    rent: 0
}

export default function reducer(state=initialState, action){
    switch(action.type){
        default: 
            return state
    }
}