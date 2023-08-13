const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
    const allCategory = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(allCategory);
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const selectCategory = await Category.findByPk(req.params.id, {
    include: { model: Product },
  });
  if (!selectCategory) {
    res.status(404).json({ message: 'No category found with that id!' });
    return;
  }else{
    res.status(200).json(selectCategory);
  }

});

router.post('/', async (req, res) => {
  // create a new category
const newCategory = await Category.create({
  category_name: req.body.category_name,
})
res.status(200).json({message: "Category created!", newCategory});
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  const updateCategory = await Category.update(
    { category_name: req.body.category_name },
    { where: { id: req.params.id } }
  );
  res.status(200).json({message: "Category updated!", updateCategory});
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const deleteCategory = await Category.destroy({
    where: { id: req.params.id },
  });
  res.status(200).json({ message: "Category deleted!" });
});

module.exports = router;
