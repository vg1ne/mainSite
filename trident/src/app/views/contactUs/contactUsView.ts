import { Component } from '@angular/core';
import { OurServicesService } from "../../services/ourServices.service";
import { ServiceItem } from '../../models/serviceItemModel';
import { FormBuilder, FormGroup, Validators,FormControl  } from '@angular/forms';

@Component({
  templateUrl: "./contactUsView.html"
})
export class ContactUsView {
    complexForm : FormGroup;
    constructor(private ourServices: OurServicesService,
                fb: FormBuilder) {
        this.complexForm = fb.group({
            'message' : [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(1000)])],
            'name': [null, Validators.compose([Validators.required, Validators.maxLength(50)])],
            'email': new FormControl('', [Validators.compose([Validators.required, EmailValidator.isValidMailFormat])])
        })
    }

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
    submitForm(value: any):void{

    }

    private services: any[]
    private currentService: ServiceItem = null
}

export class EmailValidator {

    static isValidMailFormat(control: FormControl){
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        if (control.value != "" && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { "Please provide a valid email": true };
        }

        return null;
    }

}
