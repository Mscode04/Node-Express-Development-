const sayHello=require('./modone')
sayHello()
const hi=require('./unamed')
hi()
const dataone=require('./demo-base')
console.log(dataone.name);
console.log(dataone.age);
console.log(dataone.wife);
console.log(dataone.rep());
console.log(dataone.msg());

var cl=require('cli-color')
console.log(cl.red("Ms Shaheen KP"));
console.log(cl.blueBright.bgGreen("Ms Shaheen KP"));
console.log(cl.blueBright.underline("Ms Shaheen KP"));

var x=require('upper-case')
console.log(x.upperCase("Ms Shaheen KP"));