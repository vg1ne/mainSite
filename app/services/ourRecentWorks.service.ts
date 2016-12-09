import {Injectable} from '@angular/core';
import {Work} from '../models/workModel';
import {ourRecentWorks} from '../mocks/ourRecentWorksMock';

@Injectable()
export class OurRecentWorksService {
    get(): Work[] {
        return ourRecentWorks
    }

    getTransformed() {
        let ourWorksTransformed = []
        let counter = 0;
        let item = [];

        for (let i = 0, l = ourRecentWorks.length; i < l; i++) {
            if (counter < 2) {
                item.push(ourRecentWorks[i])
                counter++;
            }
            else {
                ourWorksTransformed.push(item);
                item = [];
                counter = 0;
            }

        }
        return ourWorksTransformed
    }

    getById(id: number): Work {
        return ourRecentWorks[id - 1] ? ourRecentWorks[id - 1] : null
    }
}