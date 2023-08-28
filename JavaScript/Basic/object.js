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
        age:age
    }
    const intro =` Hi my name is ${name}.I am ${age} years old.`
    return intro
}
console.log(introduction("shougot mollik","20"));