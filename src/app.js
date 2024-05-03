import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


//limiting  traffic while filling forms
app.use(express.json({limit: "16kb"}))

// getting data from url
app.use(express.urlencoded({extended:true, limit: '16kb'}))

// storing pdf , files  locally
app.use(express.static('public'))

//cookieparser use so in future i can use CRUD operations

app.use(cookieParser())



app.listen()


export  {app}