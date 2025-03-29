 const xmpp = require('simple-xmpp')
 
 xmpp.on('online', data => {
   console.log('You are online')
   console.log(`connected as ${data.jid.user}`)
 })
 
 xmpp.on('error', error => console.log(`something went wrong! ${error}`))
 
 xmpp.on('chat', (from, message) =>
   console.log(`Got a message ${message} from ${from}`)
 )
 
 xmpp.connect({
   jid: 'admin@localhost',
   password: 'password',
   host: 'localhost',
   port: 5222
 })
 
 function send (){
     setTimeout(send,5000 )
     xmpp.send("omar@localhost",`hi ${Date.now()}`)
 }
