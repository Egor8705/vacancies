import React from 'react';

//header с инпутом для поиска города

class Header extends React.Component{
       constructor(props) {
         super(props);
         
         this.findCity = this.findCity.bind(this);
   };
   
    findCity(e){
        e.preventDefault();
        const search_value = e.target.value.toLowerCase();
        if (search_value.length > 1){
            let regexp = new RegExp(`^(${search_value})[а-я,А-Я]*`,'i');
            let foundedCities = this.props.allcities.filter(city => {
                 city.name.toLowerCase(); 
                 return regexp.test(city.name); 
            });
            this.props.findcity(foundedCities);
       } else this.props.findcity([]);
   }
    render(){
        return (     
                <nav className = "navbar navbar-toggleable-md navbar-light bg-faded">
                    <form className ="form-inline my-3 my-lg-0">
                        <input className ="form-control mr-sm-2" 
                               type="text" placeholder="Город" style={{width: 400 + 'px'}}
                               onChange ={this.findCity} />
                    </form>
                </nav>               
                )
     };
};

export default Header;
