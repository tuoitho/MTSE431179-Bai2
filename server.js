import express from 'express';
import configViewEngine from './src/config/viewEngine';
import initWebRoute from './src/route/web';
import connectDB from './src/config/configdb';
require('dotenv').config();

let app = express();

// Config body parser (using built-in Express methods)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Config view engine
configViewEngine(app);

// Init web route
initWebRoute(app);

// Test connection db
connectDB();

let port = process.env.PORT || 8088;

app.listen(port, () => {
    console.log(`App is running at the port ${port}`)
})
