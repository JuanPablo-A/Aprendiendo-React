import { Activity } from '../types/index';

// Actions of the reducer, the payload is the data and the action that I am going to send to the reducer
export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity} } 

// type of state
type ActivityState = {
    activities: Activity[]
}

// State inicial
export const initialState: ActivityState = {
    activities: []
}

// Reducer  
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions 
) => {

    if (action.type === 'save-activity') {
        // Este codigo maneja la logica para actualizar el satate
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }
    }

    return state
}
