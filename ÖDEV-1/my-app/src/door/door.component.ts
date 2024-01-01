import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-door',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './door.component.html',
  styleUrl: './door.component.scss',
  animations: [
  ]
})
export class DoorComponent implements OnInit {
  private element: HTMLElement | null = null;

  ngOnInit(): void {
    this.element = document.querySelector(".door");
    if (this.element) {
      this.element.addEventListener("click", this.toggleDoor.bind(this));
    }
  }

  private toggleDoor(): void {
    if (this.element) {
      this.element.classList.toggle("doorOpen");
    }
  }
}