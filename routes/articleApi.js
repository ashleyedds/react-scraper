const router = require("express").Router();
const articleController = require("../controllers/articleController");

router.route("/")
    .get(articleController.findAll)
    .post(articleController.create)

router.route("/:id")
    .delete(articleController.delete)


module.exports = router;