let prmsobj = new Promise(function (myresolve,nyreject){
    //Production code - takes some time
    setTimeout(() => {
        // calls to the consumer code
        myresolve('I Promnised to return');

        myreject('')
    },3000)

})


//Must wait until a promise is returned -consuming code
prmsobj.then(function(value){
    timeoutdisplay('Anything');
},
function(err){
    console.log('err')
})



function timeoutdisplay(somevalue){
    document.getElementById('settimeout').innerHTML = somevalue
}