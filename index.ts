import express from 'express'
import routeProducts from './views/products/products'

const app = express()


app.use(express.json())
app.use(routeProducts)


const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000`),
)
