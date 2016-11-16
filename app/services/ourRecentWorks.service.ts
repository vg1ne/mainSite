import { Injectable } from '@angular/core';
import { Work } from '../models/workModel';
import { ourRecentWorks } from '../mocks/ourRecentWorksMock';

@Injectable()
export class OurRecentWorksService {
    getOurRecentWorks(): Work[] {
        return ourRecentWorks
    }
}