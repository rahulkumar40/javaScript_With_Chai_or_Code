fetch("https://api.bring.com/address/api-docs/address").then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);

}).catch((error)=> console.log(error))


