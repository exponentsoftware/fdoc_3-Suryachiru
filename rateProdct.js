const rateProduct = (productId, userId, ratingPoint) => {
    let found = false;
    for (let i = 0; i < products.length; i++) {
      if (products[i]._id === productId) {
        for (let j = 0; j < products[i].ratings.length; j++) {
          if (products[i].ratings[j].userId === userId) {
            const rate = { userId, rate: ratingPoint };
            products[i].ratings[j].rate = ratingPoint;
            found = true;
            break;
          }
        }
        if (!found) {
          products[i].ratings.push({ userId, rate: ratingPoint });
        }
      }
    }
  };
  console.log(products);
  rateProduct('eedfcf', 'fg12cy', 5);
  rateProduct('aegfal', 'fg12cy', 2.5);
  rateProduct('aegfal', 'fg12cy', 2.0);
  console.log(products);