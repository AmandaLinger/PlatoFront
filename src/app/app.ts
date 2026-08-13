import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginPage} from './pages/login-page/login-page';
import {InitialPage} from './pages/initial-page/initial-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoginPage, InitialPage],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('plato');
}
