export type Guitar = {
    id: number,
    name: string,
    image: string,
    description: string,
    price: number,
}

// Utility type to create a new type from an existing type, omitting some properties
// export type CartItem = Omit<Guitar, 'id' | 'name' | 'price'> & {
//      quantity: number 
// }

export type CartItem = Guitar & {
    quantity: number,
}

// look at the GuitarID type alias. It is a new type that is created from the Guitar type,
export type GuitarID = Guitar['id']