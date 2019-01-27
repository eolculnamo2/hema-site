import React from 'react'
import ButtonsSection from './ScoreViewComponents/ButtonsSection'
import FighterDetails from './ScoreViewComponents/FighterDetails';

class ScoreView extends React.Component {
    constructor(){
        super()
        this.state = {
            blue: {
                name: "Joe Smith",
                club: "Sword School NYC",
                score: 0,
                penalties: 0
            },
            red: {
                name: "John Peters",
                club: "Meyer Academy",
                score: 0,
                penalties: 0
            }
        }
        this.socket = undefined;
        this.changeScore = this.changeScore.bind(this)
        this.changePenalties = this.changePenalties.bind(this)
    }
    componentDidMount(){
        if(io) {
            this.socket = io()
            this.socket.on('score', data => console.log(data))
        }    else {
            alert("IO failed to connect")
        }
    }
    changeScore(team, action) {
        let info = this.state[team]
        info.score += action
        team === "blue" ? this.setState({blue: info}, ()=> this.emitData()) 
                        : this.setState({red: info}, ()=> this.emitData())
    }

    emitData() {
        this.socket.emit('score', {
            data: this.state
        })
    }

    changePenalties(team, action) {
        let info = this.state[team]
        if(info.penalties + action >= 0) {
            info.penalties += action
            team === "blue" ? this.setState({blue: info}, this.emitData()) 
                            : this.setState({red: info}, this.emitData())
        }
    }

    render(){
        return(
            <div>
                <ButtonsSection 
                    changeScore={this.changeScore}
                    changePenalty={this.changePenalties}
                    />
                <div className="c-Judges-fighters-details-main-wrap">
                    <FighterDetails 
                        name={this.state.blue.name}
                        club={this.state.blue.club}
                        score={this.state.blue.score}
                        penalties={this.state.blue.penalties}
                        team="blue"
                        />
                    <FighterDetails 
                        name={this.state.red.name}
                        club={this.state.red.club}
                        score={this.state.red.score}
                        penalties={this.state.red.penalties}
                        team="red"
                        />
                </div>
            </div>
        )
    }
}

export default ScoreView