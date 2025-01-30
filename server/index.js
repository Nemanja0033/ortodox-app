import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send('Hello world!');
});

const PORT = 3000;

app.listen(PORT, () => console.log(`Server je pokrenut na portu ${PORT}`));