// редьюсер списков

import {
    GET_VACANCIES_lIST, 
    GET_COUNTRIES_LIST,
    GET_CURRENCIES_LIST,
    GET_REGIONS_LIST,
    GET_CITIES_LIST,
    GET_FOUNDED_CITIES_LIST,
    GET_ALLCITIES_LIST,
    GET_EMPLOYMENT_SCHEDULE_AND_CURRECIES_LIST
} from '../constants/appConstants';

const initialState = {
        vacanciesList: [],
        countriesList: [],
        regionsList:   [],
        citiesList:    [],
        employment:    [],
        schedule:      [],
        allcities:     [],
        foundedcities: [],
        currenciesList: []
};

export default function setLists(state = initialState, action) {
    switch(action.type) {
        case GET_VACANCIES_lIST:{
            return Object.assign({},state,{
                vacanciesList: action.payload
            });
       };
       case GET_ALLCITIES_LIST:{
            return Object.assign({},state,{
                allcities: action.payload
            });
       };
       case GET_FOUNDED_CITIES_LIST:{
            return Object.assign({},state,{
                foundedcities: action.payload
            });
       };
        case GET_COUNTRIES_LIST:{
            return Object.assign({},state,{
                countriesList: action.payload
            });
       };
        case GET_REGIONS_LIST:{
            return Object.assign({},state,{
                regionsList: action.payload
            });
       };
       case GET_CITIES_LIST:{
            return Object.assign({},state,{
                citiesList: action.payload
            });
       };
        case GET_EMPLOYMENT_SCHEDULE_AND_CURRECIES_LIST:{
           return Object.assign({},state,{
                employment:  action.payload.employment,
                schedule:  action.payload.schedule,
                currenciesList: action.payload.currency
            });
       }
                
        default:
            return state;
    }
}

