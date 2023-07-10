import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-soap-bubble',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './soap-bubble.component.html',
  styleUrls: ['./soap-bubble.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SoapBubbleComponent {

}
