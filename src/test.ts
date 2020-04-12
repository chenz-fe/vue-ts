// 类型注解
let title: string
// title = 2
title = 'xbl'

let list: string[]
list = ['xbl']
// list = [1, 2]

let arr: any[]
arr = ['xbl', 1, 2]

function greeting1(person: string): string {
  return 'Hello ' + person
}

function info1(): void {
  console.log('This is info msg')
}

function greeting(person: string, msg?: string) {
  return 'Hello ' + person + ' ' + msg
}
console.log(greeting('xbl', 'nihaowa'))

// 函数重载
function info(a: { name: string }): string
function info(a: string): { name: string }
function info(a: { name: string } | string): string | { name: string } {
  if (typeof a === 'object') {
    return a.name
  } else {
    return { name: a }
  }
}

class MyComp {
  private _foo: string // 私有属性，不能在类的外部访问
  protected bar: string // 保护属性，可以在子类中访问
  // 构造函数参数加修饰符，能够定义为成员属性
  constructor(public tua = 'tua', fooVal: string, barVal: string) {
    this._foo = fooVal
    this.bar = barVal
  }
  // 方法也有修饰符
  private someMethod() {
    return ''
  }
  // 存取器：属性方式访问，可添加额外逻辑，控制读写性
  get foo() {
    return this._foo
  }
  set foo(val) {
    this._foo = val
  }
}

// 接口
interface Person {
  firstName: string
  lastName: string
}

function greeting2(person: Person) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

const xbl = { firstName: 'x', lastName: 'bl' }
console.log(greeting2(xbl))

// 泛型
interface Result<T> {
  ok: 0 | 1
  data: T
}

function getData<T>(): Result<T> {
  const data: any = [
    { id: 1, name: '类型注解' },
    { id: 2, name: '编译型语言' }
  ]
  return { ok: 0, data }
}

// 装饰器
function log(target: any) {
  target.prototype.log = function() {
    console.log('this is a log: ' + this.bar)
  }
}

// 方法装饰器
function withLog(target: any, name: string, descriptor: any) {
  const fn = descriptor.value
  descriptor.value = function(val: string) {
    console.log('this is wothLog...')
    fn.call(this, val)
  }
  return descriptor
}

// 属性装饰器
function mua(param: string) {
  return function(target: any, name: string) {
    target[name] = param + name
  }
}

@log
class Foo {
  bar = 'bar'
  log() {}
  @mua('mua~~') ns!: string
  @withLog
  setBar(val: string) {
    this.bar = val
  }
}

const foo = new Foo()
foo.log()
console.log(foo.ns)
foo.setBar('set new bar')
console.log(foo.bar)
