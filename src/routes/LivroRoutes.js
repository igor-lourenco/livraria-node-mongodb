import express from "express";
import LivroController from "../controllers/LivroController.js";

const router = express.Router();

router
    .get("/livros", LivroController.findAll)
    .get("/livros/busca", LivroController.findLivroByEditora)
    .get("/livros/:id", LivroController.findById)
    .post("/livros", LivroController.insert)
    .put("/livros/:id", LivroController.update)
    .delete("/livros/:id", LivroController.deleteLivro);

export default router;