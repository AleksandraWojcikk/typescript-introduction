const myName = 'Andrzej';
const myAge = 39;

const myName2= 'Ania';
const myAge2 = 54;

///////////////////////////////////////////////////////////////////////////////////////////////
//TABLICE
//jak tworzymy typy to zawsze są z wielkiej litery!
 type MyNameArray = 'Andrzej' | 'Ania' | number | boolean;

//tablica z namami, ze stringami; .split to dzielenie na argument, na stringi; jezeli w tablicy będziemy mieć wiele typów to tworzymy wspólny type dla nich (patrz MyNameArray wyzej);
const myNameArray: MyNameArray [] =[myName, myName2];
myNameArray.push('Ania');
myNameArray.push(99);
myNameArray.push(true);


// Array<number> === number[]
const myAgeArray: Array<number> = [myAge, myAge2, 77];
console.log(myAgeArray);

const myAgeAndNameArray: Array<number | string> = ['Szczepan', 19, 'Kasia', 20];

///////////////////////////////////////////////////////////////////////////////////////////////
//OBIEKTY


//typy przy obiektach tworzymy poprzez inteface i wielka litera!
interface Person {
firstName: string;
lastName?: string;
age?: number;
address?: Address;
getFullName?: () => string;
}

interface Address {
country: string;
        street?: string;
        city: string;
}

const person: Person = {
    firstName: 'Stefan',
    lastName: 'Nowak',
    age: 30,
    address: {
        country: 'Poland',
        street: 'Kolorowa 33',
        city: 'Wrocław',
    },
    getFullName () {
        return `${this.firstName} ${this.lastName}`; 
}
}
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
//console.log(person.getFullName());

const person2: Person = {
    firstName: 'Karolina',
    age: 23,
    
    
}
console.log(person2.age);


// TABLICE + OBIEKTY
const people: Person[] = [person, person2];
console.log(people);

//ĆWICZENIE
// Wyświetl dane osób z tablicy people w kafelkach na stronie.

const Exercise3 = () => {
    return (
        <>
        <h2>Exercise 3</h2>
        <ol>
            <li>{myNameArray}</li>
            <li>{myAgeArray}</li>
            <li>{myAgeAndNameArray}</li>
        </ol>
        <div>
            {people.map(person => {
                return (
                    <div className='person-card'>
                        <p>Name: {person.firstName}</p>
                        <p>Age: {person.age}</p>
                        {/* warunek, na podstawie którego określamy, czy coś się wyświetla czy nie. W tym przypadku, jeśli dana osoba ma wpisany jakis adres, to coś z tego adresu się wyświetli; jeśli nei ma wpisanych danych o adresie, to ten Country w ogóle się nie wyświetli */}
                        {person.address && 
                        <div>
                        <p>Country: {person.address?.country}</p>
                        <p>City: {person.address?.city}</p>
                        </div>}
                    
                    
                    </div>
                )
            })}
        </div>
        </>
    )
}

export {Exercise3}