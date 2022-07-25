const DecentralBank = artifacts.require("DecentralBank")

module.exports = async function(callback) {
	let decentralBank = await DecentralBank.deployed()
	await decentralBank.issueTokens()
	console.log("Tokens issued!")
	callback()
}