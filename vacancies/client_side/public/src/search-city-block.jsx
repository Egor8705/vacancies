import React from 'react';

// Выпадающий список городов
class SearchCity extends React.Component{
    constructor(props) {
        super(props);
        
        this.setActive = this.setActive.bind(this);     
   };
     
   setActive(citi_id,citi_name){
       this.props.set(citi_id,citi_name);
       this.props.findcity([]);
   }
       
    render(){

         let cities = this.props.foundedcities.map((elem,index) => {
                return (
                       <Elem value = {elem.name} click = {this.setActive}  key = {index}  id = {elem.id} />
                    );
        });
        
        return (    
                    <div className = {this.props.foundedcities.length ? 'search-city-open' : 'search-city-closed'}>  
                        <ul className = 'list-group'>
                            {cities}
                        </ul>
                    </div>
                );
     };
};

class Elem extends React.Component{
    constructor(props){
        super(props);
        this.showMe = this.showMe.bind(this);
   };
    
    showMe(){
        this.props.click(this.props.id,this.props.name);
   }
    render(){
        return(
            <li className = {this.props.elemClass}>
                <span onClick = {this.showMe}>
                    {this.props.value}
                </span>
            </li>
            );
    };
}

export default SearchCity;
