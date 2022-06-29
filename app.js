import express from "express";

import dotenv from 'dotenv'; //dotenv - библиотека для пподключения сторонних сервисов 
import { createClient } from '@supabase/supabase-js';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

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
    
        const { data, error } = await supabase
            .from('models')
            .insert(model)
   

    if (!model) {
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