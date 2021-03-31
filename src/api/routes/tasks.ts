import express, { Application, Request, Response, NextFunction } from "express";
const data = require("../../../data/taskdata.json");

const router = express.Router();

// GET request /tasks route
router.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(data);
    res.status(200).json(data);
  } catch (err) {
    //error handling
    console.log(err);
    res.status(500).json({
      error: err,
    });
  }
});
//GET request /tasks/index
router.get("/:index", (req: Request, res: Response, next: NextFunction) => {
  try {
    const idx = req.params.index;
    console.log("index: ", idx)
    console.log("data: ", data.data.length)
    
    res.status(200).json(data.data[idx]);
  }
  catch (err) {
    console.log("tasks: ", err);
    res.status(500).json({
      error: err,
    })
  }
})
module.exports = router;
