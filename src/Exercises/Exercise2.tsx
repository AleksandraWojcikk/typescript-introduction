
//dopisujemy ? do typu = jest opcjonalny; czyli albo string albo coś innego, np undefined
function showString(str?: string): string {
    if(str){
return str;
}
return str === '' ? 'Pusty string' : String(str);
}

/* Ćwiczenie | Operacje logiczne i opcjonalność
   Napisz funkcje która na podstawie przekazanej liczby wyświetli nam informacje ile osób online.
   - nazwa funkcji: getUsersOnlineMessage
   - do funkcji moze nie byc przekazany argument, wtedy wyswietl info ze "Nikt nie jest dostępny 😭"
*/

function getUsersOnlineMessage(num?: number): string {
    if(num){
        return `Jest ${num} osób online`;
    }
    return 'Nikt nie jest dostępny';
}








const Exercise2 = () => {
    return ( <>
        <h2>Exercise 2</h2>
        <ol>
            <li>{showString('Jakiś string')}</li>
            <li>{showString()}</li>
            <li>{showString('')}</li>
            <li>{getUsersOnlineMessage(10)}</li>
            <li>{getUsersOnlineMessage(0)}</li>
            
        </ol>
        </>)
};

export {Exercise2}


