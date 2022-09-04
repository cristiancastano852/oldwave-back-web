import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const routeRole = express.Router();


routeRole.get("/role/:id", async (req, res) => {
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
    });
    res.json(getDetails);
});
