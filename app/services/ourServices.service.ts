import { Injectable } from '@angular/core';
import { ServiceItem } from '../models/serviceItemModel';
import { services } from '../mocks/servicesMock';

@Injectable()
export class OurServicesService {
    get(): ServiceItem[] {
        return services
    }
    getById(id: number): ServiceItem {
        return services[id - 1] ? services[id - 1] : null
    }
}