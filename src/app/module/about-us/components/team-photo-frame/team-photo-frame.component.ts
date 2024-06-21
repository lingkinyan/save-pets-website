import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-photo-frame',
  standalone: false,
  templateUrl: './team-photo-frame.component.html',
  styleUrl: './team-photo-frame.component.less',
})
export class TeamPhotoFrameComponent {
  @Input() imgSrc = '';
  @Input() name = '';
  @Input() position = '';
}
