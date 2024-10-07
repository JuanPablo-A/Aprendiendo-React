import type { Dispatch, SetStateAction } from "react"

const tipOption = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    }
]

type TipPorcentageForProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

const TipPorcentageFor = ( {setTip, tip} : TipPorcentageForProps) => {
  return (
    <div>
        <h3 className="font-black text-lg"> Propina: </h3>

        <form action="">
            {tipOption.map( tipOption => (
                <div key={tipOption.id} className="flex gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                        type="radio" 
                        id={tipOption.id} 
                        name="tip"
                        value={tipOption.value}
                        onChange={() => setTip( tipOption.value )}
                        checked={tip === tipOption.value}
                    />
                </div>
            ))}

        </form>
    </div> 
  )
}

export default TipPorcentageFor
