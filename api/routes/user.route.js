///Use for creting routes instead of putting all of them in index.js
////remember you must register all routes to index.js for them to work
//dont forget to add .js when importing the comntrollers
import express from 'express'
import { test } from '../controllers/user.controller.js';



const router = express.Router();

router.get('/test',test)

export default router;