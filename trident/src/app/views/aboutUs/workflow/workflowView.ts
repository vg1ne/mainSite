import { Component, Inject } from "@angular/core";
import {MainService} from "../../../services/main.service"

@Component({
  templateUrl: "./workflowView.html"
})
export class WorkflowView {
  constructor(@Inject(MainService) private mainService){}

  technologies = this.mainService.technologies
}
