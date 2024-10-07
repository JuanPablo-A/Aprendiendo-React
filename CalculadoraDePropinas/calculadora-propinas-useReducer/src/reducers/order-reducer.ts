import { MenuItem, OrderItem } from "../types";

export type OrderActions = 
    { type: 'add-item', payload: { item: MenuItem }} |
    { type: 'delete-item', payload: {id: MenuItem['id'] }} |
    { type: 'place-order'} |
    { type: 'add-tip', payload: { value: number }}

export type OrderState = {
    order: OrderItem[],
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0
}

export const orderReducer = (
        state: OrderState = initialState,
        action: OrderActions
    ) => {
        if(action.type === 'add-item'){
            const itemExit = state.order.find( orderItem => orderItem.id === action.payload.item.id)
            let order : OrderItem[] = []

            if (itemExit){
                order = state.order.map( orderItem => orderItem.id === action.payload.item.id ? 
                    {...orderItem, quantity: orderItem.quantity + 1} : orderItem
                )
            }else {
                const newItem: OrderItem = { ...action.payload.item , quantity: 1}
                order = [...state.order, newItem]
            }
            
            return{
                ...state,
                order
            }
        }

        if(action.type === 'delete-item'){
            const order = state.order.filter( orderItem => orderItem.id !== action.payload.id)

            return{
                ...state,
                order
            }
        }

        if(action.type === 'place-order'){
            const order: OrderItem[] = []
            const tip = 0

            return{
                ...state,
                order,
                tip
            }
        }

        if(action.type === 'add-tip'){
            const tip = action.payload.value

            return{
                ...state,
                tip
            }
        }

    return state
}