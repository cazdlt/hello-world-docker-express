const app = require("./app");

const port = process.env.port || 5000;
// const host = process.env.host || "0.0.0.0";

app.listen(port, () => console.log(`Server running at port ${port}`));
