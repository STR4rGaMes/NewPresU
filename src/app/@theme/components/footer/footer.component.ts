import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
  <footer style="color:rgb(48, 11, 83);">
  <div style="text-aling=center; color:rgb(48, 11, 83);">© 2020 Copyright: UNAM-Modulo de Gestion Presupuestal
  </div>
</footer>
  `,
})
export class FooterComponent {
}

// `
// <span class="created-by">
//   Created with ♥ by <b><a href="https://akveo.page.link/8V2f" target="_blank">Akveo</a></b> 2019
// </span>
// <div class="socials">
//   <a href="#" target="_blank" class="ion ion-social-github"></a>
//   <a href="#" target="_blank" class="ion ion-social-facebook"></a>
//   <a href="#" target="_blank" class="ion ion-social-twitter"></a>
//   <a href="#" target="_blank" class="ion ion-social-linkedin"></a>
// </div>
// `
// ,