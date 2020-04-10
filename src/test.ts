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

function info(): void {
  console.log('This is info msg')
}

function greeting(person: string, msg?: string) {
  return 'Hello ' + person + msg
}
console.log(greeting('xbl', 'nihaowa'))
