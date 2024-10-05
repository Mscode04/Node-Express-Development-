var fs=require('fs')
// fs.readFile('./demo.txt','utf-8',function(err,data){
//     if(err){
//         console.log('error');
        
//     }
//     console.log(data);
    
// })

// fs.writeFile('creteddemo.txt','hello iam new file creted by writefile',function(err){
//     if(err){
//         console.log('error');
        
//     }
//     console.log('file creted');
    
// })

// fs.appendFile('creteddemo2.txt','hello iam new file creted \n by append',function(err){
//     if(err){
//         console.log('error');
        
//     }
//     console.log('file creted');
    
// })
// fs.rename('creteremaned.txt','demo.txt',function(err){
//     if(err){
//         console.log('error');
        
//     }
//     console.log('file remaed');
    
// })
fs.unlink('demo.txt',function(err){
    if(err){
        console.log('error');
        
    }
    console.log('file deleted');
    
})