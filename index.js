import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let cityname;
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q="
const API_Key = "&appid=7353d7308ff01e4e455a29e5a8631a71";


app.get("/", (req, res) => {
    res.render("index.ejs")
});

app.post("/submit", async (req, res) => {
    console.log(req.body.cityName)
    try {
        const response = await axios.get(API_URL + req.body.cityName + API_Key);
        res.render("index.ejs", { content: response.data})
    } catch (e) {
        console.log('error', e);
    }
   
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})
