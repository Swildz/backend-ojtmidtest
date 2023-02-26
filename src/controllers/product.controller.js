const redis = require("../lib/redis.lib");
const { getProductList, getProductById } = require("../modules/product.modul");

const getProduct = async (req, res) => {
  const redis_key = "get_product";
  const { repply } = await redis.get(redis_key);
  try {
    const response = await getProductList();
    const listProduct = response.data;
    let result = listProduct;
    if (repply) {
      res.status(200).send(repply);
    } else {
      redis.set(redis_key, JSON.stringify(result));
      res.status(200).send(result);
    }
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: error.message,
    });
  }
};

const getProducttById = async (req, res) => {
  const id = req.params.id;
  const idNumber = Number(id)
  const redis_key = `get_product_by_id:${idNumber}`;
  const { repply } = await redis.get(redis_key);
  try {
    const response = await getProductById(idNumber);
    const listProducts = response.data;
    let resultt = listProducts;
    if (repply) {
      res.status(200).send(repply);
    } else {
      redis.set(redis_key, JSON.stringify(resultt));
      res.status(200).send(resultt);
    }
  } catch (error) {
    console.log(error);
    res.send({
      status: false,
      message: error.message,
    });
  }
};

module.exports = {
  getProduct,
  getProducttById
};
