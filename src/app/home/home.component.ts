import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { MainComponent } from '../components/main/main.component';
import { AboutComponent } from '../components/about/about.component';
import { EducationComponent } from '../components/education/education.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ResumeComponent } from '../components/resume/resume.component';
import { PublicationComponent } from '../components/publication/publication.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MainComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    ExperienceComponent,
    ProjectsComponent,
    PublicationComponent,
    ResumeComponent,
    FooterComponent,
    AboutComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
