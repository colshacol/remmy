import path from 'path'

const configPath = path.resolve(process.cwd(), 'sample/remmy/config.js')

export const config = require(configPath)
