import { ParseService } from '../src/services/parseService';

describe('ParseService', () => {
  let parseService: ParseService;

  beforeEach(() => {
    parseService = new ParseService();
  });

  test('should remove new lines from text', () => {
    const input = 'This is a test.\nThis should be on the same line.';
    const expectedOutput = 'This is a test.This should be on the same line.';
    const result = parseService.removeNewLines(input);
    expect(result).toBe(expectedOutput);
  });

  test('should handle empty string', () => {
    const input = '';
    const expectedOutput = '';
    const result = parseService.removeNewLines(input);
    expect(result).toBe(expectedOutput);
  });

  test('should handle string without new lines', () => {
    const input = 'This is a test without new lines.';
    const expectedOutput = 'This is a test without new lines.';
    const result = parseService.removeNewLines(input);
    expect(result).toBe(expectedOutput);
  });

  test('should handle multiple new lines', () => {
    const input = 'Line 1.\n\nLine 2.\n\n\nLine 3.';
    const expectedOutput = 'Line 1.Line 2.Line 3.';
    const result = parseService.removeNewLines(input);
    expect(result).toBe(expectedOutput);
  });
});