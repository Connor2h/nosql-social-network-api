const router = require('express').Router();
const userRoutes = require('./user-routes');
//const commentRoutes = require('./comment-routes');

// add prefix of `/users` to routes created in `user-routes.js`
router.use('/users', userRoutes);
//router.use('/comments', commentRoutes);

module.exports = router;