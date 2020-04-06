import React, { Component } from "react"

class App extends Component {
    state = {
        count: 0,
        isOn:false,
        x : null,
        y : null
    }

    componentDidMount() {
        document.title = `You have been clicked ${this.state.count} times`
        window.addEventListener('mousemove', this.handleMouseMove)

    }

    componentDidUpdate() {
        document.title = `You have been clicked ${this.state.count} times`
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove)
        console.log("componentWillUnmount")

    }

    incrementCount = () => {
        this.setState(prevState => ({
                count: prevState.count + 1
            }))
    }

    handleMouseMove = event => {
        this.setState ({
            x: event.pageX,
            y: event.pageY
        })

    }

    toggleLight = () => {
        this.setState(prevState => ({
            isOn: !prevState.isOn
        }))
    }

    render() {
        console.log("render")

        return ( 
            <React.Fragment>
                <h2> Toggle Light</h2>
                <div onClick={this.toggleLight}
                    style={{
                        height:'50px',
                        width:'50px',
                        background: this.state.isOn ? "yellow" : "grey"
                    }}
                    >
                </div>
            <button onClick={this.incrementCount}> I was clicked {this.state.count} times</button>

            <h2>Mouse Position</h2>
                <p>X Position: {this.state.x}</p>
                <p>Y Position: {this.state.y}</p>
            </React.Fragment>
            
        )
    }
    
}

export default App