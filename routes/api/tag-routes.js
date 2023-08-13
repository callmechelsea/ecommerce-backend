const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const allTags = await Tag.findAll({ include: { model: Product } });
    res.status(200).json(allTags);
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const selectedTag = await Tag.findByPk(req.params.id, {
    include: { model: Product },
  });
  if (selectedTag) {
    res.status(200).json(selectedTag);
  } else {
    res.status(404).json({ message: "404: tag id not found!" });
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  const newTag = await Tag.create(req.body.tag_name);
    res.status(200).json({ message: "Tag Created!", newTag });
  });

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const updateTag = await Tag.update(
    { tag_name: req.body.tag_name },
    {
      where: {
        id: req.params.id,
      },
    }
  );
  if (updateTag) {
    res.status(200).json({
      message: "Tag updated!",
      tag_name: req.body.tag_name,
      updateTag,
    });
  } else {
    res.status(404).json({ message: "404: tag id not found!" });
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const deletedTag = await Tag.destroy({ where: { id: req.params.id } });
    if (deletedTag) {
      res
        .status(200)
        .json({ message: "Tag Deleted", deleted_tag_id: req.params.id });
    } else {
      res.status(404).json({ message: "404: tag id not found!" });
    }
});

module.exports = router;
