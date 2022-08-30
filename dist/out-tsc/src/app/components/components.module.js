import { __decorate } from "tslib";
// This File Is Required For Custom Components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { PopoverComponent } from '../components/popover/popover.component';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { FormsModule } from '@angular/forms';
// import { SigninComponent } from './signin/signin.component';
import { SharedModule } from '../directives/shared.module';
import { CodeInputModule } from 'angular-code-input';
const components = [
    PopoverComponent,
    // SigninComponent,
    HeaderComponent,
    FooterComponent
];
let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        declarations: [
            ...components
        ],
        imports: [
            CommonModule,
            IonicModule,
            FormsModule,
            CodeInputModule,
            SharedModule,
            ReactiveFormsModule
        ],
        exports: [
            ...components,
        ]
    })
], ComponentsModule);
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map