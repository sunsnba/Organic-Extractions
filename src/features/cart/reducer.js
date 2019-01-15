const cartReducer = (state=[], action) => {
    switch(action.type) {
        case 'ADD': 
          return [...state, action.payload]
          // spread operator gives prev state an (all vals of old array) plus new value we're adding in

        case 'REMOVE': 
          const firstMatchIndex = state.indexOf(action.payload)
           return state.filter((item, index) => index !== firstMatchIndex)
           }
        }

export default cartReducer;