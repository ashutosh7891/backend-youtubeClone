import dotenv from 'dotenv'
import connectDB from './db/index.js'


// config dotenv

dotenv.config({path:'./env'})

connectDB()








/*

import express from 'express'
import { DB_NAME } from './constants'

const app = express()

( async () => {
    try {
        await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', () => {
            console.log('ERROR:', error)
            throw error
        })
        app.listen(process.env.PORT, () => {
            console.log(`app is listening on PORT:  ${process.env.PORT}`)
        })

    } catch (error) {
        console.error('ERROR', error)
        throw error
    }
})() 
*/