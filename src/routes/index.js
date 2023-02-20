import express from "express";
import livroRoutes from "./LivroRoutes.js";
import autoresRoutes from "./AutoresRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Curso de node"});
    });

    app.use(
        express.json(),
        livroRoutes,
        autoresRoutes
    );
}

export default routes;