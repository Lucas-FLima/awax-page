window.onload = function(){
    document.querySelector(".menu_opener").addEventListener("click", function(){
        if(document.querySelector(".menu nav").style.display == 'flex') {
            document.querySelector(".menu nav").style.display = 'none';
        }
        else {
            document.querySelector(".menu nav").style.display = 'flex';
        }
    });
};
