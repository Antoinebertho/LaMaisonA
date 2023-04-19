import { Error, Request, Response, NextFunction } from 'express';
import httpStatus from "http-status-codes";

module.exports = {
   
  logErrors: (error: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(error.stack);
    next(error);
  },
 
  pageNotFoundError: (req: Request, res: Response) => {
    let errorCode = httpStatus.NOT_FOUND;
    res.status(errorCode);
    res.render("error");
  },
 
  internalServerError: (error: Error, req: Request, res: Response, next: NextFunction) => {
    let errorCode = httpStatus.INTERNAL_SERVER_ERROR;
    console.log(`ERROR occurred: ${error.stack}`);
    res.status(errorCode);
    res.send(`${errorCode} | Sorry, our application is experiencing a problem!`);
  }
};