import app from "./app";

const port = process.env.ORT || 3000;

app.listen(port, (err: Error) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
