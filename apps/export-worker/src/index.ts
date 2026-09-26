import { validateJob, type ExportJob } from './job.js';

export function processExport(job: ExportJob): string {
  if (!validateJob(job)) throw new Error('Invalid export job');
  return `queued:${job.resumeId}:${job.format}`;
}
