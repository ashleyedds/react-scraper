const router = require('express').Router();
const articleRoutes = require('./articles');

console.log("article api routes included")
// Article routes
router.use('/saved', articleRoutes);

module.exports = router;