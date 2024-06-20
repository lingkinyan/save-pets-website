import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'left-right-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './left-right-card.component.html',
  styleUrl: './left-right-card.component.less',
})
export class LeftRightCardComponent {
  @Input() isImageLeft: boolean = true;
  @Input() imgSrc = '';
  @Input() imgAlt = '';
  @Input() content = '';
  @Input() title = '';
}
