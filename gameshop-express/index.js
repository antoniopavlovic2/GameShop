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

app.get("/igre/dostupne", (req,res) => {
    const dostupni = igre.filter(igra => igra.dostupno === true);
    return res.status(200).json(dostupni);
});

app.get("/igre/nedostupne", (req,res) => {
    const nedostupni = igre.filter(igra => igra.dostupno === false);
    return res.status(200).json(nedostupni);
});

app.get("/igre/:id", (req,res) => {
    const id = Number(req.params.id);
    const trazena_igra = igre.find( n => n.id === id);

    if(!Number.isInteger(id) || id < 1){
        return res.status(400).json({
            "message": "ID mora biti cijeli pozitivan broj."
        })
    }
    if(trazena_igra){
        res.status(200).json(trazena_igra);
    }
    else{
        return res.status(404).json({
            "message": "Videoigra nije pronađena."
        })
    }
});

app.get("/igre/naziv/:naziv", (req,res) => {
    const naziv = req.params.naziv;
    const igra_naziv = igre.find(n => n.naziv.toLowerCase() === naziv.toLowerCase());

    if(!igra_naziv){
        return res.status(404).json({
            "message": "Videoigra nije pronađena."
        });
    }
    else    
        return res.status(200).json(igra_naziv);
});