const { addMessage, getMessages } = require("../controllers/messageController");
const router = require("express").Router();
const passport = require("passport");

router.post("/addmsg/", passport.authenticate('jwt', { session: false }), addMessage);
router.post("/getmsg/", passport.authenticate('jwt', { session: false }), getMessages);

module.exports = router;
