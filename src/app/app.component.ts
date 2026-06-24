import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'docker-angular';
  
  techStack = [
    { name: 'Angular 18', icon: 'code', description: 'Modern SPA Framework' },
    { name: 'Docker', icon: 'dns', description: 'Containerization & Orchestration' },
    { name: 'TailwindCSS v3', icon: 'palette', description: 'Utility-first Styling' },
    { name: 'Angular Material', icon: 'dashboard', description: 'Premium UI Components' }
  ];
}

