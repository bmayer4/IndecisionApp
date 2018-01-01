
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleIncrease = this.handleIncrease.bind(this);
        this.handleDecrease = this.handleDecrease.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    }

    componentDidMount() {      
        const count = localStorage.getItem('count');
        const countAsNum = parseInt(count, 10);
        if (!isNaN(countAsNum)) {   
        this.setState(() => ({
            count: countAsNum
        }));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            const count = this.state.count
            localStorage.setItem('count', count);
        }
     }

    handleIncrease() {
        this.setState((prevState) => {
            return {
              count: prevState.count + 1  //this is like an update, but we don't need to update all properties
            };
        });
    }

    handleDecrease() {
        if (this.state.count > 0) {
        this.setState((prevState) => {
            return {
            count: prevState.count - 1
            };
        });
        }
    }

    handleReset() {
        this.setState(() => {
            return {
            count: 0
            };
        });
    }

    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleIncrease}>+1</button>
            <button onClick={this.handleDecrease}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app'));
