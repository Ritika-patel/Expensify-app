
class VisiblilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggleVisiblility = this.handleToggleVisiblility.bind(this);
        this.state = {
            visibility: true
        }
    }
    
    handleToggleVisiblility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render(){
        return(
            <div>
                <h1>Visiblility</h1>
                <button onClick={this.handleToggleVisiblility}>
                {this.state.visibility ? 'Hide details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                        <p>Here are some details</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisiblilityToggle />, document.getElementById('app'));






// const appRoot = document.getElementById('app');

// let visibility = false;

// const toggleVisiblility =() => {
//     visibility = !visibility
//     render()
// }

// const render = () => {
//     const jsx = (
//         <div>
//         <h1>Visiblility Toggle</h1>
//         <button onClick={toggleVisiblility}>{visibility? 'Hide details' : 'Show details'}</button>
//          {visibility && (<div><p>these are some details</p></div>)}
//         </div>
//     )
//     ReactDOM.render(jsx, document.getElementById('app'));
// }
// render()