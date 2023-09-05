const {works_view,works_add,works_enter} = require("../controllers/works_controller");

const router = require("express").Router();

router.get("/works_view", works_view);
router.post("/work_add",works_add)
router.post('/work_enter',works_enter)


module.exports = router;