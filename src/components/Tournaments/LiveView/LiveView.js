import React from 'react'
import LoadingView from './subcomponents/LoadingView'

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
            <div className="Live-view-wrap">
                <h1>HEMA Tournament LiveView</h1>
                <p>LiveView allows you to view tournaments as they happen. Below are the scores of participants being judged now.</p>
                <div className="Live-view-flex-wrap">
                    <div className="Live-view-box Live-view-box-blue">
                        <h3 className="Live-view-no-mbot">{this.state.data.data.blue.name}</h3>
                        <h4 className="Live-view-no-mtop">{this.state.data.data.blue.club}</h4>
                        <p>SCORE: {this.state.data.data.blue.score}</p>
                        <p>PENALTIES: {this.state.data.data.blue.penalties}</p>
                    </div>
                    <div className="Live-view-box Live-view-box-red">
                        <h3 className="Live-view-no-mbot">{this.state.data.data.red.name}</h3>
                        <h4 className="Live-view-no-mtop">{this.state.data.data.red.club}</h4>
                        <p>SCORE: {this.state.data.data.red.score}</p>
                        <p>PENALTIES: {this.state.data.data.red.penalties}</p>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return(<LoadingView/>)
    }
    }
}

export default LiveView;