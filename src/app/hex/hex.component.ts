import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hex',
  templateUrl: './hex.component.html',
  styleUrls: ['./hex.component.css']
})

export class HexComponent {
  @Input() hora: string | undefined;
  @Input() titulo: string | undefined;
  @Input()
  fontSize!: string | '4em';
  @Input()
  titleSize!: string | '1em';
}
