const router = require('express').Router();
const { restoreUser } = require('../../utils/auth.js');
const { User } = require('../../db/models');

router.use(restoreUser);

/* VARIOUS TESTING ROUTES
//const { setTokenCookie, requireAuth } = require('../../utils/auth.js');
router.post('/test', function(req, res) {
  res.json({ requestBody: req.body });
});

router.get('/set-token-cookie', async (_req, res) => {
  const user = await User.findOne({
    where: {
      username: 'Demo-lition'
    }
  });
  setTokenCookie(res, user);
  return res.json({ user: user });
});

router.get(
  '/restore-user',
  (req, res) => {
    return res.json(req.user);
  }
);

router.get(
  '/require-auth',
  requireAuth,
  (req, res) => {
    return res.json(req.user);
  }
);
*/
module.exports = router;
