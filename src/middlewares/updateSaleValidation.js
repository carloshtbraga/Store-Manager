const { getProductFromId } = require('../models/products.model');
const { getSaleFromId } = require('../models/sales.model');

const updateSaleValidation = async (req, res, next) => {
  const sale = req.body;

  const productId = sale.every((e) => e.productId);
  if (!productId) { return res.status(400).json({ message: '"productId" is required' }); }

  const quantity = sale.every((e) => e.quantity !== undefined);  
  if (!quantity) { return res.status(400).json({ message: '"quantity" is required' }); }
  
  const quantityLength = sale.every((e) => e.quantity > 0);
    if (!quantityLength) {
      return res
        .status(422)
        .json({ message: '"quantity" must be greater than or equal to 1' });
    }
  
  const productIdisValid = (await Promise
    .all(sale.map((e) => getProductFromId(e.productId)))).every((e) => e !== undefined);
  console.log(productIdisValid);

  if (!productIdisValid) return res.status(404).json({ message: 'Product not found' });

  next();
};

const updateSaleValidation2 = (async (req, res, next) => {
    const id = Number(req.params.id);
    const saleIdValid = await getSaleFromId(id);
    console.log(saleIdValid);

  if (saleIdValid.length === 0) {
 return res.status(404).json({ message: 'Sale not found' }); 
}
  next();
});

module.exports = {
  updateSaleValidation,
  updateSaleValidation2,
};
