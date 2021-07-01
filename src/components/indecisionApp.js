import React from 'react'
import AddOption  from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal'

// stateless functional component

class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

    handleDeleteOptions= () => {    
      this.setState(() => ({options: [] }))
    } 
    
    HandleDeleteOption=(optionToRemove)=>{
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => optionToRemove !== option
        )
      }))
    }

   handelClearSelectedOption =() =>{
     this.setState(() => ({
       selectedOption: undefined
     }))

   }

    handlePick=()=> {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      this.setState(() => ({
        selectedOption: option
      }))
    }
    handleAddOption=(option)=> {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }
  
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  
    //***************LIFE CYCLE METHOD***************
    componentDidMount(){
      try{
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)
       
        if (options){
          this.setState(() => ({options}))
        }
      }catch (e) {
          
        //do nothing
      }
  
      
    }
    componentDidUpdate(prevProps, prevState){
      if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options)
      localStorage.setItem('options', json) 
      
    }
  }
    componentWillUnmount(){
      console.log('componentgetunmount')
    }
    //*************************************************** */
  
  
    render() {
      const subtitle = 'Put your life in the hands of a computer';
  
      return (
        <div>
          <Header subtitle={subtitle} />

          <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />

          <div className="widget">
          <Options
            options={this.state.options}
            handleDeleteOptions={this.handleDeleteOptions}
            HandleDeleteOption = {this.HandleDeleteOption}
          />
          <AddOption
            handleAddOption={this.handleAddOption}
          />
          </div>
          </div>
          <OptionModal
          selectedOption = {this.state.selectedOption}
          handelClearSelectedOption = {this.handelClearSelectedOption} />
        </div>
        
      );
    }
  }
  
 export default IndecisionApp
  

  

 


