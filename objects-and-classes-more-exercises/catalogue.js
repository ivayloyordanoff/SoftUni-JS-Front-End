function storeProducts(products) {
  let catalogue = {};

  for (let product of products) {
    let [productName, productPrice] = product.split(" : ");
    let initial = productName[0].toUpperCase();

    if (!catalogue[initial]) {
      catalogue[initial] = [];
    }

    catalogue[initial].push({ productName, productPrice });
  }

  for (let initial in catalogue) {
    catalogue[initial].sort((a, b) =>
      a.productName.localeCompare(b.productName)
    );
  }

  let sortedGroups = Object.keys(catalogue).sort();

  for (let initial of sortedGroups) {
    console.log(initial);

    for (let product of catalogue[initial]) {
      console.log(`  ${product.productName}: ${product.productPrice}`);
    }
  }
}
