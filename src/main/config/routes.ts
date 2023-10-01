/* eslint-disable node/no-path-concat */
/* eslint-disable no-unused-expressions */
import { Express, Router } from 'express'
import { Pool } from 'mysql'
import { readdirSync } from 'fs'

export default (app: Express): void => {
  const router = Router()
  app.use('/api', router)
  readdirSync(`${__dirname}/../routes`).map(async file => {
    if (!file.includes('.test.')) {
      (await import(`../routes/${file}`)).default(router)
    }
  })
}
