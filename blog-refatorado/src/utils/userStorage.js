class UserStorage {
    constructor() {
      if (!UserStorage.instance) {
        this.users = []
        UserStorage.instance = this
      }
      return UserStorage.instance
    }
  
    add(user) {
      this.users.push(user)
    }
  
    getAll() {
      return this.users
    }

    deleteById(id) {
      return this.users.filter(user => user.id !== id)
  }
  }
  
  module.exports = new UserStorage()



