export function checkIfFileAttached(req: any, res: any, next: any): any {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(404).send({ message: "No files were uploaded." });
  }

  next();
}
