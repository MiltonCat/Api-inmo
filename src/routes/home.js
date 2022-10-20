const {Router} = require('express');
const router = Router();

const movies = require('./sample.json');

const _ = require('underscore')


router.get('/', (req, res)=> {
  res.json(movies);
})
router.post('/', (req, res)=> {
const { tipo, habitaciones,metros, barrio,ciudad } = req.body;
if (tipo && habitaciones && metros && barrio && ciudad) {
  const id = movies.length + 1;
  const newMovie = {...req.body, id};
  res.json('saved');
  movies.push(newMovie);
  res.json(movies);
}else{
  res.json({error: 'Tuviste un error gravisimo'});
}
});
router.put('/:id', (req, res)=> {
  const { id } = req.params;
  const { tipo, habitaciones,metros, barrio,ciudad } = req.body;
  if (tipo && habitaciones && metros && barrio && ciudad){
    _.each(movies, (movie, i) => {
      if (movie.id == id){
        movie.tipo = tipo;
        movie.habitaciones = habitaciones;
        movie.metros = metros;
        movie.barrio = barrio;
        movie.ciudad = ciudad;
      }
    });
    res.json(movies);
  }else{
    res.status(500).json({error: 'Hubo un error'});
  }
})

router.delete('/:id', (req, res)=> {
const { id } = req.params;
  _.each(movies, (movie, i) => {
    if (movie.id == id){
      movies.splice(i, 1);
    }

  })
})

module.exports = router;