import { HighlightsDirectives } from './../Directives/highlights-directives';
import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list-component',
  imports: [HighlightsDirectives],
  templateUrl: './student-list-component.html',
  styleUrl: './student-list-component.css',
})
export class StudentListComponent {
  // ===== Definisco l'array con gli oggetti al suo interno

  students = [
    {
      name: 'Franco',
      grade: 8,
      present: true,
    },
    {
      name: 'Davide',
      grade: 5,
      present: false,
    },
    {
      name: 'Clara',
      grade: 10,
      present: true,
    },
    {
      name: 'Gerry',
      grade: 6,
      present: false,
    },
    {
      name: 'Giulia',
      grade: 4,
      present: true,
    },
  ];

  // ===== Definisco un metodo che utilizzero con @SWITCH per assegnare una categoria ad un grado.

  getCategoryGrade(grade: number): string {
    if (grade >= 9) return 'Awesome';
    if (grade >= 7) return 'Good';
    if (grade >= 6) return 'Sufficent';
    return 'Insufficent';
  }
}
