import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-buttons-container',
  standalone: false,
  templateUrl: './buttons-container.html',
  styleUrl: './buttons-container.scss'
})
export class ButtonsContainer {
  @Input({ required: true }) isInEditMode: boolean = false;
  @Output('onEditButton') onEditButtonEmitt = new EventEmitter<void>();
  @Output('onCancelButton') onCancelButtonEmitt = new EventEmitter<void>();

  onEditButton() {
    this.onEditButtonEmitt.emit();
  }

  onCancelButton() {
    this.onCancelButtonEmitt.emit();
  }
}