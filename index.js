const mineflayer = require('mineflayer')

function createBot() {
  const bot = mineflayer.createBot({
    host: 'sinhtonminecraft100.aternos.me',
    port: 27720,
    username: 'AFK_Bot',
    auth: 'offline',
    version: '1.21.11'
  })

  bot.on('login', () => console.log('Bot logged in'))
  bot.on('spawn', () => console.log('Bot spawned'))

  bot.on('kicked', (reason) => {
    console.log('Kicked:', reason)
  })

  bot.on('error', (err) => {
    console.log('Error:', err)
  })

  setInterval(() => {
    const actions = ['jump', 'forward', 'back']
    const action = actions[Math.floor(Math.random() * actions.length)]

    bot.setControlState(action, true)
    setTimeout(() => bot.setControlState(action, false), 2000)
  }, 30000)

  bot.on('end', () => {
    console.log('Disconnected → reconnect')
    setTimeout(createBot, 10000)
  })
}

createBot()
