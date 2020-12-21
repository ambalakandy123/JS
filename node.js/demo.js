var fs = require('fs')

var data ={
    name: 'bob'
}
fs.writeFile('data.jason', JSON.stringify
(data), (err)=>{
    console.log('write finshed', err)
})