//XMLHttpRequest(XHR) -> are used to interact with servers via API
//1.creating an XHR object
//new keyword
var request=new XMLHttpRequest();
//2.opening a connection(specify the URL)
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.sending a connection
request.send();
//4.once the server responded successfully gthen we have to process the data
request.onload=function(){
    var data=JSON.parse(this.response);
    console.log(data);
    for(i=0;i<10;i++){
        console.log(data[i].name+" "+data[i].capital)
    }
   
}