import React from 'react';

class DropdownMenu extends React.Component{
       constructor(props) {
        super(props);
        this.state = {
            isOpened: false,
            active:''
        };
        
        this.setActive = this.setActive.bind(this);
        this.isActive = this.isActive.bind(this);
        this.toggleState = this.toggleState.bind(this);
   };
   
   toggleState() {
    this.setState({ 
        isOpened: !this.state.isOpened 
    });
  }
  
   setActive(value){
       this.props.set(value);
       this.setState({ 
          active: value 
    });
   }
   
   isActive(value){  
        return (value === this.state.active) ? 'bg-faded': '';
   }
    
    render(){

         let dropdownContent;
         if (this.state.isOpened) {
            dropdownContent = this.props.content.map((elem,index) => {
                return (
                       <Elem value = {elem.name} click = {this.setActive}  key = {index}  elemClass = {this.isActive(elem.name)} />
                      );
        });
        }
        
        return ( <div className = {this.props.classElem}>    
                    <div className = {this.state.isOpened ? 'menu-open' : 'menu'}>  
                        <span  className = 'title' onClick = {this.toggleState}> {this.props.title}: </span>
                        <span> {this.props.currentname} </span>
                        <ul>
                            {dropdownContent}
                        </ul>
                    </div>
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
        this.props.click(this.props.value);
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
