const { Model } = require("mongoose");
const Medical = require("./medicalSchema")

const createMedical = (req, res) => {
    const newMedical = new Medical({
        medicalname: req.body.medicalname,
        location: req.body.location,
        category: req.body.category,
        facilities: req.body.facilities,
        numOfHealthprofessionals: req.body.numOfHealthprofessionals,
        address: req.body.address,
        contact: req.body.contact
    })
    newMedical.save();
    res.status(200).json(newMedical)
}

//geting Medical
const getMedicals = async(req, res) => {
  const Medical =await Medical.find() ;
  res.status(200).json(Medicals);
}

module.exports={ createMedical , getMedical}