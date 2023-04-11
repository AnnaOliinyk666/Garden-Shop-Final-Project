const BASKET_INCR = 'BASKET_INCREMENT'
const BASKET_DECR = 'BASKET_DECREMENT'
const BASKET_ADD = 'BASKET_ADD'
const BASKET_REMOVE = 'BASKET_REMOVE'
const BASKET_CLEAR = 'BASKET_CLEAR'


    const defaultState = JSON.parse(localStorage.getItem('basket')) ?? [];
    const writeToLocalStorage = (basket) => localStorage.setItem('basket', JSON.stringify(basket));

    export const basketIncrementAction = (payload) => {
    return {
        type: BASKET_INCR,
        payload
    }
   }
   export const basketDecrementAction = (payload) =>{
    return {
        type: BASKET_DECR,
        payload
    }
   }
   export const basketAddAction = (payload) =>{
    return {
        type: BASKET_ADD,
        payload
    }
   }
   export const basketRemoveAction = (payload) =>{
    return {
        type: BASKET_REMOVE,
        payload
    }
   }
   export const basketClearAction = () =>{
    return {
        type: BASKET_CLEAR,
    }
   }
   export const basketReducer = (state=defaultState,action) => {
    if (action.type === BASKET_DECR) {
        const target = state.find(({id}) => id === action.payload);
        target.count--
        
        if (target.count === 0) {
            state = state.filter (({id}) => id !== action.payload)
        } 
        writeToLocalStorage(state)
        return [...state]     
        
    } else if (action.type === BASKET_INCR) {
        const target = state.find(({id}) => id === action.payload);
        target.count++
        writeToLocalStorage(state)
        return [...state]
    }else if (action.type === BASKET_ADD) {
        const target = state.find(({id}) => id === action.payload);
        if (target === undefined) {
            const newState = [...state, {id: action.payload, count:1 }]
            writeToLocalStorage(newState)
                return newState
            } else {
                target.count++
                writeToLocalStorage(state)
                return [...state]
            } 
    } else if (action.type === BASKET_REMOVE) {
        state = state.filter (({id}) => id !== action.payload)
        writeToLocalStorage(state)
        return [...state]
    } else if (action.type === BASKET_CLEAR) {
        writeToLocalStorage([])
        return []
    }
        return state  
    }

    