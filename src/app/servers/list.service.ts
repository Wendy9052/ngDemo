import { Injectable } from '@angular/core';

@Injectable({
  // 默认的作用域是root，也可以用null,
  providedIn: 'root'
})
export class ListService {

  constructor() {}

  list:Array<string>=['wendy','tony','niko']

  getList() {
    return this.list
  }

  addList(item:string) {
    this.list.push(item)
  }

}
