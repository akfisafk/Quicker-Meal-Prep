import express from 'express';

const router = express.Router();

import { recipe } from "../controllers/apis.js";

router.post("/recipe", recipe);
export default router;