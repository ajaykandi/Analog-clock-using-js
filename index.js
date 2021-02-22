setInterval(() => {
    d= new Date();
    console.log(d);
    htime = d.getHours();
    // console.log(htime);
    mtime= d.getMinutes();
    stime = d.getSeconds();
    
    hrotation = 30*htime + mtime/2 ;
    console.log(hrotation);
    mrotation = 6*mtime ;
    srotation = 6*stime;
    

    hour.style.transform = `rotate(${hrotation}deg)` ;
    minute.style.transform = `rotate(${mrotation}deg)`; 
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);