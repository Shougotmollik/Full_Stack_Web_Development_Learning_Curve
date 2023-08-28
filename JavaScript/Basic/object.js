//Creating a object 

const person={
    first_name:'shougot',
    last_name:'mollik'
}

// log out the using . 
//console.log(person.first_name);

//log our with braket []
//console.log(person['last_name']);


//creating a arrow function along with object 

const introduction=(name,age)=>{
    const person={
        name:name,
        age:age,
        asset:100000,
        libalities:60000,
        networth:function(){
           return this.asset - this.libalities
        }
    }
    const intro =` Hi my name is ${person.name}.I am ${person.age} years old.My networth is ${person.networth()}.`
    return intro
}
console.log(introduction("shougot mollik","20"));
