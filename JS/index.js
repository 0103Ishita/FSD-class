console.log("hello world !");
let a = 10;
console.log(a);
const myname = "rahul";
console.log("hi......." + myname);
const data = `helloo... ${myname}`;
console.log(data);
const func_name=function msg(myname) {
    return myname + " "+"welcome";
}
console.log(func_name("ishita"));
(() => {
    console.log("first");
})();
function greetings(msg = "welcome")
{
    console.log("hiii" + msg);
}
greetings("rahul");
function selectlanguage(lang) {
    let data;
    if (lang == "java") {
      function java_compiler() {
        return "java compiler";
      }
      data = java_compiler();
    }
    else if (lang == "c") {
      function c_compiler() {
        return "c compiler";
      }
      data =c_compiler();
    }
    console.log(data)
}
selectlanguage("c");