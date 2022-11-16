import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MessageGeneratorComponent } from "./pages/message-generator/message-generator.component";
import { RizkySandyComponent } from "./pages/rizky-sandy/rizky-sandy.component";
import { SampulComponent } from "./pages/sampul/sampul.component";

const routes: Routes = [
    { path: 'to', component: SampulComponent, },
    { path: 'kiki-sandy', component: RizkySandyComponent },
    { path: 'buat-undangan', component: MessageGeneratorComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule { }