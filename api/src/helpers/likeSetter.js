const { Likes } = require("../db.js");

const likeSetter = async (model, switcher, userId, commentId) => {
  console.log('Helper params', model, switcher, userId, commentId);
  try {
    /* let like = await model.findAll({ where: { commentId } }); */

    switch (switcher) {
      case "up":
        console.log('Helper case up', 'entre')
        let addOneLike = await Likes.increment("likes", {
          by: 1,
          where: { commentId },
        });
        let clicked = await Likes.update(
          { where: { commentId } },
          { clicked: true }
        );
        return addOneLike;

      case "down":
        console.log('Helper case down', 'entre')
        console.log(userId, 'soycomment',commentId)
        const disLike = async() => {
         await Likes.decrement("likes", {
          by: 1,
          where: { commentId },
        }); }
        
        // let unclicked = await Likes.update(
        //   {
        //     where: {commentId, userId},
        //     clicked: false
        //   }
        //  );
        return disLike();

      default:
        console.log('Helper default', 'entre')
        let newLike = await Likes.create({
          likes: 1,
          commentId,
          userId,
          clicked: true,
        });

        return newLike;
    }
  } catch (error) {
    console.log(`error en el likeSetter del helper: ${error}`);
  }
};

module.exports = {
  likeSetter,
};
