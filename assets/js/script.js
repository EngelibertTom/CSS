function draw() {

    let trait = document.querySelector(".line-1").style.width="0rem";

    if(trait) {

        document.querySelector(".line-1").style.width = "50rem";

    }
    else {

        document.querySelector(".line-1").classList.toggle("complete")

    }

}