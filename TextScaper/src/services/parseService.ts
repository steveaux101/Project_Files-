export class ParseService {
    public static removeNewLines(text: string): string {
        return text.replace(/[\r\n]+/g, ' ').trim();
    }

    public static parseTextFile(fileContent: string): string {
        // Additional parsing logic can be added here if needed
        return this.removeNewLines(fileContent);
    }
}