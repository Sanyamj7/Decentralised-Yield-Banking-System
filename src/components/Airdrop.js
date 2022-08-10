import React, { Component } from 'react'
import "./Main.css"
class Airdrop extends Component {
    constructor(){
        super()
        this.state = {
            time: {},
            seconds: 20
        };
        this.timer = 0;
        this.startTimer = this.startTimer.bind(this);
        this.countDown = this.countDown.bind(this);
    }
    startTimer(){
        if(this.timer === 0){
            this.timer = setInterval(this.countDown, 1000)
        }
    }

    countDown(){
        let seconds = this.state.seconds - 1
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds
        })
        if(seconds === 0){
            clearInterval(this.timer)
        }
    }
    secondsToTime(secs){
        let hours, minutes, seconds
        hours = Math.floor(secs / (60 * 60))
        let divisor_for_minutes = secs % (60 * 60)
        minutes = Math.floor(divisor_for_minutes / 60)
        let divisor_for_seconds = divisor_for_minutes % 60
        seconds = Math.ceil(divisor_for_seconds)
        let obj = {
            'h': hours,
            'm': minutes,
            's': seconds
        }
        return obj
    }
    
    componentDidMount(){
        let timeleftvar = this.secondsToTime(this.state.seconds)
        this.setState({time : timeleftvar})
    }
    airdropTokens() {
        let stakingB = this.props.stakingBalance
        if(stakingB >= '5000000000000000'){
            this.startTimer()
            if(this.state.time.s === 0){
                this.props.issueTokens()
            }
        }
    }
    render() {
        return (
            <div style={{color: 'black'}} className="air1">
          {this.airdropTokens()}
        {/* {this.startTimer()} */}
        {this.state.time.m} : {this.state.time.s}
      </div>
    )
  }
}

export default Airdrop
