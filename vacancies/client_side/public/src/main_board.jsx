import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import Vacancy from './vacancy';
import SearchBoard from './search_board';
import VacancyBoard from './vacancy_board';
import SearchBoardUser from './search_board_user';
import Header from './header';
import SearchCity from './search-city-block';

import {
    getVacanciesList,
    getallCitiesList,
    getCountriesList,
    getRegionsList,
    getEmploymentAndScheduleList
} from '../actions/getLists';

import {
    GET_VACANCIES_lIST,
    GET_COUNTRIES_LIST,
    GET_REGIONS_LIST,
    GET_CITIES_LIST,
    GET_FOUNDED_CITIES_LIST,
    GET_EMPLOYMENT_AND_SCHEDULE_LIST,

    SET_CURRENT_EMPLOYMENT, 
    SET_CURRENT_SCHEDULE,
    UNSET_CURRENT_EMPLOYMENT, 
    UNSET_CURRENT_SCHEDULE, 
    SET_CURRENT_AREA, 
    SET_CURRENT_COUNTRY,
    SET_CURRENT_REGION,
    SET_CURRENT_CITY,
} from '../constants/appConstants';

    class MainBoard extends React.Component{

        constructor(props) {
           super(props);

           this.setCountry = this.setCountry.bind(this);
           this.setRegion = this.setRegion.bind(this);
           this.setCurrentArea = this.setCurrentArea.bind(this);
           this.setCity = this.setCity.bind(this);
           this.findCity = this.findCity.bind(this);
           this.setCurrentEmployment = this.setCurrentEmployment.bind(this);
           this.unsetCurrentSchedule = this.unsetCurrentSchedule.bind(this);
           this.unsetCurrentEmployment = this.unsetCurrentEmployment.bind(this);
           this.setCurrentSchedule = this.setCurrentSchedule.bind(this);
           this.loadContent = this.loadContent.bind(this);
       };

        componentDidMount(){
            
           const {dispatch} = this.props;  

           dispatch(getVacanciesList(this.props.currents.homeURL));
           dispatch(getCountriesList());
           dispatch(getallCitiesList());
           dispatch(getEmploymentAndScheduleList());
      }; 


      setCountry(countryName){

         let country = this.props.lists.countriesList.filter((country) => {
             return (country.name === countryName);
         })[0];
   
         const {dispatch} = this.props;
         
         dispatch({
            type: SET_CURRENT_COUNTRY,
            payload: {
                name: countryName,
                id: country.id,    
           }
        });
        
        dispatch({
            type: SET_CURRENT_AREA,
            payload: country.id   
        });
        
        dispatch(getRegionsList(country.id));
        
        let params = {
               area: country.id,
               employment: this.props.currents.currentEmployment,
               schedule: this.props.currents.currentSchedule
       };
        this.loadContent(params);
      };

      setRegion(regionName){

         let region = this.props.lists.regionsList.filter((currentRegion) => {
             return (currentRegion.name === regionName);
         })[0];
  
        const {dispatch} = this.props;
        dispatch({
            type: SET_CURRENT_REGION,
            payload: {
                name: region.name,
                id: region.id   
           }
        });
        
        dispatch({
            type: GET_CITIES_LIST,
            payload: region.areas     
     
        });
        
        dispatch({
            type: SET_CURRENT_AREA,
            payload: region.id   
        });
        
         let params = {
               area: region.id,
               employment: this.props.currents.currentEmployment,
               schedule: this.props.currents.currentSchedule
       };
        this.loadContent(params);
      };

      setCity(cityName){          
            let city = this.props.lists.citiesList.filter((currentCity) => {
                 return (currentCity.name === cityName);
             })[0];

            const {dispatch} = this.props;

            dispatch({
                type: SET_CURRENT_CITY,
                payload: {
                    name: city.name,
                    id: city.id
               }
             });

            dispatch({
                type: SET_CURRENT_AREA,
                payload: city.id   
            });

            let params = {
                area: city.id,
                employment: this.props.currents.currentEmployment,
                schedule: this.props.currents.currentSchedule
           };
                this.loadContent(params);
       };
        setCurrentArea(id,name){
           this.props.dispatch({
                type: SET_CURRENT_AREA,
                payload: id   
            }); 
            
            this.props.dispatch({
                type: SET_CURRENT_CITY,
                payload: {
                    name: name,
                    id: id
               }
             });
             
             let params = {
                area: id,
                employment: this.props.currents.currentEmployment,
                schedule: this.props.currents.currentSchedule
           };
                this.loadContent(params);             
        };
        setCurrentEmployment(value){
            let params = {
               area: this.props.currents.currentArea,
               employment: value,
               schedule: this.props.currents.currentSchedule
           };
            this.props.dispatch({
                type: SET_CURRENT_EMPLOYMENT,
                payload: value 
             
           });
           
           this.loadContent(params);           
       };

        setCurrentSchedule(value){
            let params = {
               area: this.props.currents.currentArea,
               employment: this.props.currents.currentEmloyment,
               schedule: value
           };
            this.props.dispatch({
                type: SET_CURRENT_SCHEDULE,
                payload:  value               
          });
          this.loadContent(params);
       };
       
       unsetCurrentEmployment(){
            let params = {
               area: this.props.currents.currentArea,
               schedule: this.props.currents.currentSchedule
           };
            this.props.dispatch({
                type: UNSET_CURRENT_EMPLOYMENT,
                payload: '' 
             
           });
           
           this.loadContent(params);           
       };

        unsetCurrentSchedule(){
            let params = {
               area: this.props.currents.currentArea,
               employment: this.props.currents.currentEmloyment
           };
            this.props.dispatch({
                type: UNSET_CURRENT_SCHEDULE,
                payload:  ''               
          });
          this.loadContent(params);
       };

        findCity(foundedCities){
            this.props.dispatch({
                type: GET_FOUNDED_CITIES_LIST,
                payload:  foundedCities               
          });
        }

        loadContent(params){
           let currentStr = '';
           for (let key in params){
             if(params[key] !== '' && params[key] !== undefined) currentStr += '&' + `${key}=${params[key]}`;  
           };
           let URL = `${this.props.currents.homeURL}&${currentStr}`;
           this.props.dispatch(getVacanciesList(URL));
       };

        render(){        
            return (<div>
                        <Header findcity = {this.findCity} allcities = {this.props.lists.allcities}/> 
                        <div className = 'conteiner'>
                            <SearchCity foundedcities = {this.props.lists.foundedcities}  
                                        set = {this.setCurrentArea} 
                                        findcity = {this.findCity}
                            />
                            <div className = 'row'>
                                <div className = 'col-xs-12 col-md-3'>
                                    <div className = 'search-board-conteiner'>
                                        <SearchBoard countries = {this.props.lists.countriesList}
                                                     regions = {this.props.lists.regionsList}
                                                     cities = {this.props.lists.citiesList}
                                                     currentcountry = {this.props.currents.currentCountry}
                                                     currentregion = {this.props.currents.currentRegion}
                                                     currentcity = {this.props.currents.currentCity}

                                                     setcountry = {this.setCountry}
                                                     setregion = {this.setRegion}
                                                     setcity = {this.setCity}                                     
                                        />
                                        <SearchBoardUser employment = {this.props.lists.employment} 
                                                         schedule = {this.props.lists.schedule}
                                                         currentemployment = {this.props.currentEmployment}
                                                         currentschedule = {this.props.currentSchedule}

                                                         setemployment = {this.setCurrentEmployment}
                                                         setschedule = {this.setCurrentSchedule} 

                                                         unsetemployment = {this.unsetCurrentEmployment}
                                                         unsetschedule = {this.unsetCurrentSchedule}
                                        />
                                    </div>
                                </div>
                                <VacancyBoard vacancieslist = {this.props.lists.vacanciesList} currencieslist = {this.props.lists.currenciesList}/>
                            </div>
                        </div>
                    </div>
                    );
         };
    };

function mapStateToProps (state) {
  return {
        currents: state.currents,
        lists: state.lists
  };
};

export default connect(mapStateToProps)(MainBoard);