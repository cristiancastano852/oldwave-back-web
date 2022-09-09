import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const routeShoppingCart = express.Router();


routeShoppingCart.get("/cart/:id", async (req, res) => {
    const id: string = req.params.id as string;
    let getDetails = await prisma.user.findUnique({
      where: {
        id: id,
      },
      select: {
        client: {
          select: {
            shoppingCart: {
              select: {
                total: true,
                details: {
                  select: {
                    id: true,
                    units: true,
                    cartProduct: {
                      select: {
                        name: true,
                        stock: true,
                        thumbnail: true,
                        value: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });
    res.json(getDetails);
});

routeShoppingCart.delete('/cart/:id', async (req, res) => {
  const id: string = req.params.id as string;
  const product = await prisma.shoppingCartDetails.delete({
    where: {
      id: id,
    },
  })
  res.json(product)
})

/*routeShoppingCart.post('/post', async (req, res) => {
  const { shoppingCartId, productId, units } = req.body
  const post = await prisma.shoppingCartDetails.create({
    data: {
      product: {connect: {id: productId }},
      shoppingCart: {connect: {id: shoppingCartId }},
      productId: productId,
      units: units,


    },
  });
  
  res.json(post)
})*/


export default routeShoppingCart;