import { Request, Response, NextFunction } from 'express'

export interface RouterPros {
	req: Request
	res: Response
	next: NextFunction
}
