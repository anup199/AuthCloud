const Apply = require('../models/ApplyNow');

const createApplication = async (req, res) => {
  try {
    // res.json({ success: true });
     console.log("DATA:", req.body); // 🔥 check

    const data = new Apply(req.body);
    await data.save();
    // console.log("Data Saved")
    res.json({
      success: true,
      message: "Saved"
    });
  } catch (err) {
    // res.status(500).json({ success: false });
     console.log(err.message);
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

const getApplications = async (req, res) => {

     try {
    const data = await Apply.find();

    res.json({
      success: true,
      data
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
};

const getApplicationById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Apply.findById(id);

        if(!data){
            return res.json({
                success:false,
                message:"Record Not found"
            });
        }
        res.json({
            success:true,
            data
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.message
        });
    }
}


module.exports = {
  createApplication,
  getApplications,
  getApplicationById
};