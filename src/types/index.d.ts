interface FileUpload {
    filename: string;
    mimetype: string;
    size: number;
}

interface ParsedData {
    originalText: string;
    cleanedText: string;
}