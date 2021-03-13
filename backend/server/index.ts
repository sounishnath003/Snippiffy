import express, { json, urlencoded } from "express";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import { LabelsController, SnippetsController } from "./controllers";

const PORT = 5000 || process.env.PORT;
const app = express();

export function serverStart() {
  serverConfig();
  try {
    app.use("/labels", LabelsController);
    app.use("/snippets", SnippetsController);

    app.listen(PORT, () =>
      console.log(`server is running on http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error({ error });
  }
}

function serverConfig() {
  app.use(urlencoded({ extended: true }));
  app.use(json());
  app.use(morgan("dev"));
  app.use(fileUpload());
}
