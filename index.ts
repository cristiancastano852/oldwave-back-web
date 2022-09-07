import express from 'express'
import routeProducts from './views/products/products'
import routeAdmin from './views/admin/admin'

const app = express()

const port=process.env.PORT || 4000
app.use(express.json())
app.use(routeProducts)
app.use(routeAdmin)


const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: ${port}`),
)

server.on('request', (req) => console.log(req.url))
