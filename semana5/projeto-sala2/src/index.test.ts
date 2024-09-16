import { app } from './index'
import request from 'supertest'

describe('Testando api de blog ', () => {

    it('Deve criar um  novo texto', async () => {
        const response = await request(app).post('/texts').send({
            title: 'primeiro texto',
            content: 'conteudo',
            status: 'rascunho',
            author: 'eu'
        })
        expect(response.status).toBe(201)
        expect(response.body.message).toBe('Texto primeiro texto criado')
    })

    it('Deve listar os textos', async () => {
        const response = await request(app).get('/texts')

        expect(response.status).toBe(200)
        expect(response.body.length).toBeGreaterThanOrEqual(1)
    })

})

