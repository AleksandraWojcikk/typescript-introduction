//PROMISE

function promiseDelay(delay: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Promise rozwiązany z opóznieniem ${delay / 1000} sekund`);
        },2000);
    })
}
promiseDelay(1500).then(result => console.log(result));
promiseDelay(3000).then(result => console.log(result));

//GENERIC TYPES
function getFirstElement<Type>(array: Array<Type>): Type {
    return array[0];
}

const numArray: Array<number> = [1,2,3];
const strArray: Array<string> = ['banana', 'apple', 'orange'];
const boolArray: Array<boolean> = [true, false, true];
const firstNum = getFirstElement(numArray);
const firstStr = getFirstElement(strArray);
const firstBool = getFirstElement(boolArray);


//UTILITY TYPES
interface User {
    name: string;
    age: number;
}

// Partial: all właściwości są opcjonalne; uzywamy wtedy, gdy chcemy wyciagnac tylko jedną właściwość
const partialUser: Partial<User> = {name: 'Karol'}
partialUser.name = 'Karolina';


// Readonly: będzie tylko do odczytu; właściwości są zablokowane do edycji; mogą być tylko wyświetlone;
const readonlyUser: Readonly<User> = {name: 'Basia', age: 28}


// Record: jeśli nie wiemy, jakie typy będą w środku obiektu; bo będzie ich ogrom; Record<Keys, Type>; określamy, jak ma wyglądać obiekt.
const recordUser: Record<string, User> = {karol: {name: 'Karol', age: 17}, ewa: {name: 'Ewa', age: 32}}
const recordUser2: Record<string, string> ={
    user1: 'Alicja',
    user2: 'Zbyszek',
}



export const Exercise4 = () => {
    return (
        <>
        <h2>Exercise 4</h2>
        <ol>
            <li>{firstNum}</li>
            <li>{firstStr}</li>
            <li>{String(firstBool)}</li>
            <li>{partialUser.name}</li>
            <li>{partialUser.age}</li>
            <li>{readonlyUser.age}</li>
            <li>{recordUser.karol.name}</li>
            <li>{recordUser2.user1}</li>
        </ol>
        </>
    )
}