let father = document.querySelector("#father");
let currentDiv = document.createElement("div")
currentDiv.setAttribute("id", "my-headers")
let el = [];



let searchArray = ["Frontend", "Senior", "HTML", "CSS", "JavaScript", "Fullstack", "Midweight", "Python", "React",
    "Junior", "Sass", "Ruby", "Backend", "RoR", "Vue", "Django"
];




function getData(data) {
    let div;
    data.map((data) => {
        div = document.createElement("div");
        div.setAttribute("id", data.id)
        div.setAttribute("class", "god row ")
        div.innerHTML = `<div class="first col-md-6 col-sm-12 container mb-md-3 bg-white shadow-lg   ">
        <img src=${data.logo} alt=${data.position} class="my-img">
        <h3  class=" d-md-inline company">${data.company}</h3>
        <h3  class="d-md-inline badge badge-pill new "id=${data.new?"new":"none"} >${data.new ?"NEW!":''}</h3>
        <h3  class=" d-md-inline badge badge-pill   featured " id=${data.featured?"featured":"none"}>${data.featured?"FEATURED":''}</h3>
        <h3  class="d-block" style="font-weight:bolder; color:black"> ${data.position}</h3>
        <h3 class="d-block d-md-inline">${data.postedAt}</h3>
        <h3 class="d-block d-md-inline">${data.contract}</h3>
        <h3 class="d-block d-md-inline">${data.location}</h3>
        </div>
        <div class="second col-md-6 col-sm-12 container mb-md-3 bg-white shadow-lg d-inline-block ">
        <h3 id="h2" class="filter" data-role=${data.role}>${data.role}</h3>
        <h3 class="filter" data-role=${data.level}>${data.level}</h3>
        <h3 class="filter" data-role=${data.languages[0]}> ${data.languages.length >0? data.languages[0]:""}  </h3>    <h3 class="filter" data-role=${data.languages[1]} > ${data.languages.length >1? data.languages[1]:" "} </h3>  <h3 class="filter" data-role=${data.languages[2]}> ${data.languages.length >2? data.languages[2]:" "}   </h3>
        <h3 class="filter" data-role=${data.tools[0]}> ${data.tools.length > 0 ? data.tools[0]:" "}</h3> <h3 class="filter" data-role=${data.tools[1]}> ${data.tools.length >1 ? data.tools[1]:" "}</h3>
      </div>`
        father.appendChild(div);

    });
    searchArray.map(element => {

        let serverList = document.createElement("h3");
        serverList.setAttribute("class", "search    d-inline-block")
       currentDiv.setAttribute("class", "die container-fluid filter-div mb-md-3 bg-white shadow-md")

        if (currentDiv.childElementCount < searchArray.length) {
            serverList.innerHTML = `${element}`;
        }


        document.body.insertBefore(currentDiv, father);
        currentDiv.appendChild(serverList)
      
    })

//////////////////

    let   search =document.querySelector("#my-headers");
    console.log(search)
    let godArry = [];
    let filterGod = document.querySelectorAll(".god .filter");
    let god = document.querySelectorAll(".god");
    god.forEach(ele => godArry.push(ele))

    let second = document.querySelectorAll('.filter')
    for (let index = 0; index < second.length; index++) {
        const element = second[index];

        element.addEventListener("click", function () {
            const elementData = element.dataset.role;
            document.querySelector("#clear").classList.remove("die")

            search.classList.remove("die")
            main(filterGod, god, elementData, godArry)    

        })
        

    }
 
    for (let index = 0; index< search.children.length; index++) {
        const element = search.children[index];
         element.addEventListener("click",function(){
           main(filterGod, god, element.innerHTML, godArry)
           
         })
         
    }
   
    
}

function main(filterGod, god, elementData, godArry) {
    let arr = [];
    filterGod.forEach(function (el) {
        if (el.dataset.role === elementData) {
            arr.push(el.parentElement.parentElement.id)
        }
    })
    let array3 = arr.filter(function (obj) {
        return godArry.indexOf(obj) == -1;
    });
    god.forEach(element => {
        element.classList.add("die")
      
    })
    array3.forEach(element => {
    
        document.getElementById(element).classList.remove("die");
        
    })

}

let myInit = {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    mode: "cors",
    catche: "default"
};

let myRequest = new Request("./data.json", myInit);

function returnData() {

    fetch(myRequest)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (data) {
            getData(data);
        })


}
returnData()