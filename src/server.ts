import express from 'express';

const app = express();

app.use(express.json());

app.listen(3333, () => {
    console.log('the server is runnig!!! 🚀');
});
