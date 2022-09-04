//imporet methods from comment-controller file
const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');


// /api/comments/<pizzaId>
  //addComment method as a POST callback
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
    //removeComment method is a DELETE callback
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;