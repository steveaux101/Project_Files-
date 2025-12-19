export class ParseService {
    parseText(fileContent: string): string {
        return fileContent.replace(/\n/g, ' ').trim();
    }
}