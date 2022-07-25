import React, { Component } from 'react'
import Airdrop from './Airdrop'
import "./Main.css"

class Main extends Component {
  render() {
    return (
      <div>
        <table className="table" id="st" style={{ margintop: '250px' }}>
          <thead>
            <tr style={{ color: 'white' }} id="tab">
              <th>Staking Balance</th>
              <th>Reward Balance</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ color: 'white', fontWeight: "bold" }} id="Help">
              <td>METH : {window.web3.utils.fromWei(this.props.stakingBalance, 'Ether')}</td>
              <td>RWD : {window.web3.utils.fromWei(this.props.rwdBalance, 'Ether')}</td>
            </tr>
          </tbody>
        </table>
        <div className="rectangle">
          <text className="fonts">Stake Tokens</text>
          <text className="font-b">Balance : {window.web3.utils.fromWei(this.props.tetherBalance, 'Ether')} mEth</text>
          <div className="form-group">
            <input
              ref={(input) => { this.input = input }}
              type="eth" className="form-control1" id="exampleFormControlInput1" placeholder="ENTER THE NUMBER OF ETHER" />
            <img src='https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png' height="90px" alt=""></img>

            <button
              onClick={(event) => {
                event.preventDefault()
                let amount
                amount = this.input.value.toString()
                amount = window.web3.utils.toWei(amount, 'Ether')
                this.props.depositTokens(amount)
              }}
              type="submit" className="btn btn-primary btn-lg btn-block" id="deposit">Deposit</button>
            <button
              onClick={(event) => {
                event.preventDefault()
                this.props.unstakeTokens()
              }}
              type="button" className="btn btn-primary btn-lg btn-block" id="withdraw">Withdraw</button>
            <div>
            <text className="air">Airdrop 
            </text>
            <Airdrop stakingBalance = {this.props.stakingBalance} issueTokens={this.props.issueTokens}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Main