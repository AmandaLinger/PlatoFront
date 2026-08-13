import { Component } from '@angular/core';
import {FooterComponent} from '../../components/footer-component/footer-component';
import {BtnOrange} from '../../components/btn-orange/btn-orange';

@Component({
  selector: 'app-login-page',
  imports: [FooterComponent, BtnOrange],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {

}
