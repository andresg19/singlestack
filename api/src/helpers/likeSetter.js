 const likeSetter = async (model, switcher, userId, commentId) => {

    try {
      let like = await model.findAll({ where: { commentId } });
  
      switch(switcher) {
        case 'up':
          let addOneLike = await model.increment('likes', { by: 1, where: { commentId }});
          return addOneLike;
  
        case "down":
          let disLike = await model.decrement('likes', { by: 1, where: { commentId }});
          return disLike;
          
        default :
         let newLike = await model.create({ likes: 1, commentId, userId, });
         return newLike;
        }
        
      } catch (error) {
        next(error);
      }
      
}

module.exports = {
  likeSetter,
}