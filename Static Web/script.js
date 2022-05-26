fetch("./data.json")
.then(response => {
   return response.json();
})
.then(jsondata => {
    console.log(jsondata);
        for (let index = 0; index < jsondata.length; index++) {
            document.getElementById("listItem").innerHTML += 
            '<div class="col d-flex align-items-stretch"><div class="card"><img src="img/cover/' + jsondata[index].image +'" class="card-img-center img-fluid rounded"><div class="card-body"> <h5 class="card-title">'+jsondata[index].title+'</h5><p class="card-footer">Tác giả: '+jsondata[index].author+'</p></div></div></div>'
        }
    });