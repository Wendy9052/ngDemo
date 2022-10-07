import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TestPipe } from './pipes/test.pipe';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';

// 服务需要手动注入
import { ListService } from './servers/list.service' 

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestPipe,
    HomeComponent,
    TitleComponent
  ],
  // 声明组件要用到的类
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule, //响应式表单模块
  ],
  providers: [ListService], //服务注入至此
  bootstrap: [AppComponent]
})
export class AppModule { }
