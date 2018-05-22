var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer) {
	deployer.deploy(Voting, 1000, web3.toWei(0.000000000000000001, 'ether'), ['zain', 'nick', 'salman'], {gas: 6700000});
}

// 0x7a61696e00000000000000000000000000000000000000000000000000000000 - zain
// 0x6e69636b00000000000000000000000000000000000000000000000000000000 - nick
// 0x73616c6d616e0000000000000000000000000000000000000000000000000000 - salman