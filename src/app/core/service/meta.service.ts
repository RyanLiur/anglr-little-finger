import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaService {

  constructor(private meta: Meta) { }

  addTag() {
    this.meta.addTags([
      { name: 'keywords', content: 'Angular, RxJS, TypeScript' },
      { name: 'description', content: 'Angular Meta Service' },
      { name: 'robots', content: 'none' }, // none===noindex, nofollow
    ]);
  }
}
