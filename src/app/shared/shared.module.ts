import { NgModule } from "@angular/core";
import { NgModelGroup } from "@angular/forms";
import { CardComponent } from "./card/card.component";

@NgModule({
    declarations: [CardComponent],
    exports: [CardComponent]

})
export class SharedModule{

}