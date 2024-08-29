import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])
    
    const addItem = (item : MenuItem) => {
        
        const itemExit = order.find( orderItem => orderItem.id === item.id)
        if (itemExit){
            const orderUpdate = order.map( orderItem => orderItem.id === item.id ? 
                {...orderItem, quantity: orderItem.quantity + 1} : orderItem
            )

            setOrder(orderUpdate)
        }else {
            const newItem = { ...item, quantity: 1}

            setOrder([...order, newItem])   
        }
    }

    return {
        addItem
    }
}