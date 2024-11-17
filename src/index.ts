import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.post("/api/v1/signup")
