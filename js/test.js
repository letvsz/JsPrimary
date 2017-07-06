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

    var person;
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
