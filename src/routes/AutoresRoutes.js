import express from "express";
import AutorController from "../controllers/AutorController.js";

const router = express.Router();

router
    .get("/autores", AutorController.findAll)
    .get("/autores/:id", AutorController.findById)
    .post("/autores", AutorController.insert)
    .put("/autores/:id", AutorController.update)
    .delete("/autores/:id", AutorController.deleteAutor);

export default router;