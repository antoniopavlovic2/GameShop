import express from 'express';
import {igre,narudzbe} from './data/games.js'

const app = express();
app.use(express.json());
app.use(express.static("public"));

const PORT = 3000;

app.listen(PORT, () => {
    console.log("Poslužitelj sluša na portu " + PORT);
});

app.get("/", (req, res) => {
    res.sendFile("public/index.html", { root: import.meta.dirname });
});

app.get("/status", (req,res) => {
    let status = {
        "status":  "OK",
        "port": PORT
    }

    return res.status(200).json(status);
});

app.get("/about", (req,res) => {
    let about = {
    "naziv": "GameShop",
    "lokacija": "Hrvatska",
    "radno_vrijeme": "08:00 - 20:00"
    }

    return res.status(200).json(about);
});

app.get("/igre", (req,res) => {
    if(igre.length>0)
        return res.status(200).json(igre);

    else
        return res.status(404).json({
            "message": "Nema dostupnih videoigara."
    })
});