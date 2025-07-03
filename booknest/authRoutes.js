const protect = require("../middleware/authMiddleware");

router.get("/profile", protect, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json({ name: user.name });
});
