import { NextFunction, Request, Response } from "express";
import moment from "moment";
// import formidable from "formidable";

// export const loggerMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   console.log("using what method", req.method, "asking what", req.path);
//   next();
// };

export function loggerMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log(
`[${moment().format("YYYY-MM-DD hh:mm:ss")}]`,
    "Request",
    req.path);

  next();
}

// export function isLoggedIn(req: Request, res: Response, next: NextFunction) {
//   if (req.session["isLoggedIn"] == true) {
//     next();
//   } else {
//     res.redirect("/");
//   }
// }

// const form = formidable({
//   uploadDir: "upload",
//   keepExtensions: true,
//   maxFiles: 1,
//   filter: (part) => part.mimetype?.startsWith("image/") || false,
// });

// export function uploadFile(req: Request, res: Response, next: NextFunction) {
//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       res.json({ message: "Upload file error" });
//     }

//     req.body.description = fields.description ? fields.description[0] : "";

//     console.log("check real files",files)
//     console.log("check files",files.image![0].newFilename)
//     req.body.newFileName = files.image ? files.image[0].newFilename : "";

//     next();
//   });
// }

// for your own reference
// app.post("/upload", (req, res) => {
//   const form = formidable({
//     uploadDir: "upload",
//     keepExtensions: true,
//     // maxFiles: 1,
//     // maxFileSize: 200 * 1024, // the default limit is 200KB
//     filter: (part) => part.mimetype?.startsWith("image/") || false,
//   });

//   form.parse(req, (err, fields, files) => {
//     if (err) {
//       // next(err);
//       console.error(err);
//       return;
//     }

//     let newFileNameList = [];

//     for (let entry of files.file!) {
//       console.log(entry.newFilename);

//       newFileNameList.push(entry.newFilename);
//     }

//     console.log("check files", files);
//     res.json({
//       description: fields.description![0],
//       newFileNameList,
//     });
//   });
// });