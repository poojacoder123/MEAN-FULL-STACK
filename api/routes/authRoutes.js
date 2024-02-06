import express from 'express';
import { login, register } from '../controllers/AuthController.js';

const Authroutes = express.Router();

Authroutes.post("/",register );
Authroutes.post("/login",login );

export default Authroutes;