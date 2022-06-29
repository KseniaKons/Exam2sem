import express from "express";

const app = express();

const PUBLIC_DIR = "public";
app.use(express.static(PUBLIC_DIR));

app.get("", (req, res) => {

});


const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Сервер работает на порте ${PORT}`);
    console.log("Сервер запущен http://localhost:5500");
});