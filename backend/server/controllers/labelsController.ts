import { Router } from "express";
import { existsSync, mkdir, mkdirSync, readdirSync, rmdirSync } from "fs";
import {
  baseDirectory,
  FORBIDDEN,
  INTERNAL_ERROR,
  NOT_FOUND,
  OK
} from "../utility";

const router = Router();

// * [GET]: getting all labels
router.get("/", async (req, res) => {
  if (!existsSync(baseDirectory)) {
    mkdirSync(baseDirectory, { recursive: true });
  }
  return res
    .status(OK)
    .send({ labels: readdirSync(baseDirectory, { encoding: "utf8" }) });
});

// * [GET]: getting a specific label through body
router.get("/:name", async (req, res, next) => {
  const { name } = req.body;
  const location: string = `${baseDirectory}/${name}`;

  if (existsSync(location)) {
    return res.status(OK).send({ files: readdirSync(location) });
  }

  res
    .status(NOT_FOUND)
    .send({ success: false, message: `Requested Label does not exits` });

  next();
});

// * [POST]: Create a new label
router.post("/create", async (req, res) => {
  const { label } = req.body;
  console.log({label});
  
  const location = `${baseDirectory}/${label}`;
  if (existsSync(location)) {
    return res
      .status(FORBIDDEN)
      .send({ success: false, message: `Label already exists!!` });
  }

  return mkdir(location, { recursive: true }, (err) => {
    if (err) {
      return res
        .status(INTERNAL_ERROR)
        .send({ success: false, message: `Label could not be created!!` });
    }

    return res
      .status(OK)
      .send({ success: true, message: `Label ${label} has been created` });
  });
});

// * [DELETE]: Delete a Label from snippets
router.delete("/delete", async (req, res, next) => {
  const { label } = req.body;
  const location = `${baseDirectory}/${label}`;

  try {
    rmdirSync(location, { maxRetries: 2 });

    res
      .status(OK)
      .send({ success: true, message: `Label ${label} has been deleted ` });
  } catch (error) {
    res
      .status(FORBIDDEN)
      .send({ success: false, message: `Label could not be deleted` });
  }

  next();
});

export default router;
