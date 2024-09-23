import express from 'express';
import { configureDependencies } from '../infrastructure/utils/config';

export const app = express();
app.use(express.json());

const {petController} = configureDependencies()

app.post('/pets', (req,res) => petController.create(req, res))
app.get('/pets', (req, res) => petController.listAll(req, res));
app.delete('/pet/:id', (req, res) => petController.delete(req, res));
app.patch('/pet/:id', (req, res) => petController.update(req, res));



if (require.main === module) {
  const PORT = 3333;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  })
}