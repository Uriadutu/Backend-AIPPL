import { getKui, getKuinbyId, createKui, deleteKui, updateKui } from "../controller/LinkKui.js";
import express from "express"

const Router = express.Router();

Router.get("/kuisioner", getKui);
Router.get("/kuisioner/:id", getKuinbyId);
Router.post("/kuisioner", createKui);
Router.patch("/kuisioner:id", updateKui);
Router.delete("/kuisioner/:id", deleteKui);

export default Router;