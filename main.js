var colors = ["blue","red","orange","green","yellow","purple","teal","black","grey","hotpink","cyan","brown"] ;
const main = document.querySelector('#main') ;

function generate(mycolor){
    const body = document.querySelector('#body') ;
    randomColor = colors[Math.floor(Math.random() * colors.length)];
     body.style.backgroundColor = mycolor ;
    // console.log(color) ;
    // if(mycolor === randomColor){
    //    alert("🏆Congratulations🏆");
    // }else{
    //     alert("❌Try Again❌");
    // }
}

colors.forEach(element => {
    newSection = document.createElement('section') ;
    main.appendChild(newSection) ;
    newDiv = document.createElement('div') ;
    newSection.appendChild(newDiv) ;
    newDiv.style.backgroundColor = element ;
    newDiv.setAttribute("onmouseover",'generate(this.style.backgroundColor)')

    text = document.createElement('p') ;
    newSection.appendChild(text) ;
    text.innerHTML = element ;
});
