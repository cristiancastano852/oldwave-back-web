import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const routeProductRating = express.Router();

routeProductRating.post('/products/:productId', async (req, res) => {
    const productId: string = req.params.productId as string;
    const { clientId, rating, description} = req.body;
    const newRating = await prisma.rating.create({
        data: {
            id: "soyunid",
            clientId: clientId,
            productId: productId,
            rate: rating,
            comment: description
        },
    });
    res.json(newRating);
})

export default routeProductRating;