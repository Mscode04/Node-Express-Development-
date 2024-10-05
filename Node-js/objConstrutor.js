function person(name,age,place){
    this.name=name
    this.age=age
    this.place=place
    this.Dis=function(){
        console.log(this.name +' '+this.age);
        
    }
}
var fahi=new person('fahiya',19,'kannur')
var abhi=new person('abhinav',29,'malappuram')

fahi.Dis()
abhi.Dis()