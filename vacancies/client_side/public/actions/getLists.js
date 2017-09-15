//Actions для получения списков

import {
    GET_VACANCIES_lIST,
    GET_ALLCITIES_LIST,
    GET_COUNTRIES_LIST, 
    GET_REGIONS_LIST,
    GET_EMPLOYMENT_SCHEDULE_AND_CURRECIES_LIST
} from '../constants/appConstants';

export function getVacanciesList(URL){
    return dispatch => {
       fetch(URL)  
            .then(res => res.json().then(vacancies => {
              dispatch({
                    type: GET_VACANCIES_lIST,
                    payload: vacancies.items
              });
        }))
            .catch(err => {
                console.log(err)
          });
    }  
}

export function getCountriesList(){
    return dispatch => {
        fetch('https://api.hh.ru/areas/countries')  
            .then(res => res.json().then(countries => {
                dispatch({
                    type: GET_COUNTRIES_LIST,
                    payload: countries
               });                              
        }))
            .catch(err => {
                console.log(err);
          });
    }  
};

export function getallCitiesList(){
    return dispatch => {
        fetch('https://api.hh.ru/areas')  
            .then(res => res.json().then(allregions => {
                let allcities = [];
                allregions.forEach(country => {
                   if(country.areas.length){
                      country.areas.forEach(region => {
                          if (region.areas.length){
                              region.areas.forEach(city => {
                                  allcities.push({
                                     name: city.name,
                                     id: city.id
                                  });
                              });
                          } else {
                              allcities.push({
                                     name: region.name,
                                     id: region.id
                                  });
                          };
                      }); 
                   } else {
                       allcities.push({
                            name: country.name,
                            id: country.id
                     });
                   };
                });
                dispatch({
                    type: GET_ALLCITIES_LIST,
                    payload: allcities
               })
        }))
            .catch(err => {
                console.log(err);
          });
    }  
};
export function getRegionsList(id){
    return dispatch => {
        fetch(`https://api.hh.ru/areas/${id}`)  
            .then(res => res.json().then(regions => {
                dispatch({
                    type: GET_REGIONS_LIST,
                    payload: regions.areas
               });
        }))
            .catch(err => {
                console.log(err);
          });
    }  
};

export function getEmploymentAndScheduleList(){
    return dispatch => {
        fetch('https://api.hh.ru/dictionaries')  
            .then(res => res.json().then(dictionaries => {
                dispatch({
                    type: GET_EMPLOYMENT_SCHEDULE_AND_CURRECIES_LIST,
                    payload: {
                        employment: dictionaries['employment'],
                        schedule: dictionaries['schedule'],
                        currency: dictionaries['currency'],
                    }
               });
               
        }))
            .catch(err => {
                console.log(err);
          });
    }  
};