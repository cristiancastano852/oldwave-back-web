import express from 'express'
import routeProducts from './views/products/products'

const app = express()

const port=process.env.PORT || 4000
app.use(express.json())
app.use(routeProducts)


const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: ${port}`),
)

server.on('request', (req) => console.log(req.url))
