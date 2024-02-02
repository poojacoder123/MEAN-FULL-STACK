import express from "express";
import { createUser, deleteUser, getAllUser } from "../controllers/UserController.js";
import { UpdateUser } from "../controllers/UserController.js";

const routes = express.Router();

routes.post("/create", createUser)

routes.put("/update/:id",UpdateUser);
routes.get("/get",getAllUser);
routes.delete("/delete/:id",deleteUser);

export default routes;
