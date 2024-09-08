import { useState, ChangeEvent, FormEvent } from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"

export default function Form() {

    const [ activity, setActivity ] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    }
    )

    /**
     * Function for the mapping of the data, from the form to the Activity state
     * e.target.id = Know what activity I am filling
     * e.target.value = The value of the field I am filling
     * + = converts e.target.value to number
     * @param event 
     */
    const handleChange = ( event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement> ) => {

        /**
         * Si estoy escribiendo en categoria o calorias retorna un TRUE 
         */
        const isNumberFill = ['category', 'calories'].includes(event.target.id)


        setActivity({
            ...activity,
            [event.target.id]: isNumberFill ? +event.target.value : event.target.value  
        })
    }

    /**
     * Validation of the form fields
     * name.trim() => join all spaces in the string
     * @returns boolean
     */
    const isValidActivity = () => {
        const { name, calories } = activity

        return name.trim() !== '' && calories > 0 
    }

    /**
     * Function for submitting the form
     * @param e 
     */
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        console.log('submit...')
    }


    
  return (
    <form 
        className="space-y-5 bg-white shadow p-10 rounded-lg"
        onSubmit={handleSubmit}
    >
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="category" className="font-bold">Categorias</label>

            <select 
                className="border border-slate-300 p-2 rounded-lg w-full bg-white" 
                id="category"
                value={activity.category}
                onChange={ handleChange }
            >
                { categories.map( category => (
                    <option 
                        value={category.id} 
                        key={category.id}
                    >
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="name" className="font-bold">Actividad</label>
            <input 
                type="text"
                id="name" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="EJ. comida, Jugo de naranja, ensalada, ejercicio, pesas, bicicleta "
                value={activity.name}
                onChange={handleChange}
            />

        </div>
        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="calories" className="font-bold">Calories</label>
            <input 
                type="number"
                id="calories" 
                className="border border-slate-300 p-2 rounded-lg"
                placeholder="EJ. 300 o 500 "
                value={activity.calories}
                onChange={handleChange}
            />
        </div>

        <input 
            type="submit"
            className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
            value={activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'}
            disabled = {!isValidActivity()}
        />
    </form>
  )
}
