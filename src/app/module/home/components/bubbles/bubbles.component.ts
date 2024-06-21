import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bubble',
  standalone: false,
  templateUrl: './bubbles.component.html',
  styleUrl: './bubbles.component.less',
})
export class BubblesComponent {
  @Input() content: string = '';
  @Input() imgSrc: string = '';
}
