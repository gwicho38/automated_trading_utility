//requires
// const coinbase = require('coinbase-pro');
const config = require('./configuration')
const prompt = require('prompt-sync')({sigint: true}) 

//configuration
/*
const key = config.get('GDAX_API_KEY')
const secret = config.get('GDAX_API_SECRET')
const passphrase = config.get('GDAX_API_PASSPHRASE')
const apiUrl = config.get('GDAX_API_URL')
*/

//creating a public client
console.log("Hello World.")

var i = 1
while (i != 0)
{
    i = prompt('Enter 0 to quit: \n')
    console.log(`You entered: ${Number(i)}`)
}