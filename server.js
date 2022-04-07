const exrpess = require('express')
const app = express()

app.get('/users', (req, res) =>{
	res.json(users)
})

app.post('/users', async (req, res) =>{
	try {
		const salt = await bcrypt.gensalt()
		const hashedPassword = await bcrypt.hash(req.body.password, salt)
	}
	const user = { name: req.body.name, password: hashedPassword }
	users.push(user)
	res.status(201).send()
})

app.listen(3000)