import type { RequestHandler, Request, Response, NextFunction } from 'express';

const error: RequestHandler = function handleError (req: Request, res: Response, next: NextFunction){
    return res.sendStatus(404);
}

export default error;