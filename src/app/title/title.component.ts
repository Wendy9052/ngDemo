import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ListService } from "../servers/list.service";

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.sass']
})
export class TitleComponent implements OnInit {

  showList:Array<string> | undefined

  constructor(private listService:ListService) { }

  @Input()
  title?:string

  @Output() addList = new EventEmitter()

  valueEmite() {
    this.addList.emit('vue')
  }

  // 组件初始化
  ngOnInit(): void {
    console.log('ngOnInit');
    this.showList = this.listService.getList()
  }

  // 组件更新
  ngOnChanges(): void {
    console.log('ngOnChanges');
  }
  
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }
  
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
  
  // 组件销毁
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
  

}
