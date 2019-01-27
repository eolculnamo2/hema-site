import React from 'react'

class LiveView extends React.Component {
    constructor() {
        super()
        this.state = {
            data: {},
            ready: true
        }
        this.socket = undefined;
    }
    componentDidMount(){
        if(io) {
        this.socket = io()
        this.socket.on('score', data => this.setState({data, ready: true},()=>console.log(this.state.data)) )

        } else {
            alert("IO connection error. Contact site admin.")
        }
    }
    render() {
        if(this.state.ready && this.state.data.data) {
        return(
            <div>
                <h1>HEMA Tournament LiveView</h1>
                <p>LiveView allows you to view tournaments as they happen. Below are the scores of participants being judged now.</p>

                <h3>{this.state.data.data.blue.name}</h3>
                <h4>CLUB: {this.state.data.data.blue.club}</h4>
                <p>SCORE: {this.state.data.data.blue.score}</p>
                <p>PENALTIES: {this.state.data.data.blue.penalties}</p>

                <h3>{this.state.data.data.red.name}</h3>
                <h4>CLUB: {this.state.data.data.red.club}</h4>
                <p>SCORE: {this.state.data.data.red.score}</p>
                <p>PENALTIES: {this.state.data.data.red.penalties}</p>
            </div>
        )
    }
    else {
        return(<div>Loading...</div>)
    }
    }
}

export default LiveView;