export function sanitizeInput(input: string): string {
    return input.replace(/[\r\n]+/g, ' ').trim();
}

export function sanitizeFileName(fileName: string): string {
    return fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
}