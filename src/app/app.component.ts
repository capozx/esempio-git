import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpinningCatComponent } from './spinning-cat/spinning-cat.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpinningCatComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'esempio-git';

  askDataToUser(): void {
    window.confirm("Sei sicuro di far schifo?");
  }
}
