// редьюсер текущих выбранных значений

import {
    SET_CURRENT_EMPLOYMENT, 
    SET_CURRENT_SCHEDULE,
    UNSET_CURRENT_EMPLOYMENT, 
    UNSET_CURRENT_SCHEDULE,
    SET_CURRENT_AREA, 
    SET_CURRENT_COUNTRY,
    SET_CURRENT_REGION,
    SET_CURRENT_CITY,
} from '../constants/appConstants';

const initialState = {
        homeURL:'https://api.hh.ru/vacancies?per_page=50&page=0&order_by=publication_time',
        currentEmployment:'',
        currentArea:'',
        currentSchedule: '',
        currentCountry: {
            name: '',
            id: ''
       },
        currentRegion: {
            name: '',
            id: ''
       },
        currentCity: {
            name: '',
            id: ''
        } 
};

export default function setCurrents(state = initialState, action) {
    switch(action.type) {
        case SET_CURRENT_EMPLOYMENT:{
            return Object.assign({},state,{
                currentEmployment: action.payload
            });
       };
       case UNSET_CURRENT_EMPLOYMENT:{
            return Object.assign({},state,{
                currentEmployment: ''
            });
       };
        case SET_CURRENT_SCHEDULE:{
            return Object.assign({},state,{
                currentSchedule: action.payload
            });
       };
       case UNSET_CURRENT_SCHEDULE:{
            return Object.assign({},state,{
                currentSchedule: ''
            });
       };
       
        case SET_CURRENT_AREA:{
            return Object.assign({},state,{
                currentArea: action.payload
            });
       };
        case SET_CURRENT_COUNTRY:{
            return Object.assign({},state,{
                 currentCountry: {
                    name: action.payload.name,
                    id: action.payload.id
                }
            });
       };
       case SET_CURRENT_REGION:{
            return Object.assign({},state,{
                 currentRegion: {
                    name: action.payload.name,
                    id: action.payload.id
                }
            });
       };
       case SET_CURRENT_CITY:{
            return Object.assign({},state,{
                 currentCity: {
                    name: action.payload.name,
                    id: action.payload.id
                }
            });
       };
        default:
            return state;
    }
}

