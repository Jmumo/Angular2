import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { HeaderComponent } from "./header/header.component";
import { TaskComponent } from "./tasks/task/task.component";
import { TasksComponent } from "./tasks/tasks.component";
import { BrowserModule } from "@angular/platform-browser";
import { CardComponent } from "./shared/card/card.component";
import { FormsModule } from "@angular/forms";
import { NewTaskComponent } from "./tasks/new-task/new-task.component";
import { SharedModule } from "./shared/shared.module";



@NgModule({
    declarations: [AppComponent,HeaderComponent,UserComponent,TasksComponent,NewTaskComponent,TaskComponent],
    bootstrap: [AppComponent],
    imports: [BrowserModule, FormsModule , SharedModule]
})
export class AppModule{

}