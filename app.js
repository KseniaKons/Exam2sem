import express from "express";
import supabaseService from "./supabaseService.js";

const app = express();

const PUBLIC_DIR = "public";
app.use(express.static(PUBLIC_DIR));

app.get("", (req, res) => {

});

app.post("/add", (req, res) => {

    console.log("metod: post");
    console.log("url: /add");
    

    let model = {
        name: req.body.name,
        description: req.body.description,
    };

    let data = supabaseService.addModel(model);

    if (!data) {
        let error = {
            status: "error",
            message: "Ошибка при добавлении в базу данных",
        };
        res.statusCode = 400;
        res.send(error);
        return;
    }


    let answer = {
        status: "ok",
        data
    }

    res.statusCode = 200;
    res.send(answer);

});


const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Сервер работает на порте ${PORT}`);
    console.log("Сервер запущен http://localhost:5500");
});