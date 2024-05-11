import express from 'express'
import {authTest} from "../controllers/auth.controller.js"
const router = express.Router()

router.post('/sign-up', authTest )

export default router;
