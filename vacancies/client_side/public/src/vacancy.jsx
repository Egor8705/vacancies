import React from 'react';

// Элемент таблицы вакансий

class Vacancy extends React.Component{
       constructor(props) {
         super(props);
         
         this.salaryReductor = this.salaryReductor.bind(this);
   };
   
   salaryReductor(){
     let salary = this.props.salary;
     if (salary === null) return 'ЗП не указана';
     else {
         if(salary.currency !== null){
            let currencieslist = this.props.currencieslist;
            let currencyAbbr = currencieslist.filter(_currency => {
                return _currency.code === salary.currency; 
           })[0].abbr;
             if (salary.from !== null && salary.to !== null) {
                 return `от ${salary.from} до ${salary.to} ${currencyAbbr}`;  
            } else if (salary.from === null && salary.to !== null) {
                return `до ${salary.to} ${currencyAbbr}`;
            } else if(salary.from !== undefined && salary.to === null){
                return `от ${salary.from} ${currencyAbbr}`;
            } else return 'ЗП не указана';
        }     
     }
   }
   
   
    render(){
        let salary = this.salaryReductor();
        return (
                <tr>
                    <td>
                        <div className = {'vacancy-table-div'}>
                            <a href = {this.props.link}>{this.props.name}</a><br/>
                            <span>{salary}</span>
                            <p>{this.props.requirement}</p>
                            <p>{this.props.responsibility}</p>
                            <span>{this.props.employer}</span><br/>
                            <span>{this.props.city}</span>
                        </div>
                    </td>
                </tr>
                );
     };
};

export default Vacancy;
