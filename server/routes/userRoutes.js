import express from "express"
import { authUser, registerUser } from "../controllers/userController.js";

const userRoutes = express.Router();

userRoutes.route("/").post(registerUser)
userRoutes.post("/login", authUser)
export default userRoutes;    