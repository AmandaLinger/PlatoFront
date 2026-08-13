import { Component } from '@angular/core';
import {BtnInitial} from '../../components/btn-inital/btn-initial';
import {BtnOrange} from '../../components/btn-orange/btn-orange';

@Component({
  selector: 'app-initial-page',
  imports: [
    BtnInitial,
    BtnOrange
  ],
  templateUrl: './initial-page.html',
  styleUrl: './initial-page.scss',
})
export class InitialPage {

}
