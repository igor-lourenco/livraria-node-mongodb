import Autor from "../models/Autor.js";

class AutorController {

    static findAll = (req, res) => {
        Autor.find((err, Autor)=>{ // busca os livros que estão no banco
            res.status(200).json(Autor); // retorna lista de livros
    
        });
    }

    static findById = (req, res) => {
        const id = req.params.id;

        Autor.findById(id, (err, Autor) => {

            if(err){
                res.status(404).send({message: `${err.message} id do autor não encontrado!`});
            }else{
                res.status(200).send(Autor);
            }
        });
    }

    static insert = (req, res) => {
        let autor = new Autor(req.body);

        autor.save((err) => {
            if(err){
                res.status(500).send({message: `${err.message} - Falha ao cadastrar autor!`});
            }else{
                res.status(201).send(autor);
            }
        });
    }

    static update = (req, res) => {
        const id = req.params.id;
        
        Autor.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err){
                res.status(200). send({message: "Autor foi atualizado com sucesso!"})
            }else{
                res.status(500).send({message: `${err.message} - Falha ao atualizar autor!`});
            }
        });
    }

    static deleteAutor = (req, res) => {
        const id = req.params.id;

        Autor.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: "Autor deletado com sucesso!"});
            }else{
                res.status(400).send({message: `${err.message} - Falha ao deletar autor!`});
            }
        })
    }
}

export default AutorController;