import { Component } from '@angular/core';
import {ItemHome} from '../../components/item-home/item-home';
import {RouterLink} from '@angular/router';
import {FooterComponent} from '../../components/footer-component/footer-component';
import {BtnConfig} from '../../components/btn-config/btn-config';

@Component({
  selector: 'app-home-page',
  imports: [
    ItemHome,
    RouterLink,
    FooterComponent,
    BtnConfig
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {

}
