import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Job, GroupedJobs } from '../../models/job.model'; // Import the interface

@Component({
  selector: 'app-job-dashboard',
  standalone: true,
  templateUrl: './job-dashboard.component.html',
  styleUrls: ['./job-dashboard.component.css'],
  imports: [CommonModule, MatToolbarModule] // We’ll add more Material components later
})
export class JobDashboardComponent implements OnInit {
  cronJobs: GroupedJobs = {
    morning: [],
    afternoon: [],
    evening: []
  };

  ngOnInit(): void {
    // Mock jobs for morning, afternoon, evening
    this.cronJobs = this.groupJobsByTimeOfDay(this.fetchJobs());
  }

  fetchJobs(): Job[] {
    // This is where you can imagine API data coming in
    return [
      { command: 'Job 1', schedule: '0 9 * * *', status: 'OK' },    // Morning
      { command: 'Job 2', schedule: '0 13 * * *', status: 'Error' }, // Afternoon
      { command: 'Job 3', schedule: '0 18 * * *', status: 'OK' },    // Evening
    ];
  }

  groupJobsByTimeOfDay(jobs: Job[]): GroupedJobs {
    const grouped: GroupedJobs = {
      morning: [],
      afternoon: [],
      evening: [],
    };

    jobs.forEach(job => {
      const hour = parseInt(job.schedule.split(' ')[1], 10);
      if (hour >= 0 && hour < 12) {
        grouped.morning.push(job);
      } else if (hour >= 12 && hour < 17) {
        grouped.afternoon.push(job);
      } else {
        grouped.evening.push(job);
      }
    });

    return grouped;
  }
}
