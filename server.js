import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoutes.js"

// App config
const app = express()
const port = 4000

// Middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))


app.get("/", (req, res) => {
    res.send("API Working");
});

app.listen(port, () => {
    console.log(`Server Started on http://localhost:${port}`);
});


//mongodb+srv://divyagarud:<db_password>@cluster0.qpswo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

//mongodb+srv://divyagarud:<db_password>@cluster0.qpswo.mongodb.net/?