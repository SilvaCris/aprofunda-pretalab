import express, { Request, Response } from "express";

export const app = express()




app.get('/', (req:Request, res:Response)=> {
    res.send('Hello World Girls , Typescript + Express')
})


if(require.main === module){
    const PORT = 3333
    app.listen(PORT, () => {
        console.log(`Servidor disponivel em http://localhost:${PORT}`)
    })
}
