import { app } from './index'
import request from 'supertest'

describe('Testando a rota GET', () =>{

    it('Deve responder uma mensagem de hello world', async () => {
        const res = await request(app).get('/')
            expect(res.status).toBe(200)
            expect(res.text).toBe('Hello World Girls , Typescript + Express')
})

    })
    
