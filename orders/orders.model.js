const orders = [
    {
        date: '2005-05-05',
        subtotal: 90.22,
        items: [
            {
                product: {
                    id: 'redshoe',
                    description: 'Old Red Shoe',
                    price: 45.12,
                },
                quantity: 3,
            }
        ]
    }
];

function getAllOrders() {
    return orders;
}

module.exports = {
    getAllOrders
};