// const url='http://api.weatherstack.com/current?access_key=160ddccb4c8fb27cc0a3d4d5a39fb092&query=24.8607,67.0011&units=f'
// request({url,json:true},(error,response)=>{
//     if (error){console.log('sd')}
// else if(response.body.error){console.log("unable to find location")}
// else{
//    const temp=response.body.current.temperature
//     console.log(response.body.current.weather_descriptions[0]+", it is currently " + temp+ "degrees out")
// }
// })

const request = require('postman-request');
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

const name=process.argv[2]
if(!name){
    console.log("please provide an address")
}else{

geocode(name,(error,{latitude,longitude,location}={})=>{
    if(error){
return console.log(error)
    }
console.log('Error', error)
// console.log('Data', data)
forecast(latitude, longitude, (error, forcastdata) => {
    if(error){
        return console.log(error)
            }
    console.log(location)
    console.log(forcastdata)
  })
})}
