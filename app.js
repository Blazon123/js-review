const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
        "https://th.bing.com/th/id/OIP.gZtkfEFgKskScIhpRGaEawHaHa?w=189&h=189&c=7&r=0&o=5&pid=1.7 " ,
        text:
         "inam a babyy what do you think about it anyways hoehuhdmdhfmf,lrflkjgfkjlkkhll,hllll,k",
    },

     {
        id: 2,
        name: "john gold",
        job: "web designer",
        img:"https://th.bing.com/th/id/OIP.6joHn6OqkRekernB9H--lQHaHa?w=161&h=180&c=7&r=0&o=5&pid=1.7",
        text:
        "jdfjhdjrkgkm,mfkjfdjkfmklkmfkjgroikgklrklfjgvjm,gklgjiofjklgfkjngkmglkgjjgtrklmlgrkmgjkm",
    },

     {
        id: 3,
        name: "ana samatha",
        job: "intern",
        img:"https://th.bing.com/th?q=Circle+Face+and+Hair+Style&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247" ,
        text: "jryudrihfjkjfeiurkerujfnrehufeiujrekjhgkjregfurejerknjgferhiugnjgjyuherjufrjnerkjfrnjekrhfjkernkgfheruiherhfnjkrnrjkj",
    },

     {
        id: 4,
        name: "bee daniels",
        job: "web developer",
        img:"https://th.bing.com/th?q=High+Cut+Hair+Style+Circle+Face&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-WW&cc=NG&setlang=en&adlt=moderate&t=1&mw=247" ,
        text: "kljsjkuskjjfklfijoeiowmdwkmwkjenjdfnejkwenfhekjwemklwemkwemwlkefkjenfk",
    },
]


const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
   showPerson();
});

// show person based on item

function showPerson (){
 const item = reviews[currentItem];
    img.src = item.img;
     author.textContent = item.name;
     job.textContent = item.job;
     info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function(){
    currentItem++;
    if (currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
})

// show prev person
prevBtn.addEventListener("click",function(){
    currentItem--;
     if (currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson();
})

// show random person

randomBtn.addEventListener("click", function(){
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
})