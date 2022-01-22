timer_counter = 0;
timer_check = "";
answer_holder = "";
score = 0;
arraydraw = ["cat","pepper","bowl","bottle", "ruler", "pencil"];

randomnumber = Math.floor((Math.random()*arraydraw.length));

itemtobedrawn = arraydraw[randomnumber];

document.getElementById("stbd").innerHTML = itemtobedrawn;
console.log(itemtobedrawn);