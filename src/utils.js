let data = require('./data/data').data

const getAllProducts = (res) => {
    if (data) {
        res.status(200).json(data);
    } else  {
        res.status(500).send('No data available');
    }
}

const getProductById = (res, id) => {
    product = data.find(x => x.id == id);
    if (product) {
        res.status(200).json(product);
    } else {
        res.status(404).send('No product with that id exists');
    }
}
exports.getAllProducts = getAllProducts
exports.getProductById = getProductById
