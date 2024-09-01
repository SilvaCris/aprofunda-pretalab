



class DatabaseConnection {
    constructor(){
        if (!DatabaseConnection.instance){
            DatabaseConnection.instance = this
            this.connection = this.createConnection()
        }
        return DatabaseConnection.instance
    }

    createConnection(){
        //simular conexao
        console.log('conectado ao banco de dados')
        return{
            connected: true,
            connectionId: Math.random().toString(36).substring(2,9)
        }
    }

 getConnection(){
    return this.connection
 }

}

module.exports = new DatabaseConnection