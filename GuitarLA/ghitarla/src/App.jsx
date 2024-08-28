import { useState, useEffect } from 'react'
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from './data/db'  

function App() {
    /*
        Statements: Cada statements es una instruccion para hacer algo 

            - Creacion de variables 
            - Codigo de condicionales con if 
            - Lanzar errores con Throw new Error()
            - Iterar con while o for   
    */

    const  initialCart = () => {
        const localStorageCart = localStorage.getItem('cart')
        return localStorageCart ? JSON.parse(localStorageCart) : []
    }
   
    const [data] = useState(db)
    const [cart, setCart] = useState(initialCart)

    const MAX_ITEMS = 5
    const MIN_ITEMS = 0

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function addToCart (item) {
        const itemExists = cart.findIndex( (guitar) => guitar.id === item.id )
        
        if(itemExists !== -1 ) {

            if (cart[itemExists].quantity === MAX_ITEMS) return  

            const updateCart = [...cart]
            updateCart[itemExists].quantity++
            setCart(updateCart)
        } else {
            item.quantity = 1 
            setCart([...cart, item])
        } 
    }
    
    function removeFromCart (id ){
        setCart( prevCart => prevCart.filter(guitar => guitar.id !== id) )
    }


    function increaseQuantity (id ) {
        const updateCart = cart.map(item => {
            if (item.id === id && item.quantity < MAX_ITEMS) {
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
        setCart(updateCart)
    }

    function decreaseQuantity (id ) {
        const updateCart = cart.map( item => {
            if ( item.id === id) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                }
            }

            return item
        })
        setCart(updateCart.filter(item => item.quantity > MIN_ITEMS))
    }

    function clearCart(){
        setCart([])
    }

  return (

    /*t
        Expressions: Una expresion es algo que produce un valor 

            - Ternarios 
            - Utilizar un array Method que genere un nuevo array 
            - .map que genera un nuevo array a diferencia de for each
    */

    <>
    <Header
        cart={cart}
        removeFromCart = { removeFromCart }
        increaseQuantity = { increaseQuantity }
        decreaseQuantity = { decreaseQuantity }
        clearCart = { clearCart }
    />

    <main className= "container-xl mt-5">
        <h2 className= "text-center">Nuestra Colección</h2>

        <div className= "row mt-5">
            {data.map((guitar) => (
                <Guitar
                    key = { guitar.id }
                    guitar = { guitar }
                    addToCart = { addToCart }
                />
            ))}
            
        </div>
    </main>


    <footer className= "bg-dark mt-5 py-5">
        <div className= "container-xl">
            <p className= "text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>
    </>
  )
}

export default App
