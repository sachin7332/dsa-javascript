let person = {
    f_name: 'John',
    l_name: 'Doe',
    age : 21
}


//ADD = BIG 0 Constant 0(1)
person.hobbies = ["Playing" , "Music" ]

//EDIT = BIG 0 Constant 0(1)
person.hobbies = ["Sports" , "Music" ]


// DELETE = BIG 0 Constant 0(1)
delete person.hobbies 


// SEARCH = BIG 0 Linear 0(n)
let seacrh = person.age


console.log("<<<<obj>>>>",person)

{/* <METHODS>  */}
Object.keys(person)
Object.values(person)
Object.entries(person)

for(let key in person){
    console.log("key :",key)
}






