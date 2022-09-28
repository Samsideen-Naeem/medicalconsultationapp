const { createMedical,getMedicals } = require("../controllers/medicalController")
const { Router, } = require("express")

const router = Router();

router.post("/addmedical", createMedical)

router.route("/medicals").get(getMedicals)

module.exports= router