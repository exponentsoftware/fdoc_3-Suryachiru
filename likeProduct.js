const likeProduct = (productId, userId) => {
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
        const likes = products[i].likes;
        const index = products[i].likes.indexOf(userId);
        if (index !== -1) {
          products[i].likes.splice(index, 1);
        } else {
          products[i].likes.push(userId);
        }
      }
    }
  };
  console.log(likeProduct('aegfal', 'fg12cy'));
  console.log(likeProduct('eedfcf', 'fg12cy'));