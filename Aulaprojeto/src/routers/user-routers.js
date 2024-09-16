import express from "express";
export const router = express.Router();
import { users } from "../models/user.js";
import { getAllUsers,getAllUsersById } from "../controllers/user-controller.js";


router.get("/", getAllUsers);

router.get("/:id/", getAllUsersById);