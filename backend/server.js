const express = require("express");

const app = express();
const PORT = 3000;

app.get("/componentes", (req, res) => {

    const componentes = [
        { id: 1, nombre: "Ryzen 7 5800X", tipo: "CPU" },
        { id: 2, nombre: "RTX 3060", tipo: "GPU" },
        { id: 3, nombre: "ASUS B550M", tipo: "Motherboard" },
        { id: 4, nombre: "Gabinete ATX", tipo: "Gabinete" }
    ];

    const tipo = req.query.tipo;

if (tipo !== undefined) {
    const filtrados = componentes.filter(c => {
        return c.tipo.toLowerCase().trim() === tipo.toLowerCase().trim();
    });

    return res.json(filtrados);
}

return res.json(componentes);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
