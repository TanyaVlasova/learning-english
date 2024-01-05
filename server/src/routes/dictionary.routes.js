const Router = require("express");
const router = new Router();
const dictionaryController = require("../controller/dictionary.controller");

router.post("/dictionary", dictionaryController.createWord);
router.get("/dictionary", dictionaryController.getDictionary);
router.get("/dictionary/:id", dictionaryController.getWord);
// router.update("/dictionary/:id", dictionaryController.updateWord); // не работает почему-то
router.delete("/dictionary/:id", dictionaryController.deleteWord);

module.exports = router;
