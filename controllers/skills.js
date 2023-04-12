// Import the model that we exported in the Todo.js model file
import { Skill } from '../models/skill.js'
// Inside the index controller, use the Skill model to query for ALL skills
function index(req, res) {
  Skill.find({})
  .then(skills => {
    res.render('skills/index', {
      skills : skills,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  index,
}