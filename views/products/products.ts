import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient();

const routeProducts = express.Router();

routeProducts.get("/products", async (req, res) => {
  const search: string = req.query.search as string;
  const results: number = req.query.results && req.query.results != '' ? Number(req.query.results as string): 10;
  const offset: number = req.query.offset && req.query.offset != '' ? Number(req.query.offset as string): 0;
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
      skip: offset,
      take: results,
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
    paging: {
      total:altProducts[0],
      offset,
      results,
    },
    products: altProducts[1],
  });
});

export default routeProducts;
