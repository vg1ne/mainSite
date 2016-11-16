import { Injectable } from '@angular/core';
import { Slide } from '../models/slideModel';
import { slides } from '../mocks/slidesMock';

@Injectable()
export class SlidesService {
    getHomeSlides(): Slide[] {
        return slides.home
    }
}