import { Activity } from '../types/index';

// Actions of the reducer, the payload is the data and the action that I am going to send to the reducer
export type ActivityActions = 
    { type: 'save-activity', payload: { newActivity: Activity} } |
    { type: 'set-activeId', payload: { id: Activity['id']} } |
    { type: 'delete-activity', payload: { id: Activity['id']} } | 
    { type: 'restart-app' } 

// type of state
export type ActivityState = {
    activities: Activity[]
    activeId: Activity['id']
}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities): []
}

// State inicial
export const initialState: ActivityState = {
    activities: localStorageActivities(),
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

    if (action.type === 'delete-activity'){
        return {
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id)    
        }
    }

    if (action.type === 'restart-app') {
        return {
            activities: [],
            activeId: '' 
        }
    }

    return state
}
