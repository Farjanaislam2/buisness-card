const fetchFunc =()=>{
    fetch('data.json')
    .then( res => res.json())
    .then(data => showResult(data))
}

const showResult = (data)=>{
    console.log(data)
    

    data.forEach(service => {
        console.log(service.picture);
        document.getElementById('card').innerHTML +=`
                <div class="service-container">
                    <img src="${service.picture}" alt="" />
                    <h1 class='name'>${service.name}</h1>
                    <p class='details'>${service.about}</p>
                </div>
            `
        })     
}

fetchFunc()