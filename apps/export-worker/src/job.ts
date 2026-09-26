export type ExportJob = Readonly<{ resumeId: string; format: 'pdf' | 'docx' }>;

export function validateJob(job: ExportJob): boolean {
  return job.resumeId.trim().length > 0 && ['pdf', 'docx'].includes(job.format);
}
