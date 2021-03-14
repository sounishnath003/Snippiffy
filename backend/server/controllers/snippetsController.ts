import { Router } from "express";
import {
  existsSync,
  mkdirSync,
  readFile,
  unlink,
  writeFile,
  writeFileSync,
} from "fs";
import { baseDirectory, FORBIDDEN, OK } from "../utility";
import { checkIfFileAttached } from "../utility/checkIfFileAttached";

const router = Router();

// * [GET]: Get a SnippetFile
router.get("/:label/:snippetFile", async (req, res, next) => {
  const { label, snippetFile } = req.params as {
    label: string;
    snippetFile: string;
  };
  const location: string = `${baseDirectory}/${label}/${snippetFile}`;

  readFile(location, { encoding: "utf8" }, (err, data: string) => {
    return err
      ? res.status(FORBIDDEN).send({
          success: false,
          message: `${snippetFile} snippet file does not exit!`,
        })
      : res.status(OK).send({ success: true, file: data });
  });

  next();
});

// * [POST] Create a new SnippetFile
router.post("/create", async (req, res) => {
  const { label, snippetFile } = req.body as {
    label: string;
    snippetFile: string;
  };

  const location: string = `${baseDirectory}/${label}`;
  if (!existsSync(location)) {
    mkdirSync(location, { recursive: true });
  }

  try {
    writeFileSync(`${location}/${snippetFile}`, "", { encoding: "utf-8" });
    return res
      .status(OK)
      .send({ success: true, message: `${snippetFile} file has been created` });
  } catch (error) {
    return res
      .status(FORBIDDEN)
      .send({ success: false, message: new Error(error) });
  }
});

// * [POST] Write codes in SnippetFile (SAVE)
router.post("/save", checkIfFileAttached, async (req, res, next) => {
  const { snippet }: any = req.files;
  const { label } = req.body;

  const directoryLocation: string = `${baseDirectory}/${label}`;
  const filePath: string = `${directoryLocation}/${snippet.name}`;

  if (!existsSync(filePath)) {
    mkdirSync(filePath, { recursive: true });
  }

  writeFile(filePath, snippet.data.toString(), (err) => {
    return err
      ? res.status(FORBIDDEN).send({
          success: false,
          message: `Snippet ${snippet.name} failed to create/save`,
        })
      : res.status(OK).send({
          success: true,
          message: `Snippet ${snippet.name} has been saved!`,
        });
  });

  next();
});

// * [DELETE]: Delete the request SnippetFile
router.delete("/delete/:label/:snippet", async (req, res, next) => {
  const { label, snippet } = req.body as { label: string; snippet: string };

  const location: string = `${baseDirectory}/${label}/${snippet}`;
  unlink(location, (err) =>
    err
      ? res.send(FORBIDDEN).send({
          success: false,
          message: `Snippet ${snippet} doesn't exist!`,
        })
      : res.status(OK).send({
          success: true,
          message: `Snippet ${snippet} has been deleted`,
        })
  );

  next();
});

export default router;
