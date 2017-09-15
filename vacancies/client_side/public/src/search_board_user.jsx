import React from 'react';
import DropdownMenu from './dropdown-menu';

//Компонент выбора типа занятости и графика работы
class SearchBoardUser extends React.Component{
       constructor(props) {
        super(props);
        
        this.setEmployment = this.setEmployment.bind(this);
        this.setSchedule = this.setSchedule.bind(this);
        this.unsetEmployment = this.setEmployment.bind(this);
        this.unsetSchedule = this.setSchedule.bind(this);
   };
   
   setEmployment(value){
       this.props.setemployment(value);
       
   }
   
   setSchedule(value){
       this.props.setschedule(value);
   }
   
    unsetEmployment(){
       this.props.unsetemployment();       
   }
   
   unsetSchedule(){
       this.props.unsetschedule();
   }      
 
    render(){        
        return (     
                <div>  
                   <DropdownMenu content = {this.props.employment} set = {this.setEmployment} unset = {this.unsetEmployment} title = {"Занятость"}/>
                   <DropdownMenu content = {this.props.schedule} set = {this.setSchedule} unset = {this.unsetSchedule} title = {"График работы"}/>
                </div>                
                )
     };
};

export default SearchBoardUser;
