import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req,res) => {    // to check whether the server is running
    res.status(200).send('Backend Server is running');
})

export default app;