// class Options extends React.Component {

//     //this binding gets broken when we setup a method to be the callback for an event handler
//     render() {  //es6 class methods are bound to the class instance, which is why this work
//         return (
//             <div>
//             <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.o.map((opt) => {
//                     return <Option key={opt} optionText={opt}/>
//                 })
//             }
//             </div>
//         );
//     }
// }


import React from 'react'; 
import Option from './Option'; 

const Options = (props) => (
        <div>  
        <div className="widget-header">
        <h3 className="widget-header__title">
        Your Options
        </h3>
        <button 
        className="button button--link"
        onClick={props.handleDeleteOptions}
        >
        Remove All
        </button>
        </div>

        {props.o.length === 0 && <p className="widget__message">Please add an option to get started</p>}
        {
            props.o.map((opt, index) => {
                return (
                    <Option 
                    key={opt} 
                    optionText={opt}
                    count = {index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                    />
                );
            })
        }
        </div>
    );

export default Options;