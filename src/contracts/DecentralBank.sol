pragma solidity ^0.5.0;

import "./RWD.sol";
import "./Tether.sol";

contract DecentralBank {
  string public name = 'Decentral Bank';
  address public owner;
  Tether public tether;
  RWD public rwd;
  address[] public stakers;
  mapping(address => uint) public stakingBalance;
  mapping(address => bool) public hasStaked;
  mapping(address => bool) public isStaked;
  constructor(RWD _rwd,Tether _tether) public {
        rwd = _rwd;
        tether = _tether;
        owner = msg.sender;
  }
  function depositTokens(uint amount) public {
    // require staking amount to be greater than 0
    require(amount>0,'amount cannot be 0');
    // Transfer tether tokens to this contract address for staking
    tether.transferFrom(msg.sender, address(this), amount);
    // Updating staking Balance
    stakingBalance[msg.sender] += amount;

    if(!hasStaked[msg.sender]){
      stakers.push(msg.sender);
    }

    // Update Staking Balance
      isStaked[msg.sender] = true;
      hasStaked[msg.sender] = true;
  }
  function issueTokens() public {
    require(msg.sender == owner, "caller must be the owner");
    for(uint i = 0 ; i < stakers.length ; i++){
      address recipient = stakers[i];
      uint balance = stakingBalance[recipient]/10;
      if(balance > 0){
        rwd.transfer(recipient, balance);
      }
    }
  }
  function unstakeTokens() public {
    uint balance = stakingBalance[msg.sender];
    // require the amount to be greater than 0
    require(balance > 0, 'staking balance cannot be equal to 0');
    // transfer the tokens to the specified contract address from our bank
    tether.transfer(msg.sender,balance);

    // reset staking balance
    stakingBalance[msg.sender] = 0;
    // update staking status
    isStaked[msg.sender] = false;

  }
}
