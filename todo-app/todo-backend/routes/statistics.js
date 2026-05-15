const express = require('express');
const router = express.Router();

const redis = require('../redis');

router.get('/', async (req, res) => {
  const addedTodos = await redis.get('addedTodos');
  const added_todos = addedTodos ? Number(addedTodos) : 0;

  return res.send({ added_todos });
});

module.exports = router;
