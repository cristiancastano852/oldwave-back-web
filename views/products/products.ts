import { PrismaClient } from "@prisma/client"
import express from "express";

const prisma = new PrismaClient();

const routeProducts = express.Router();

routeProducts.get("/products", async (req, res) => {
  const search: string = req.query.search as string;
  const searchQuery = search
    ? {
        name: {
          contains: search,
        },
        brand: {
          contains: search,
        },
        productSeller: {
          sellerName: {
            contains: search,
          },
        },
      }
    : {};
  const altProducts = await prisma.$transaction([
    prisma.product.count({
      where: {
        ...searchQuery,
      },
    }),
    prisma.product.findMany({
      where: {
        ...searchQuery,
      },
      select: {
        name: true,
        brand: true,
        productSeller: {
          select: {
            addressCity: {
              select: {
                name: true,
              },
            },
          },
        },
        images: {
          where: {
            main: true,
          },
          take: 1,
          select: {
            url: true,
          },
        },
        ratings: {
          select: {
            rate: true,
          },
        },
        value: true,
      },
    }),
  ]);
  const products = altProducts[1];
  products.forEach((product: any) => {
    const rating =
      product.ratings.reduce(
        (acc: number, curr: { rate: number }) => acc + curr.rate,
        0
      ) / product.ratings.length;
    product.rating = rating;
    product.seller = "ASAC";
    product.ratings = undefined;
  });
  res.json({
    count: altProducts[0],
    products: altProducts[1],
  });
});

routeProducts.get("/details", async (req, res) => {
  const id: string = req.query.id as string;
  const getDetails = await prisma.product.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      brand: true,
      value: true,
      description: true,
      productSeller: {
        select: {
          sellerName: true,
          logo: true,
          addressCity: {
            select: {
              name: true,
            },
          },
        },
      },
      images: {
        select: {
          url: true,
        },
      },
      ratings: {
        select: {
          rate: true,
        },
      },
    },
  })
  
  res.json(getDetails);
});

export default routeProducts;

