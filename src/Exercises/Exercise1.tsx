const name: string = 'Andrzej';
const myNumber: number = 99;

//funnckja nic nie zwraca; typ: void, | to albo
const logger = (log: number | string): void => console.log(log);


const getFullName = (lastName: string): string => `${name} ${lastName}`;
logger(getFullName('Kowalski'));

const addNumber = (a:number, b:number): number => a + b;
logger(addNumber(myNumber, 2));

//funkcja, która liczy ilość znaków w stringu
const countCharacters = (str: string): number => str.length

//funcja mówiąca czy liczba jest parzysta czy nie
const isEven = (num: number) => num % 2 === 0;

//f-cja, która na podstawie boolean zwraca info, czy d. liczba jest parzysta, czy nie; jezeli nie określimy jakiego typu, ma być wynik, to fukcja jako wynik bierze tylko te dwa zadeklarowane teksty.
const getParityMessage = (isEven: boolean): string => isEven ? 'ta liczba jest parzysta' : 'ta liczba jest nieparzysta';



const processString = (str: string): string => {
const strLength = countCharacters(str);
const strIsEvenInfo = getParityMessage(isEven(strLength));

return `${str}: Liczba znaków to: ${strLength} i ${strIsEvenInfo}.`;
}


const Exercise1 = () => {
    return (
        <>
        <h2>Exercise 1</h2>
        <ol>
            <li>{getFullName('Nowak')}</li>
            <li>{addNumber(2, 7)}</li>
            <li>{countCharacters('Andrzej')}</li>
            {/* zeby ponizszy wynik (który ma być boolean'em) się wyświetlił kastujemy go do Stringa (zmieniamy go na String) */}
            <li>{String(isEven(3))}</li>
            <li>{String(isEven(8))}</li>
            <li>{isEven(countCharacters('Kasia')).toString()}</li>
            
            <li>{processString('Andrzej')}</li>
        </ol>
        </>
    );
};

export {Exercise1};