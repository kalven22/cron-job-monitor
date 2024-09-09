// src/app/models/job.model.ts

export interface Job {
    command: string;
    schedule: string;
    status: string;
  }
  
export interface GroupedJobs {
    morning: Job[];
    afternoon: Job[];
    evening: Job[];
  }
  