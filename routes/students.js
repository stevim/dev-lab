import { Router } from 'express'
import * as studentsCtrl from '../controllers/students.js'

const router = Router()


// GET localhost:3000/students
router.get('/', studentsCtrl.index)
router.get('/new', studentsCtrl.new)
router.get('/:studentId', studentsCtrl.show)
router.post('/', studentsCtrl.create)
router.delete('/:studentId', studentsCtrl.delete)

export { router }

