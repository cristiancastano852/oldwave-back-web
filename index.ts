import express from 'express'
import routeProducts from './views/products/products'
<<<<<<< HEAD
import routeRole from './views/role/role'
import routeShoppingCart from './views/shoppingCart/shopingCart'
=======
import routeAdmin from './views/admin/admin'
import routeProductRating from './views/rating/rating'
>>>>>>> 8d232bf73f5f58adcdc54292745f7bb89277a8d1

const app = express()

const port=process.env.PORT || 4000
app.use(express.json())
app.use(routeProducts)
<<<<<<< HEAD
app.use(routeShoppingCart)
app.use(routeRole)
=======
app.use(routeAdmin)
app.use(routeProductRating)


>>>>>>> 8d232bf73f5f58adcdc54292745f7bb89277a8d1
const server = app.listen(port, () =>
  console.log(`
🚀 Server ready at: ${port}`),
)

server.on('request', (req) => console.log(req.url))
