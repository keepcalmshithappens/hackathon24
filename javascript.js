const imageArray = [];

imageArray.push("https://i.pinimg.com/564x/59/2f/d3/592fd3271c50b27f854cf04359199646.jpg");
imageArray.push("https://i.pinimg.com/564x/59/2f/d3/592fd3271c50b27f854cf04359199646.jpg");
imageArray.push("https://i.pinimg.com/736x/47/b6/f9/47b6f919315351c3cb0a40619caf0c8d.jpg");
imageArray.push("https://i.pinimg.com/564x/0b/35/0a/0b350a6108834a8d086d09274ae37f30.jpg");
imageArray.push("https://i.pinimg.com/564x/3f/1a/ec/3f1aec9227841f185d7cee09c299a8dc.jpg");

imageArray.push("https://i.pinimg.com/564x/c8/08/43/c80843fe185cd482ba486349478cfcec.jpg");
imageArray.push("https://i.pinimg.com/564x/1d/82/2d/1d822d9c90f89802ccbd4e8590bdd75d.jpg");
imageArray.push("https://i.pinimg.com/564x/2f/bc/7b/2fbc7be5ec83385d20e0104705e95dc5.jpg");
imageArray.push("https://i.pinimg.com/736x/54/c6/4c/54c64c3ac22b648101f04fc9dc6970cd.jpg");

imageArray.push("https://i.pinimg.com/564x/ff/af/ba/ffafba492baac254d641fdc507e193c3.jpg");
imageArray.push("https://i.pinimg.com/736x/c6/d6/b1/c6d6b139494ff71e203f49b3f6ac7acb.jpg");
imageArray.push("https://i.pinimg.com/736x/79/9b/75/799b75609b017d9b9c2efff37b22ba6f.jpg");
imageArray.push("https://i.pinimg.com/564x/6f/9a/67/6f9a67035da9b784cdf677042a5fa60d.jpg");



function flip_card(o){
    o.e.classList.toggle('clicked')
    o.open = !o.open
    if (o.open)
        return
    
    const element2 = document.getElementById("random" + o.i)
    element2.src = imageArray[Math.floor(Math.random() * imageArray.length)];
}


function set_up(){
    for (let i = 0; i<3; i++){        
        const e = document.getElementById("coolcard" + i)
        const o = {open:true, e, i}
        e.onclick = () => flip_card(o)
    }
}

set_up()