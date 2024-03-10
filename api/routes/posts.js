const express = require("express");
const Posts = require("../models/Posts");

const router = express.Router();

//comentario
router.get("/", (req, res) => {
  Posts.find()
    .exec()
    .then((x) => res.status(200).send(x));
});

router.post("/", (req, res) => {
  Posts.create(req.body).then((x) => res.status(201).send(x));
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const update = req.body;

  // Asegúrate de pasar las opciones { new: true } para obtener el documento actualizado
  Posts.findOneAndUpdate({ busPlate: id }, update, { new: true })
    .then((updatedPost) => {
      if (!updatedPost) {
        // Si no se encuentra el documento, envía un error 404 (Not Found)
        return res.status(404).send({ message: "Documento no encontrado." });
      }
      // Si el documento se actualizó correctamente, envía un código de estado 200 (OK) junto con el documento actualizado
      res.status(200).json(updatedPost);
    })
    .catch((error) => {
      // Si hay algún error, envía un código de estado 500 (Internal Server Error) junto con el mensaje de error
      res.status(500).send({ message: "Error interno del servidor.", error });
    });
});

module.exports = router;
