import { Student } from '../models/student.js'

function index(req, res) {
  Student.find({})
  .then(students => { 
    res.render('students/index', {
      students: students,
      time: req.time
    })
  })
  .catch(error => { 
    console.log(error)
    res.redirect('/')
  })
}

function newStudent(req,res) {
  res.render('students/new')
}

function create(req, res) {
  console.log(req.body)
  req.body.done = false
  Student.create(req.body)
  .then(student => {
		// Notice we are doing a redirect here!
    res.redirect('/students')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/students')
  })
}

function show(req, res) {
  Student.findById(req.params.studentId)
  .then(student => {
    res.render('students/show', {
      student: student
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/students')
  })
}

function deleteStudent(req,res) {
  Student.findByIdAndDelete(req.params.studentId)
  .then(student => {
    res.redirect('/students')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/students')
  })
}

export {
  index,
  newStudent as new,
  create,
  show,
  deleteStudent as delete,
}