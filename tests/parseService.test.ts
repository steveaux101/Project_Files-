import { ParseService } from '../src/services/parseService';

describe('ParseService', () => {
    let parseService: ParseService;

    beforeEach(() => {
        parseService = new ParseService();
    });

    test('should remove new lines from text', () => {
        const input = 'Hello\nWorld\nThis is a test.';
        const expectedOutput = 'HelloWorldThis is a test.';
        const result = parseService.parseText(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle empty string', () => {
        const input = '';
        const expectedOutput = '';
        const result = parseService.parseText(input);
        expect(result).toBe(expectedOutput);
    });

    test('should handle string with only new lines', () => {
        const input = '\n\n\n';
        const expectedOutput = '';
        const result = parseService.parseText(input);
        expect(result).toBe(expectedOutput);
    });

    test('should not alter text without new lines', () => {
        const input = 'No new lines here.';
        const expectedOutput = 'No new lines here.';
        const result = parseService.parseText(input);
        expect(result).toBe(expectedOutput);
    });
});