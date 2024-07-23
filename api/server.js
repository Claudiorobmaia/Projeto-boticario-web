import express from "express";
import cors from 'cors';
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const app = express();
app.use(express.json());
app.use(cors());


app.post("/produtos", async (req, res) => {
  await prisma.product.create({
    data: {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    },
  });
  res.status(201).json(req.body);
});
//-------------------
app.get("/produtos", async (req, res) => {
  const product = await prisma.product.findMany();

  res.status(200).json(product);
});
//-----------------------
app.put("/produtos/:id", async (req, res) => {
  await prisma.product.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
    },
  });

  res.status(201).json(req.body);
});
//--------------------------
app.delete("/produtos/:id", async (req, res) => {
  await prisma.product.delete({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "Produto deletado com sucesso!" });
});

app.listen(3000);
