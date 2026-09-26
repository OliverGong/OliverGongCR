import { describe, expect, it } from 'vitest';
import { validateJob } from './job.js';

describe('validateJob', () => {
  it('accepts a valid PDF export', () =>
    expect(validateJob({ resumeId: 'demo-id', format: 'pdf' })).toBe(true));
  it('rejects an empty id', () =>
    expect(validateJob({ resumeId: ' ', format: 'docx' })).toBe(false));
});
