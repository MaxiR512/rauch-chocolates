import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';

platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));

  const checkbox = document.getElementById('toggleThemeCheckbox') as HTMLInputElement | null;
  const body = document.body;
  const logoImg = document.getElementById('logoImg') as HTMLImageElement | null;
  const logoCarrito = document.getElementById('logocarro') as HTMLImageElement | null;

  if (checkbox) {
    checkbox.addEventListener('change', () => {
      const dark = checkbox.checked;
      body.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
      const label = document.getElementById('toggleThemeLabel');
      
      if (logoImg) {
        logoImg.src = dark ? 'assets/img/logo4.png' : 'assets/img/logo3.jpg';
      }
      if(logoCarrito)
      logoCarrito.src = dark ? 'assets/img/Logo2.png' : 'assets/img/Logo1.png';
    });
  }