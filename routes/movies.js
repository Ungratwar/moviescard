const express=require("express");
const router = express.Router();

router.post("/",require("../controller/movies").CreateData);
router.get("/",require("../controller/movies").getAllData);
router.get("/:movieId",require("../controller/movies").getDataById);
router.put("/:Id",require("../controller/movies").EditData);
router.delete("/:movieId",require("../controller/movies").DeleteData);


module.exports=router;