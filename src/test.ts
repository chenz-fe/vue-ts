// 类型注解
let title: string;
// title = 2
title = 'xbl';

let list: string[];
list = ['xbl'];
// list = [1, 2]

let arr: any[];
arr = ['xbl', 1, 2];

function greeting1(person: string): string {
  return 'Hello ' + person;
}

function info1(): void {
  console.log('This is info msg');
}

function greeting(person: string, msg?: string) {
  return 'Hello ' + person + ' ' + msg;
}
console.log(greeting('xbl', 'nihaowa'));

// 函数重载
function info(a: { name: string }): string;
function info(a: string): { name: string };
function info(a: { name: string } | string): string | { name: string } {
  if (typeof a === 'object') {
    return a.name;
  } else {
    return { name: a };
  }
}
