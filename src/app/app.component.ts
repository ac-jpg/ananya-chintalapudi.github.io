import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMountain } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  toggleDetails(orgId: string): void {
    const orgCard = document.getElementById(orgId)?.parentElement;
    const isOpen = orgCard?.classList.contains('open');
    
    document.querySelectorAll('.org-card').forEach((card) => card.classList.remove('open'));
    
    if (!isOpen) {
      orgCard?.classList.add('open');
    }
    
  }

  faMountain = faMountain;
  faCar = faCar;
  faCoffee = faCoffee;

}
