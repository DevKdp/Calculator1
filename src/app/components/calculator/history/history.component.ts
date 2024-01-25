import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent {
  histories: History[] = [];
  @Input() mesage!: string;
}
