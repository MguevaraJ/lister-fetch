import { createPool } from 'mysql'
import { black, red, green, bgGreen, bgRed } from 'colors'
import { promisify } from 'util'

const pool = createPool({
  'connetionLimit': '15',
  'host': process.env.MYSQL_URI,
  'user': process.env.MYSQL_USR,
  'password': process.env.MYSQL_PASS,
  'database': process.env.MYSQL_DB_NAME
  // "debug": "debug"
})

pool.getConnection((err, connect) => {
  if (err) console.log(bgRed(black(' MYSQL ')) + red(': ERROR_CONNECTION'))
  else console.log(bgGreen(black('  MYSQL ')) + green(': SUCCESSFULLY_CONNECTION'))
})

pool.query = promisify(pool.query)

module.exports = pool
