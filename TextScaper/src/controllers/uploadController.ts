import { Request, Response } from 'express';
import { ParseService } from '../services/parseService';

export class UploadController {
    private parseService: ParseService;

    constructor() {
        this.parseService = new ParseService();
    }

    public uploadFile = (req: Request, res: Response): void => {
        if (!req.file) {
            res.status(400).send('No file uploaded.');
            return;
        }

        const fileContent = req.file.buffer.toString('utf-8');
        const parsedContent = this.parseService.removeNewLines(fileContent);

        res.status(200).json({
            message: 'File processed successfully.',
            data: parsedContent,
        });
    };
}