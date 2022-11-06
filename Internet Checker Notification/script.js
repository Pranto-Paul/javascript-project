
const wrapper = document.querySelector(".wrapper"),
toast = wrapper.querySelector(".toast");
wifiicon = wrapper.querySelector('.icon');
title = wrapper.querySelector("span");
subtitle = wrapper.querySelector("p");
closeIcon = wrapper.querySelector(".close-icon");

window.onload = ()=>{ //once window load
    function pkp(){
        let file = new XMLHttpRequest(); //creating new xml object
        file.open("GET" , "https://jsonplaceholder.typicode.com/posts" , true); //sending get request to this url
        file.onload=()=>{//once pkp loaded
            if(file.status ==200 && file.status <300){
                toast.classList.remove("offline");
                title.innerText = "You're Online now";
                subtitle.innerText = "Hurrah! Internet is Connected";
                wifiicon.innerHTML = `<ion-icon name="wifi-outline"></ion-icon>`;
                closeIcon.onclick = ()=>{
                    wrapper.classList.add("hide");
                }
                setTimeout(()=>{
                    wrapper.classList.add("hide");
                },5000)
            }
            else{
                offline();
            }
        }
        file.onerror=()=>{
            offline();
        }
        file.send();
    }

    function offline(){
        closeIcon.onclick = ()=>{
            wrapper.classList.add("hide");
        }
        setTimeout(()=>{
            wrapper.classList.add("hide");
        },5000)
        toast.classList.add("offline");
        title.innerText = "You're Offline Now";
        subtitle.innerText = "Opps! Internet Disconnected";
        wifiicon.innerHTML = `<ion-icon name="airplane-outline"></ion-icon>`;
    }

    
        setInterval(()=>{
            pkp();
        },100)

}