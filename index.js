import express from 'express';
import cors from 'cors';
import productRouter from './src/modules/products/products.router.js';
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("Hello World");
}
);
app.use(productRouter)
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});