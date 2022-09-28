const Medical = require("../models/medicalSchema")

const createMedical = (req, res) => {
    const newMedical = new Medical({
        profession: req.body.profession,
        licensenumber: req.body.licensenumber,
        yearsofexperience: req.body.yearsofexperience,
        expertise: req.body.expertise,
        address: req.body.address,
        contact: req.body.contact
    })
    newMedical.save();
    res.status(200).json(newMedical)
}

//geting Medical
const getMedicals = async(req, res) => {
  const Medicals =await getMedicals.find() ;
  res.status(200).json(Medical);
}

module.exports={ createMedical , getMedicals}