import express from "express";
import morgan from "morgan";
import datosRoutes from "./routes/datos.routes";

const app = express();
var cors = require('cors');


app.set("port", 4000);

app.use(morgan("dev"));
app.use(express.json());
app.use(cors({
    origin: '*'
}));

app.use("/api/datos", datosRoutes);

export default app;