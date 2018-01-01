

class VisibilityToggle extends React.Component {
    constructor(prop) {
        super(prop);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: true
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
            return (
                <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {
                    this.state.visibility && 
                    <p>I will toggle this awesome test</p>
                }
                </div>
            );
        
    }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



