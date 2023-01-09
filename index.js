const express = require("express");

const app = express();

app.get("/", (req, res) => {
	return res.send("working");
});
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`server is listining in ${port}`));
