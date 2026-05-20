import { signUp } from "../controllers/auth.controller.js";
import {Router} from "express"

const router = Router();

// router.get("/sign-in/user", signIn);
router.post("/sign-up/user", signUp);

export default router;
