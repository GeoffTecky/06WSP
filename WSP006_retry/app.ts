import express, { } from "express"
import { Request, Response, NextFunction } from "express";
import path from "path"
import {loggerMiddleware} from "./middleware";
import expressSession from "express-session";

const app = express();
const PORT = 8080;

app.use(express.urlencoded());
// app.use(express.json());
app.use(loggerMiddleware);

app.get(" /hi", (req: Request, res:Response) => {
    res.send("hello world");
  });
  app.use(express.static("public")); 

  app.post("/memo", (req, res)=> {

    console.log("post request to memo")
    console.log("check body", + req.body)
    res.send("returned from /memo post route handler")
  });


  app.use( expressSession ({
    secret: "Tecky Academy teaches typescript",
    resave: true,
    saveUninitialized: true,
  
  })
  );

  app.use((req: Request, res: Response, next: NextFunction) => {
    console.log(req.session.id, "this is the counter ", req.session["counter"]," for this session");
    if(!req.session["counter"]== undefined ){
    req.session["counter"] = 0;}
    else {
    req.session["counter"] ++

    }
    next();
  }) 

declare module "express-session" {
  interface SessionData {
    name?: string;
    counter?: any;
  }
}

app.use("/image", express.static("upload"));

app.use((req: Request, res: Response) => {
    res.status(404).sendFile(path.resolve("./public/404.html"));
});

app.listen (PORT, () => {
    console.log(`listening to port http://localhost:${PORT}/`);
})