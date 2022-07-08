import { app } from './app'
import { UserController } from './controllers/UserController'

const userController = new UserController()

app.post('/signup', userController.signUp)
app.post('/login', userController.loginUser)

app.get('/all', userController.getAllUsers)

app.delete('/:id', userController.deleteUser)

