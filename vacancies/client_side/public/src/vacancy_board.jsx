import React from 'react';
import Vacancy from './vacancy';

// Таблица выводимых вакансий

class VacancyBoard extends React.Component{
       constructor(props) {
         super(props);
   };
   
   
    render(){
        let vacancies;
        if (this.props.vacancieslist.length){
            vacancies = this.props.vacancieslist.map((vacancy,index) => {
                return (
                           <Vacancy key = {index} 
                                    name = {vacancy.name} 
                                    requirement = {vacancy.snippet.requirement}
                                    responsibility = {vacancy.snippet.responsibility}
                                    city = {vacancy.area.name}
                                    link = {vacancy.alternate_url}
                                    employer = {vacancy.employer.name}
                                    salary = {vacancy.salary}
                                    currencieslist = {this.props.currencieslist}
                           />
                       );
          })
       } else vacancies = <tr style={{marginLeft: 50 + '%'}}><td>Вакансий нет</td></tr>;
    
        return (     
                <div className = 'col-xs-12 col-md-8'>
                    <table className = 'vacancy-table'>
                        <tbody>
                            {vacancies}
                        </tbody>
                    </table>
                </div>               
                )
     };
};

export default VacancyBoard;
