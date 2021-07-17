let getData = async (city)=>{

    let predata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7674da634845e7c2d8c53ab0a48b8e29`)
let Data = await predata.json()

console.log(Data);

let html = `<img src="./icons/${data.weather[0].icon}.png" alt="">
            <hr>
            <h1>${Math.floor(data.main.temp -273)} *C</h1>
            <h4>${data.weaather[0].description}</h4>
            <p>${data.name}</p>`
            dom.innerHTML = html

}

getData("hanoi")