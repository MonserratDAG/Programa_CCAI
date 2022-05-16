import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//IMPORTS DE COMPONENTS
import { BlogCardModule } from './@components/blog-card/blog-card.module';
import { CtaModule } from './@components/cta/cta.module';
import { CustomerSupportModule } from './@components/customer-support/customer-support.module';
import { FeatureModule } from './@components/feature/feature.module';
import { FooterModule } from './@components/footer/footer.module';
import { HeaderModule } from './@components/header/header.module';
import { IntroductionModule } from './@components/introduction/introduction.module';
import { NewsletterModule } from './@components/newsletter/newsletter.module';
import { ServicesModule } from './@components/services/services.module';
import { TestimonialModule } from './@components/testimonial/testimonial.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BlogCardModule,
    CtaModule,
    CustomerSupportModule,
    FeatureModule,
    FooterModule,
    HeaderModule,
    IntroductionModule,
    NewsletterModule,
    ServicesModule,
    TestimonialModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
