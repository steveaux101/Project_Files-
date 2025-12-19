class UploadController {
    constructor(private parseService: ParseService) {}

    async handleFileUpload(req: Request, res: Response) {
        try {
            const file = req.file; // Assuming file is uploaded using multer
            if (!file) {
                return res.status(400).json({ message: 'No file uploaded' });
            }

            const cleanedData = this.parseService.parseText(file.buffer.toString());
            return res.status(200).json({ data: cleanedData });
        } catch (error) {
            return res.status(500).json({ message: 'Error processing file', error: error.message });
        }
    }
}

export default UploadController;