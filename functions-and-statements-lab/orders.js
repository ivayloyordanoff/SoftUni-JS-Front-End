function orders(product, quantity) {
    const productPrice = {
        coffee: 1.5,
        water: 1,
        coke: 1.4,
        snacks: 2,
    };

    const totalPrice = productPrice[product] * quantity;
    console.log(`${totalPrice.toFixed(2)}`);
}
