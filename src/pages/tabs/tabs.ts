import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CremesPage } from '../cremes/cremes';
import { PromocoesPage } from '../promocoes/promocoes';
import { LanchesPage } from '../lanches/lanches';
import { BebidasPage } from '../bebidas/bebidas';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = CremesPage;
  tab5Root = PromocoesPage;
  tab6Root = LanchesPage;
  tab7Root = BebidasPage;

  constructor() {

  }
}
