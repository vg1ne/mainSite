import { Injectable } from '@angular/core';
import { Profit } from '../models/profitModel';
import { profit } from '../mocks/whyWeMock';

@Injectable()
export class WhyWeService {
    get(): Profit[] {
        return profit
    }
}