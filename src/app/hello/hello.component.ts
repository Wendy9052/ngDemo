import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html', //独立视图区域
  styleUrls: ['./hello.component.sass'] //独立样式区域
})

// 逻辑处理的区域
export class HelloComponent implements OnInit {

  constructor(private fb:FormBuilder) { } //构造器 class语法的一部分

  // 样式变量

  // 其他变量

  dateFormat:Date = new Date()

  formData={
    name: '',
    password: ''
  }

  loginForm:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  age:FormControl = new FormControl('')

  title:string = ''

  type:number = 1

  colors:Array<string> = ['red','yellow','green','pink']

  name:string = 'Wendy'

  date:Date = new Date()

  box:string = 'boxV'

  itemClass:string = 'item-class'

  isActive:boolean = true

  isMax:boolean = true

  userNameValue:string = ''

  
  ngOnInit(): void {
  }

  onClick(e:Event) {
    console.log('e:',e);
  }

  onInput(e:any) { 
    console.log('e:',e);
    console.log('e.target',e.target);
    console.log('e.target.value',e.target.value); //当类型是Event的时候，该写法报错，用any替代类型即可
  }

  getUerName(v:string) {
    console.log('username',v);
    this.userNameValue = v
    console.log('userNameValue', this.userNameValue);
  }

  getBoxValue(v:any) {
    console.log('v:',v);
    console.log('v.children',v.children);
    console.log('v.children[0].value',v.children[0].value);
  }

  groupUp(v:string) {
    // this.age.setValue('24')
    this.age.setValue(v)
  }

  // 登录
  onLogin() {
    console.log('登录所提交的form表单数据：', this.loginForm);
    console.log('登录所提交的form表单数据：', this.loginForm.value);
  }

  valiDataForm:FormGroup = this.fb.group({
    username: ['',[Validators.required,Validators.maxLength(8),Validators.minLength(2)]],
    password: ['',[this.passwordValid]],
    phone: ['', [Validators.required, this.phoneValid]]
  })

  passwordValid(psw: FormControl):object{
    let value = psw.value

    if(!value) {
      return {msg: '请输入密码'}
    }else {
      const valid = value.match(/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*()_.]+)$)^[\w~!@#$%^&*()_.]{8,16}$/)
      return valid ? {} : {msg: '密码格式不正确'}
    }
  }

  phoneValid(phone: FormControl):object {
    let value = phone.value
    if(!phone) {
      return {msg: '请填写电话号码'}
    }else {
      const valid = value.match(/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/)
      return valid ? {} : {msg: '请输入正确格式的手机号'}
    }
  }

  onSubmit() {
    console.log('获取表单数据——账号：',this.valiDataForm.get('username'));
    console.log('获取表单数据——账号值：',this.valiDataForm.get('username')?.value);
    console.log('获取表单数据——密码：',this.valiDataForm.get('password'));
    console.log('获取表单数据——电话：',this.valiDataForm.get('phone'));
  }
}
