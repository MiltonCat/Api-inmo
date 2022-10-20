const {Router} = require('express');
const router = Router();

router.get('/', (req, res)=> {
  const data = { "name": "John", "age": 30, "car": null };
  res.json(data);
})

module.exports = router;