import express from "express";
import cors from "cors";
import router from "./routes/products.js";

const app = express();
const serverPort = 8800;

app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(serverPort, () => {
	console.log("Server rodando na porta " + serverPort);
});
