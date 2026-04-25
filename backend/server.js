const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const componentes = [
    { id: 1, nombre: "Ryzen 7 5800X", tipo: "CPU" },
    { id: 2, nombre: "RTX 3060", tipo: "GPU" },
    { id: 3, nombre: "ASUS B550M", tipo: "Motherboard" },
    { id: 4, nombre: "Gabinete ATX", tipo: "Gabinete" }
];

    app.get("/componentes", (req, res) => {
    const tipo = req.query.tipo;

    if (tipo !== undefined) {
        const filtrados = componentes.filter(c => {
            return c.tipo.toLowerCase().trim() === tipo.toLowerCase().trim();
        });

        return res.json(filtrados);
    }

    return res.json(componentes);
});

app.post("/componentes", (req, res) => {
    const { nombre, tipo } = req.body;

    if (!nombre || !tipo) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const nuevoComponente = {
        id: componentes.length + 1,
        nombre: nombre,
        tipo: tipo
    };

    componentes.push(nuevoComponente);

    return res.status(201).json(nuevoComponente);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
