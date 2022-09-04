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
        clients: {
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

routeShoppingCart.get("/cart/:id", async (req, res) => {
  const id: string = req.params.id as string;
  let getDetails = await prisma.shoppingCart.findUnique({
    where: {
      clientId: id,
    },
    select: {
      total: true,
      details: {
        select: {
          id: true,
          units: true,
          cartProduct: {
              name: true,
              stock: true,
              thumbnail: true,
              value: true,
          },
        },
      },
    },
  });
  res.json(getDetails);
});

export default routeShoppingCart;