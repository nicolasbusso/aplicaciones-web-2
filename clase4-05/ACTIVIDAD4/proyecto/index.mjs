import express from "express";

const app = express();
const PORT = 3001;

// Middleware
const verificarCodigo = (req, res, next) => {
    const codigo = req.query.codigo;

    const codigoCorrecto = "1234";

    if (codigo === codigoCorrecto) {
        next();
    } else {
        return res.status(400).json({
            mensaje: "El código es incorrecto"
        });
    }
};

//  Ruta GET /codigo
app.get("/codigo", verificarCodigo, (req, res) => {
    res.status(200).json({
        mensaje: "El código es correcto"
    });
});

// levantar servidor
app.listen(PORT, () => {
    console.log(Servidor proyecto en http://localhost:${PORT});
});