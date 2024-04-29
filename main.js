const express = require('express')
const morgan = require('morgan')
const { join } = require('path')
const { engine } = require('express-handlebars')

const PORT = parseInt(process.env.PORT) || 3000

const app = express()

app.engine('hbs', engine({ defaultLayout: false }))
app.set('view engine', 'hbs')

app.use(morgan('combined'))

app.get(['/', '/index.html'] ,
	(req, resp) => {
		resp.status(200)
		resp.render('main')
	}
)

app.use(express.static(join(__dirname, 'static')))

app.listen(PORT, () => {
	console.info(`Application started on port ${PORT} at ${new Date()}`)
})
