const INITIAL_STATE = {
    users: [
        {
            name: "Mussadiq",
            email: "mussadiq@gmail.com"
        },
        {
            name: "Shahbaz",
            email: "shahbaz@gmail.com"
        }
    ]
}


export default (state = INITIAL_STATE, action) => {
    console.log()
    switch (action.type){
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users, action.data]
            })
        default: 
            return state;
    }
    
}