import {PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

const routeUser = express.Router();