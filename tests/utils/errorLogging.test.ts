// tests/utils/errorLogging.test.ts
import { isError, logError, handleError } from '~/utils/errorLogging';

describe('isError', () => {
  it('should return true for Error objects', () => {
    expect(isError(new Error())).toBeTruthy();
  });

  it('should return false for non-Error objects', () => {
    expect(isError({})).toBeFalsy();
  });
});

// Additional tests for logError and handleError can follow a similar pattern
