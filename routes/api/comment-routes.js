//imporet methods from comment-controller file
const router = require('express').Router();
const { 
  addComment, 
  removeComment,
  addReply,
  removeReply
 } = require('../../controllers/comment-controller');


// route /api/comments/<pizzaId>
  //addComment method as a POST callback
router.route('/:pizzaId').post(addComment);

// route /api/comments/<pizzaId>/<commentId>
    //removeComment method is a DELETE callback
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment);

  //delete route to handle removeReply
  router
    .route('/:pizzaId/:commentId/:replyId')
    .delete(removeReply);

module.exports = router;