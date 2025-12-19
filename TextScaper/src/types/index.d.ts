export interface ParsedText {
    originalText: string;
    cleanedText: string;
}

export interface FileUploadResponse {
    success: boolean;
    message: string;
    data?: ParsedText;
}