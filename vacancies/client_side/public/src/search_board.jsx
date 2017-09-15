import React from 'react';
import DropdownMenu from './dropdown-menu-region';

// Компонент выбора региона

class SearchBoard extends React.Component{
       constructor(props) {
         super(props);
         this.chooseCountry = this.chooseCountry.bind(this);
         this.chooseRegion = this.chooseRegion.bind(this);
         this.chooseCity = this.chooseCity.bind(this);
   };
   
   chooseCountry(value){
       this.props.setcountry(value);
   };
   
   chooseRegion(value){
       this.props.setregion(value);
   };
   
   chooseCity(value){
       this.props.setcity(value);
   };
      
   
    render(){       
        return (     
                <div>
                   <DropdownMenu content = {this.props.countries} title = {"Страна"} set = {this.chooseCountry} 
                                 currentname = {this.props.currentcountry ? this.props.currentcountry.name : ''} 
                   />
                   
                   <DropdownMenu content = {this.props.regions} title = {"Регион"} set = {this.chooseRegion} 
                                 classElem = {this.props.regions.length ? 'form-open' : 'form-closed'} 
                                 currentname = {this.props.currentregion ? this.props.currentregion.name : ''}
                   />
                   
                   <DropdownMenu content = {this.props.cities} title = {"Город"} set = {this.chooseCity} 
                                 classElem = {this.props.cities.length && this.props.regions.length  ? 'form-open' : 'form-closed'}
                                 currentname = {this.props.currentcity ? this.props.currentcity.name : ''}
                   />
                </div>                
                )
     };
};

export default SearchBoard;
