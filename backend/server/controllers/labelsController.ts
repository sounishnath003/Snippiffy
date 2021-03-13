import { Router } from "express";

const router = Router();

router.get("/", async (req, res, next) => {
  res.status(200).send({ hello: `stay safe and happy` });

  next();
});

export default router;
