import React from 'react';
import AddOption from './AddOption';  //default export, so not in curly braces 
import Header from './Header'; //we can leave off .js
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';


export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }


    handleDeleteOptions = () => {  
        // this.setState(() => {
        //     return {
        //         options: []
        //     };
        // });

         //shorter syntax than above
        //why?
        //const num = () => 5 + 4;  //9 
        //const num = () => {}; // //with arrow functions it will treat these brackets as function body, to return object..wrap in parenthesis

        this.setState(() => ({
            options: []
        }));

    };

    handleDeleteOption = (option) => {
        console.log('hdo', option);
        if (this.state.options.includes(option)) {

        this.setState((prevState) => ({
            options: prevState.options.filter((op) => {
                return op !== option
            }) 
        }));
    }

    };

    
    handleAddOption = (option)  => {

        if (!option) {
            return 'Enter valid value to add item'; //will be returned back to the AddOption component
        } else if (this.state.options.includes(option)) {
            return 'This option already exists';
        }

        //old syntax
        // this.setState((prevState) => {
        //     return {    //concat does not change existing arrays, but returns a new one
        //         options: prevState.options.push(option)   //we don't want to manipulate the state or prevState here, by using push
        //     };
        // });

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
        
    };

    handlePick = () => {
        let ran = Math.floor((Math.random() * this.state.options.length));
        let pick = this.state.options[ran];
        this.setState(() => ({
            selectedOption: pick
        }));
    };

    handleClearSelectedOption = () => {  

        this.setState(() => ({
            selectedOption: undefined
        }));

    };

    //lifecycle method, only available on classes
    componentDidMount() {

        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            
            if (options) {
            this.setState(() => ({
                options: options
            }));
            }
        } catch (e) {
            console.log('error!', e);
        }
        
    }

    //fires after the state values change, or the prop values change
    //fires when component is rerendered
    componentDidUpdate(prevProps, prevState) {
        console.log('prev', prevState.options.length);  //0
        console.log('curr', this.state.options.length);  //1   each goes up by 1 after add option
        if (prevState.options.length !== this.state.options.length) {  //old state vs current state
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    //fires before component goes away 
    componentWillUnmount() {
        console.log('componentWillUpdate');  //may not be used much
    }

    render() {
        const subtitle = 'Put your hands in the life of a computer';

        return (
            <div>
            <Header subtitle={subtitle}/>
            <div className="container">
            <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
            <div className="widget">
            <Options 
            o={this.state.options} 
            handleDeleteOptions={this.handleDeleteOptions}
            handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
            </div>
            </div>
            <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
            />
            </div>
        );
    }
}








//leftover code, some notes

// import isSenior, { isAdult, canDrink } from './person.js';

// console.log(isAdult(19));
// console.log(canDrink(19));
// console.log(isSenior(67));


//const validator = require('validator');
// import validator from 'validator';    //es6 syntax
// console.log(validator.isEmail('test@yahoo.com'));

//react component is a es6 class, make class for component
//React.Component is a class itself
//you must define render for classes