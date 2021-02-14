import type { RequestHandler, Request, Response, NextFunction } from 'express';

const validateBody: RequestHandler = function validateRequestBody(req: Request, res: Response, next: NextFunction){
    if(!req.body.license) return res.sendStatus(401);

    next();
}

export default validateBody;