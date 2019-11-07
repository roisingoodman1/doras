import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TableSlideNumberService {
  currentSlide: number | null;
  constructor() { }
}
