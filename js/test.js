function printHtml(html) {
    document.write("<p>" + html + "</p>");
}

function printGrammar() {
    var car = {name: "宝马", price: "1000000"};
    console.log("car:" + car.name + " price:" + car.price);

    var text = "JsPrimary";
    console.log("text length:" + text.length);
    console.log("text constructor:" + text.constructor);
    console.log("text prototype:" + text.prototype);

    var person = null;
    console.log("person:" + person);
    console.log("null == undefined:" + (null == undefined));
    console.log("null === undefined:" + (null === undefined));
    console.log("typeof 'John':" + (typeof 'John'));

    var array = [1, 2, 3, 4];
    console.log("text isArray:" + isArray(text));
    console.log("array isArray:" + isArray(array));
}

function isArray(myArray) {
    return myArray.constructor.toString().indexOf("Array") > -1;
}

// 正则表达式
function regular() {
    var str = "Hello, kylingo";
    console.log("search:" + str.search("kylingo"));
    console.log("search:" + str.search("kYlingo"));
    console.log("search:" + str.search(/kYlingo/i));
    console.log("search:" + str.search(/h/g));
    console.log("replace:" + str.replace("kYlingo", "tq"));
    console.log("replace:" + str.replace(/kYlingo/i, "tq"));
    console.log("test:" + /e/.test(str));
    console.log("test:" + /z/.test(str));
    console.log("exec:" + /e/.exec(str));
    console.log("exec:" + /z/.exec(str));
    console.log("isTelNum 13645789635:" + isTelNum(13645789635));
    console.log("isTelNum 12645789635:" + isTelNum(12645789635));
    console.log("isTelNum 0755-12345678:" + isTelNum("0755-12345678"));
    console.log("isTelNum 0755-123456:" + isTelNum("0755-123456"));
    console.log("isDecimal 100.0:" + isDecimal("100.0"));
    console.log("isDecimal 100:" + isDecimal("100"));
    console.log("isChinese 您好:" + isChinese("您好"));
    console.log("isChinese Hello, kylingo:" + isChinese("Hello, kylingo"));
    console.log("isStudentNum 12345678:" + isStudentNum("12345678"));
    console.log("isStudentNum 123456789:" + isStudentNum("123456789"));
    console.log("isEmail test@163.com:" + isEmail("test@163.com"));
    console.log("isEmail test@163@com:" + isEmail("test@163@com"));
}

function isTelNum(num) {
    var reg = /^((0\d{2,3}-\d{7,8})|(1[34578]\d{9}))$/;
    return reg.test(num);
}

function isDecimal(num) {
    var reg = /^(\d+\.\d+)$/;
    return reg.test(num)
}

function isChinese(str) {
    var reg = /^[\u4E00-\u9FA5]{2,4}$/;
    return reg.test(str);
}

function isStudentNum(num) {
    var reg = /^[0-9]{8}$/;
    return reg.test(num)
}

function isEmail(str) {
    var reg = /^([0-9a-zA-Z_-])+@([0-9a-zA-Z_-])+\.([0-9a-zA-Z_-]+)$/;
    return reg.test(str);
}

function testException() {
    // try {
    //     alerts("Hello, world!");
    // } catch (err) {
    //     txt = "本页有一个错误。\n\n";
    //     txt += "错误描述：" + err.message + "\n\n";
    //     txt += "点击确定继续。\n\n";
    //     alert(txt);
    // }
}

// 调试
// 使用console.log或者浏览器调试


function testStrict() {
    // "use strict";
    x = 3.14;
    console.log("testStrict x:" + x);
}

function checkInput() {
    var doc = document.getElementById('id_check');
    doc.setCustomValidity("您的输入有误");
    if (!doc.checkValidity()) {
        document.getElementById('id_check_result').innerHTML = doc.validationMessage;
    } else {
        document.getElementById('id_check_result').innerHTML = "";
    }
}

function parseJson() {
    var json = '{"city":"shenzhen", "year":"2017"}';
    var obj = JSON.parse(json);
    console.log("parseJson city:" + obj.city + " year:" + obj.year + " other:" + obj.other);

    var str = JSON.stringify(obj);
    console.log("parseJson str:" + str);
}

var add = (function () {
    var count = 0;
    return function () {
        count += 1;
        console.log("add count:" + count);
        return count;
    }
})();
