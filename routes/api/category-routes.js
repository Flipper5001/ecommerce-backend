const router = require('express').Router();
const { Category, Product } = require('../../models/index')
// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    })
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    })
    res.status(200).json(categoryData);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  }).then((newCategory) => {
    res.json(newCategory);
  }).catch((error) => {
    res.status(400).json(error);
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    category_name: req.body.category_name
  },
  {
    where: {
      id: req.params.id
    }
  }).then((updateCategory) => {
    res.json(updateCategory);
  }).catch((error) => {
    res.status(400).json(error);
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((updateCategory) => {
    res.json(updateCategory);
  }).catch((error) => {
    res.status(400).json(error);
  })
});

module.exports = router;
