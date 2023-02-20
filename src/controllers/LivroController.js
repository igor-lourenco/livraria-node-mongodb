import livros from "../models/Livro.js";

class LivroController {

    static findAll = (req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros)=>{ // busca os livros que estão no banco
            res.status(200).json(livros); // retorna lista de livros
    
        });
    }

    static findById = (req, res) => {
        const id = req.params.id;

        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {

            if(err){
                res.status(404).send({message: `${err.message} id do livro não encontrado!`});
            }else{
                res.status(200).send(livros);
            }
        });
    }

    static insert = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar livro!`});
            }else{
                res.status(201).send(livro);
            }
        });
    }

    static update = (req, res) => {
        const id = req.params.id;
        
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200). send({message: "Livro foi atualizado com sucesso!"})
            }else{
                res.status(500).send({message: `${err.message} - Falha ao atualizar livro!`});
            }
        });
    }

    static deleteLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Livro deletado com sucesso!"});
            }else{
                res.status(400).send({message: `${err.message} - Falha ao deletar livro!`});
            }
        })
    }

    static findLivroByEditora = (req, res) => {
        const editora = req.query.editora;

        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        });
    }
}

export default LivroController;