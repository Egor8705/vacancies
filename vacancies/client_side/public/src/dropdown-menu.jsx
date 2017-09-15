import React from 'react';

// Выпадающее меню для выбора типа занятости и графика работы

class DropdownMenu extends React.Component{
       constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            active_name: '',
            activ_id: ''
        };
        
        this.setActive = this.setActive.bind(this);
        this.unsetActive = this.unsetActive.bind(this);
        this.isActive = this.isActive.bind(this);
        this.toggleState = this.toggleState.bind(this);
   };
   
   toggleState() {
    this.setState({ 
        isOpened: !this.state.isOpened 
    });
  };
  
   setActive(id,value){
       this.props.set(id);
       this.setState({ 
          active_name: value,
          active_id:id
    });
   };
   
   unsetActive(id,value){
       this.props.unset();
       this.setState({ 
          active_name: '',
          active_id: ''
    });
   };
   
   
   
   isActive(value){
        return (value === this.state.active_id) ? 'bg-faded': '';
   }
    
    render(){

         let dropdownText;
         if (this.state.isOpened) {
          dropdownText = this.props.content.map((elem,index) => {
                return (
                       <Elem value = {elem.name} click = {this.setActive} 
                             key = {index} elemid = {elem.id} elemClass = {this.isActive(elem.id)} />
                    )
        });
        }
        
        return (     
                <div className = {this.state.isOpened ? 'menu-open' : 'menu'}>  
                    <span className = 'title' onClick = {this.toggleState}>{this.props.title}: </span>
                    <span>{this.state.active_name}</span>
                    <img src = {this.state.active_name ? 'img/delete.png' : ''} 
                         className = {this.state.active_name ? 'delete_img':''}
                         onClick = {this.unsetActive}
                    />
                    <ul>
                        {dropdownText}
                    </ul>
                </div>                
                )
     };
};

class Elem extends React.Component{
    constructor(props){
        super(props);
        this.showMe = this.showMe.bind(this);
    }
    
    showMe(){
        this.props.click(this.props.elemid,this.props.value);
    }
    render(){
        return(
            <li className = {this.props.elemClass}>
                <span onClick = {this.showMe} >
                    {this.props.value}
                </span>
            </li>
            )
    }
}

export default DropdownMenu;
