import { Component } from '@angular/core';
// @ts-ignore
import {Skills} from '../../../assets/skills'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills= Skills
  constructor(){
  }

}
