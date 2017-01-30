import { Component } from '@angular/core';
import { OurServicesService } from "../../services/ourServices.service";
import { ServiceItem, ServiceItemExtended } from '../../models/serviceItemModel';



@Component({
    template: require("./contactUsView.html")
})
export class ContactUsView {
    constructor(private ourServices: OurServicesService) { }

    ngOnInit() {
        let services = this.ourServices.get()
        let servicesModified = []
        services.forEach((item) => {
            if (item.providing) {
                servicesModified.push({ id: item.id, text: item.title })
            }
        })
        this.services = servicesModified
    }

    selected(item) {
        this.currentService = item
    }
    get symbolsLeft(){
        return this.textareaMaxSymbols -this.message.length
    }
    get isClearTextArea(){
        return this.message.length === 0
    }

    private services: any[]
    private currentService: ServiceItem = null
    private message: string = ''
    private textareaMaxSymbols: number = 3000
}
