import { Component, OnInit, ViewChild } from '@angular/core';
import { ListService } from '../servers/list.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  @ViewChild('titleDom') childDom: any;

  constructor(private listService:ListService) { }

  title:string = '标题'

  list:Array<string> = ['angular', 'react']

  showList:Array<string> | undefined

  ngOnInit(): void {
    console.log('注入的服务：',this.listService)
    this.showList = this.listService.getList()
    console.log('showList:',this.showList);
    
  }

  useChildFun() {
    this.childDom.valueEmite()  //调用子组件的valueEmite()方法
  }

  changeTitle() {
    this.title = '标题改了'
  }

  addListFun(v:string) {
    this.list.push(v)
  }

  addNode() {
    this.listService.addList('nodejs')
  }

}
