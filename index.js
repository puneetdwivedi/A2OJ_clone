const express = require("express");
const path = require("path");
const app = express();
const cors = require('cors');

// partials
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.static(path.join(__dirname, "atwoj_clone", "build")));


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "atwoj_clone", "build", "index.html"));
})

app.get("/api/ladder_problem", (req, res) => {
    try {
        const query = req.query;

        // path of ladder
        let ladderPath;

        if (query.division !== undefined && query.problem_level !== undefined) {
            ladderPath = path.join(__dirname, "ladder_problem", `div${query.division}${query.problem_level}`);
        }
        else if (query.problem_rating !== undefined) {
            ladderPath = path.join(__dirname, "ladder_problem", `rating${query.problem_rating}`);
        }
        else {
            throw "Requested ladder is not found";
        }

        // requiring ladder
        const ladder = require(ladderPath);

        // sending response
        res.status(200).json({ success: "ok", response: ladder });
    }
    catch (error) {
        res.status(500).json({ success: "fail", error: "Requested ladder is not found" });
    }
});



app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/atwoj_clone/build', 'index.html'));
});


app.listen(port, () => {
    console.log("started")
});
