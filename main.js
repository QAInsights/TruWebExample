load.initialize(async function () {
});

load.action("Action", async function () {
    
    load.log(`Hello there! Let's debug`);
    
    var a = 5;
    var b = 10;
    var sum = 0;
    sum = a + b;
    load.log(sum);
    load.log("This is my change to demo Github!");
    load.log("This is my another change");
    load.log("Staging");
    load.log(`Another change`);
    //My Comment
 });

load.finalize(async function () {
});
