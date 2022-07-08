import app from "./app"
import login from './endpoints/login'
import createUser from './endpoints/createUser'
import getUser from './endpoints/getUser'


app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', getUser)
