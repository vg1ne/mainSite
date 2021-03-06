import {Routes, RouterModule} from '@angular/router'
import {PortfolioView} from "./views/portfolio/portfolioView"
import {PortfolioItemView} from "./views/portfolioItem/portfolioItemView"
import {HomeView} from "./views/home/homeView"
import {ContactUsView} from "./views/contactUs2/contactUsView"
import {OurServiceView} from "./views/ourService/ourServiceView"
import { OurWorkView } from "./views/ourWork/ourWorkView"
import { ExperienceView } from "./views/aboutUs/experience/experienceView"
import { WorkflowView } from "./views/aboutUs/workflow/workflowView"

import { EmailView } from "./views/email/emailView"
import { FAQView } from "./views/FAQ/FAQView"
import { PrivacyPolicyView } from "./views/aboutUs/privacyPolicy/privacyPolicyView"
import { TermsAndConditionsView } from "./views/aboutUs/termsAndConditions/termsAndConditionsView"

export const routes: Routes = [
    {path: '', component: HomeView},
    {path: 'portfolio', component: PortfolioView},
    {path: 'portfolio/:id', component: PortfolioItemView},
    {path: 'contactUs', component: ContactUsView},
    {path: 'ourService/:id', component: OurServiceView},
    {path: 'ourWork/:id', component: OurWorkView},
    { path: 'experience', component: ExperienceView },
    { path: 'workflow', component: WorkflowView },

    { path: 'email', component: EmailView },
    { path: 'faq', component: FAQView },
    { path: 'privacyPolicy', component: PrivacyPolicyView },
    { path: 'termsAndConditions', component: TermsAndConditionsView },

    { path: '**', component: HomeView }
];
export const routing = RouterModule.forRoot(routes);

