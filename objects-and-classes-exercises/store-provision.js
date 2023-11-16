function updateStock(currentStock, orderedProducts) {
  const stock = {};

  for (let i = 0; i < currentStock.length; i += 2) {
    const product = currentStock[i];
    const quantity = Number(currentStock[i + 1]);

    if (stock.hasOwnProperty(product)) {
      stock[product] += quantity;
    } else {
      stock[product] = quantity;
    }
  }

  for (let i = 0; i < orderedProducts.length; i += 2) {
    const product = orderedProducts[i];
    const quantity = Number(orderedProducts[i + 1]);

    if (stock.hasOwnProperty(product)) {
      stock[product] += quantity;
    } else {
      stock[product] = quantity;
    }
  }

  for (const product in stock) {
    console.log(`${product} -> ${stock[product]}`);
  }
}
