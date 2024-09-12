import { Activity } from '../types/index';

// Actions of the reducer, the payload is the data and the action that I am going to send to the reducer
export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity} } |
    { type: 'set-activeId', payload: { id: Activity['id']} }

// type of state
export type ActivityState = {
    activities: Activity[]
    activeId: Activity['id']
}

// State inicial
export const initialState: ActivityState = {
    activities: [],
    activeId: ''
}

// Reducer  
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions 
) => {

    if (action.type === 'save-activity') {
        // Este codigo maneja la logica para actualizar el satate
        let updatedActivities: Activity[] = []

        if (state.activeId) {
            updatedActivities = state.activities.map( stateActivity => stateActivity.id === state.activeId ? action.payload.newActivity : stateActivity)
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity]
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId: ''
        }
    }

    if (action.type === 'set-activeId') {
        return {
            ...state,
            activeId: action.payload.id
        }
    }

    return state
}
