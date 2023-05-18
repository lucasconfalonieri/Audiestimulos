import { Router } from "express";
import { methods as datosController } from "./../controllers/datos.controller";

const router = Router();

router.get("/", datosController.getPacientes);
router.get("/:dni", datosController.getPaciente);
router.post("/", datosController.addPaciente);
router.delete("/:dni", datosController.deletePaciente);

export default router;