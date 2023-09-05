import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 5000;
const API_URL = "https://api.unsplash.com";
const clientId = "nvBPekP7MteZROtgLewRzQvy7zPsqZwQkd_1GsS8ZPg";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/search", async (req, res) => {
    try {
        const response = await axios.get(API_URL + "/search/photos", {
            params: {
                client_id: clientId,
                query: req.body.searchWord,
            }
        });
        const photos = response.data.results;
        const randomIndex = Math.floor(Math.random() * photos.length);
        const randomSmallURL = photos[randomIndex].urls.small;
        res.render("index.ejs", {link: randomSmallURL});
    } catch (error) {
        console.error(error);
    }
});

app.post("/random", async (req, res) => {
    try {
        const response = await axios.get(API_URL + "/photos/random", {
            params: {
                client_id: clientId
            }
        });
        res.render("index.ejs", {link: response.data.urls.small});
    } catch (error) {
        console.error(error);
    }
});

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server started on port ${port}`);
});