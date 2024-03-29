import React, { Component } from "react";
import Navbar from "./Navbar";
import Web3 from 'web3';
import Tether from '../abis/Tether.json'
import RWD from '../abis/RWD.json'
import DecentralBank from '../abis/DecentralBank.json'
import Main from './Main.js'
import "./App.css"
import ParticleSettings from "./ParticleSettings";
// import Airdrop from "./Airdrop";
class App extends Component {
    async componentWillMount() {
        await this.loadWeb3()
        await this.loadBlockchainData()
    }
    async loadWeb3() {
        if (window.ethereum) {
            window.web3 = new Web3(window.ethereum)
            await window.ethereum.enable()
        } else if (window.web3) {
            window.web3 = new Web3(window.web3.currentProvider)
        } else {
            window.alert('No ethereum browser detected! You can check out MetaMask!')
        }
    }
    async loadBlockchainData() {
        const web3 = await window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({ account: accounts[0] })
        const networkId = await web3.eth.net.getId()
        // Load Tether Contract
        const tetherData = Tether.networks[networkId]
        if (tetherData) {
            const tether = new web3.eth.Contract(Tether.abi, tetherData.address)
            this.setState({ tether })

            let tetherBalance = await tether.methods.balanceof(this.state.account).call()
            this.setState({ tetherBalance: tetherBalance.toString() })
            console.log({ balance: tetherBalance })
        } else {
            window.alert('Error! Tether contract not deployed - no detected network!')
        }
        const rwdData = RWD.networks[networkId]
        if (rwdData) {
            const rwd = new web3.eth.Contract(RWD.abi, rwdData.address)
            this.setState({ rwd })

            let rwdBalance = await rwd.methods.balanceof(this.state.account).call()
            this.setState({ rwdBalance: rwdBalance.toString() })
            console.log({ balance: rwdBalance })
        } else {
            window.alert('Error! RWD contract not deployed - no detected network!')
        }
        const decentralBankData = DecentralBank.networks[networkId]
        if (decentralBankData) {
            const decentralBank = new web3.eth.Contract(DecentralBank.abi, decentralBankData.address)
            this.setState({ decentralBank })

            let stakingBalance = await decentralBank.methods.stakingBalance(this.state.account).call()
            this.setState({ stakingBalance: stakingBalance.toString() })
            console.log({ balance: stakingBalance })
        } else {
            window.alert('Error! Decentral Bank contract not deployed - no detected network!')
        }
            this.setState({ loading: false })
    }

    // two functions one that stakes and one that unstakes --
    // leverage our decentralbank contract -- deposit tokens and unstaking
    // All of this is for this is for the staking
    // depositTokens transferFrom ......
    // function approve transaction hash -----
    // STAKING FUNCTION ?? >> decentralBank.depositTokens(send transactionHash =>)

    // deposit function
    depositTokens = (amount) => {
        this.setState({loading: true})
        this.state.tether.methods.approve(this.state.decentralBank._address, amount).send({from: this.state.account}).on('transactionHash', (hash) => {
            this.state.decentralBank.methods.depositTokens(amount).send({from: this.state.account}).on('transactionHash', (hash) => {
                this.setState({loading: false})
            })
        })
    }
    //unstaking Function
    unstakeTokens = () => {
        this.setState({loading: true})
        this.state.decentralBank.methods.unstakeTokens().send({from: this.state.account}).on('transactionHash',(hash) => {
            this.setState({loading: false})
        })
    }
    // issue tokens
    issueTokens = () => {
        this.setState({loading: true})
        this.state.decentralBank.methods.issueTokens().send({from: this.state.account}).on('transactionHash',(hash) => {
            this.setState({loading: false})
        })
    }
    constructor(props) {
        super(props)
        this.state = {
            account: '0x0',
            tether: {},
            rwd: {},
            decentralBank: {},
            tetherBalance: '0',
            rwdBalance: '0',
            stakingBalance: '0',
            loading: true
        }
    }
    render() {
        let content
//         {
            this.state.loading ? content =
                <p id='loader' className="text-center" style={{ margin: '30px' }}>
                    LOADING PLEASE...</p> : content = <Main 
                    tetherBalance = {this.state.tetherBalance}
                    rwdBalance = {this.state.rwdBalance}
                    stakingBalance = {this.state.stakingBalance}
                    depositTokens={this.depositTokens}
                    unstakeTokens={this.unstakeTokens}
                    issueTokens={this.issueTokens}
                    />
//         }
        return (
            <div className="image">
            <div style={{position:'absolute'}}>
                    <ParticleSettings/>
                </div>
                <Navbar account={this.state.account} />
                <div className="container-fluid mt-5 row">
                    <main role="main" className='col-lg-12 ml-auto mr-auto' style={{ maxWidth: '600px', minHeight: '100vm' }}>
                        <div>
                            {content}
                        </div>
                    </main>
                </div>
            </div>

        )
    }
}
export default App;
