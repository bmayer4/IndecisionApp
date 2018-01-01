import React from 'react';

export default class AddOption extends React.Component {
    
        state = {
            error: undefined
        }
    
        handleAddOption = (e) => {  //now we have two handleAddOptions, this one belongs to this class
            e.preventDefault();
            const option = e.target.elements.option.value.trim();
            const error = this.props.handleAddOption(option);   //this one was passed down from the parent

                this.setState(() => ({
                    error: error
                }));
            
            if (!error) {
            e.target.elements.option.value = '';
            }
        };
    
        render() {
            return (
                <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option"/>
                    <button className="button">Submit</button>
                </form>
                </div>
            );
        }
    }








//-------- this was class before we used new babel class syntax
    // export default class AddOption extends React.Component {
    //     constructor(props) {
    //         super(props);
    
    //         this.handleAddOption = this.handleAddOption.bind(this);  //this is for the handleAddOption from this class
    //         this.state = {
    //             error: undefined
    //         }
    //     }
    
    //     handleAddOption(e) {  //now we have two handleAddOptions, this one belongs to this class
    //         e.preventDefault();
    //         const option = e.target.elements.option.value.trim();
    //         const error = this.props.handleAddOption(option);   //this one was passed down from the parent
    
    //             // this.setState(() => {
    //             //     return {
    //             //         error: error
    //             //     };
    //             // });
    
    //             this.setState(() => ({
    //                 error: error
    //             }));
            
    //         if (!error) {
    //         e.target.elements.option.value = '';
    //         }
    //     }
    
    //     render() {
    //         return (
    //             <div>
    //             {this.state.error && <p>{this.state.error}</p>}
    //             <form onSubmit={this.handleAddOption}>
    //                 <input type="text" name="option"/>
    //                 <button>Submit</button>
    //             </form>
    //             </div>
    //         );
    //     }
    // }