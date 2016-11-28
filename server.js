'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
// const cookieParser = require('cookie-parser');
// const passport = require('passport');
// This tests to see if we have NODE_ENV in our environment.
// Only load the dotenv if we need it.
const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app = express();
const PORT = process.argv[2] || process.env.port || 3000;

// import router for our API
const gypsyRouter = require('./routes/gypsy');

// import router for our external API
const nomadRouter = require('./routes/nomadlist');

// authorization router to validate users
const authRouter = require('./routes/auth');

// initialize passport, part of our validation middleware
// app.use(passport.initialize());

// lets us read and write client-side cookies
// app.use(cookieParser());

// set up some logging
app.use(logger( isDev ? 'dev' : 'common'));

// This will parse our playload from fetch which is sent as a JSON object
app.use(bodyParser.json());

// set default static assets folder
app.use(express.static(path.join(__dirname, 'dist')));

// map our routes
app.use('/gypsy', gypsyRouter);
app.use('/nomad', nomadRouter);
// app.use('/auth', authRouter);

app.listen(PORT, () => { console.log('Wanderlust 🌍')});
