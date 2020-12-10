import express from "express";
import { PrismaClient } from "@prisma/client";
import bodyParser from "body-parser";

const prisma = new PrismaClient();

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.get("/", async (req, res) => {
  const user = await prisma.user.findMany();
  res.send({ user });
});

server.get("/create", (req, res) => {
  res.send(
    `<form method="POST">
    <input id="name" name="name"/>
    <button type="submit">Create</button>
    </form>`
  );
});

server.post("/create", async (req, res) => {
  await prisma.user.create({
    data: {
      name: req.body.name,
    },
  });

  res.redirect("/");
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log("listening on http://localhost:" + PORT);
});
