import "./App.css";
import { Exercise1 } from "./Exercises/Exercise1";
import { Exercise2 } from "./Exercises/Exercise2";
import { Exercise3 } from "./Exercises/Exercise3";
import { Exercise4 } from "./Exercises/Exercise4";

// Summary
// Type number - const num: number = 10;
// Type string - const str: string = '10';
// Type boolean - const bool: boolean = true;
// Arrays -  Array<boolean>
// Objects - interface User { name: string; } lub type User = { name: string; }
// Promises - Promise<Type>
// Generics - getFirstElement<T>(array: Array<T>): T
// Utlility/Partial - Partial<T>
// Utlility/Readonly - Readonly<T>
// Utlility/Record - Record<Key,Type>

function App() {
return(
  <>
  <h1>Typescript is cool</h1>
  <Exercise1 />
  <br />
  <Exercise2 />
  <br />
  <Exercise3 />
  <br />
  <Exercise4 />
  </>
)



























  // function add(a: number, b: number): number {
  //   return a + b;
  // }

  // function add2(a, b) {
  //   return a + b;
  // }
  // const greet = (name: string): string => {
  //   return `Hello ${name}`;
  // };

  // console.log(add2(5, 6));


  // // funkcję countCharacters liczącą ilość znaków w stringu; funckja ma zwracać ilość
  // const countCharacters = (str: string): number => str.length;

  // // funkcję isEven mówiącą czy liczba jest parzysta czy nie (zwracająca boolean)
  // const isEven = (num: number): boolean => num % 2 === 0;

  // // funkcję getParityMessage która na podstawie boolean zwraca komunikat ta liczba jest parzysta/ta liczba nie jest parzysta; 
  // function getParityMessage(isEven: boolean): string {
  //   return isEven ? "Ta liczba jest parzysta" : "Ta liczba nie jest parzysta";
  // }

  // // funkcję processString która na podstawie stringa, wypisuje go, wypisuje liczbę jego znaków oraz informację czy liczba znaków jest/nie jest parzysta. Funkcja ta powinna wywoływać 3 powyższe funkcje (zwraca string)

  // const processString = (str: string): string => {
  //   const length = countCharacters(str);
  //   const even = isEven(length);
  //   const message = getParityMessage(even);
  //   return `${str} - liczba znaków ${length} - ${message}`;
  // };
  // return (
  //   <>
  //     {add2(5, 6)}
  //     <p>countCharacters</p>
  //     {countCharacters("Hello World!")}
  //     <p>isEven</p>
  //     {isEven(2) && "true"}
  //     {/* To mi się nie wyświetli */}
  //     {isEven(3) && "false"}
  //     <p>getParityMessage</p>
  //     <p>{getParityMessage(true)}</p>
  //     <p>{getParityMessage(false)}</p>
  //     <p>processString</p>
  //     {processString("Hello World")}
  //   </>
  // );
}

export default App;