const likeSetter = async (model, switcher, userId, commentId) => {
  try {
    /* let like = await model.findAll({ where: { commentId } }); */

    switch (switcher) {
      case "up":
        let addOneLike = await model.increment("likes", {
          by: 1,
          where: { commentId },
        });
        let clicked = await model.update(
          { where: { commentId } },
          { clicked: true }
        );
        return addOneLike;

      case "down":
        let disLike = await model.decrement("likes", {
          by: 1,
          where: { commentId },
        });
        let unclicked = await model.update(
          { where: { commentId } },
          { clicked: false }
        );
        return disLike;

      default:
        let newLike = await model.create({
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
