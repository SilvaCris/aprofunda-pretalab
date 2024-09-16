const UserServices = require('../services/userServices');

const createUser = (req, res) => {
  const { name, role } = req.body
  const newUser = UserServices.createUser({ name, role })
  res.status(201).json({ message: `User ${newUser.name} criado com sucesso` })
}

const listUsers = (req, res) => {
  const users = UserServices.getAllUsers()
  res.json(users)
}

const deleteUsers = (req, res) => {
  const { id } = req.params
  const userDeleted = UserServices.deleteUser(id)
  if(!userDeleted){
    return res.status(404).json({ message: `usuario com o ${id} não encontrado` })
  }
  res.json(userDeleted)
}

module.exports = {
  createUser,
  listUsers,
  deleteUsers
}