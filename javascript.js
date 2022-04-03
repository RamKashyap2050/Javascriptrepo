//promisifying a function

   let promiseobj = new Promise((resolve,reject) => {
        
        //Succesful
        resolve('Hello..')
        //Rejected
        reject('err..')
   })
promiseobj.then(
    
    value => {
        console.log("Success response", value)
        displaymessage(value);
    },
    
    error => console.log(error)
)

function displaymessage(value){
    console.log('Display Message Cal', value)
}
