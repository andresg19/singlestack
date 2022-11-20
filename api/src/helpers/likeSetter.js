const { Likes } = require("../db.js");

const likeSetter = async (commentId, userId, switcher ) => {
  console.log('Helper params', switcher, userId, commentId);
  try {
    /* let like = await model.findAll({ where: { commentId } }); */

    switch (switcher) {
      case "up":
        console.log('Helper case up', 'entre')
        const like = async() => {
          await Likes.increment( "likes", {
           by: 1,
           where: { userId },
         });
         await Likes.update({
          clicked: true,
         }, 
         {where: {userId}}
         )
         ; }
         
         return like();

      case "down":
        console.log('Helper case down', 'entre')
        console.log(userId, 'soycomment',commentId)
        const disLike = async() => {
         await Likes.delete({
          where: { commentId, userId },
        });
         await Likes.update({
          clicked: false,
         }, 
         {where: {userId}}
         )
        ; }
        
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
