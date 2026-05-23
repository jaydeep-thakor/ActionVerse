import { signUp, signIn, signOut } from "../controllers/auth.controller.js";
import {Router} from "express"

const router = Router();

router.post("/sign-in/user", signIn);
router.post("/sign-up/user", signUp);
router.get("/sign-out/user", signOut);

export default router;
