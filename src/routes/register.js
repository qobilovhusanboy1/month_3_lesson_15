const {register, use_view} = require("../controllers/register_controller");

const router = require("express").Router();

router.post("/users", register);
router.get("/user_view",use_view)

module.exports = router;