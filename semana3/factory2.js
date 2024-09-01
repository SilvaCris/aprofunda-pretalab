


class Post {
    constructor(title, content, type) {
        this.title = title
        this.content = content
        this.type = type
    }

    getDetails(){
        return `Foi criada um post do tipo: ${this.type}, com o titulo ${this.title} e o conteudo ${this.content}`
    }
}

class Article {
        constructor (title, content){
            return new Post(title, content, 'artigo')
        }
}
class Tutorial {
    constructor (title, content){
        return new Post(title, content, 'tutorial')
    }

}

class News {
    constructor (title, content){
        return new Post(title, content, 'noticia')
    }

}

class PostFactory {
    static createPost (type, title, content){
        switch(type) {
            case 'artigo':
                return new Article(title, content)
            case 'tutorial':
                return new Tutorial(title, content)
            case 'noticia':
                return new News(title, content)
                default:
                    throw new Error ('Tipo de post inválido')
        }
    }
}

module.exports = PostFactory