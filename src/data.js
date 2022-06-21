// Baza danych skonstruowana na podstawie https://laclassica.pl/


// Spis wszystkich dodatków
export const dough={name: 'dough', price: 15} 
export const tomatoe={name: 'tomatoe sauce', price: 5}
export const cheese={name: 'cheese', price: 7}
export const mozzarella={name: "Mozzarella di Bufala", price: 8}
// export const oregano={name: oregano, price: 2}
export const basil={name: 'basil', price: 2}
// pieczarki
export const funghi={name: 'funghi', price: 8 };
// gotowana szynka czyli prosciutto cotto
export const cotto={name: 'cotto', price: 8};
export const salami={name: 'salami Napoli', price: 8};
export const salamiPicante={name: 'salamiPicante', price: 8};
export const garlic={name: 'galic', price: 1};
export const salt={name: 'Sea salt', price: 1};
export const ecoOlive={name: 'Eco Olive oil', price: 11};

// mieszanka warzyw
export const broccoli={name: "Broccoli", price: 2};
// karczochy
export const carciofi={name: 'Carciofi', price: 2}
// bakłarzan
export const eggPlant={name: "Egg plant", price: 2};
export const onion={name:'Onion', price: 1};

// Z powyższych dodatków można wybrać kilka jako dodatki do dodania w konfiguracji Swojej pizzy


// // Cenę całej pizzy należy obliczyc z tablicy "ingredients" i dodać 
// do każdego obiektu pizzy właściwość o nazwie 'pizzaPrice' (to już
// będą podwaliny pod dynamiczne działanie strony)

export const getPrice=(array, field)=>{
    var output=[]
    for(let i=0; i<array.length; ++i){
            output.push(~~array[i][field])
    }
    return output;
}

// Proponowana wartość właściwości 'pizzaPrice'

// pizzaPrice: getPrice(ingredients, 'price').reduce((a, b)=> a+b, 0);

// koniec propozycji

// UWAGA! Jest to eksperymentalne działanie, które nie zostało sprawdzone dokładnie.
// W razie problmeów proszę o skontaktowanie się ze mną.

// Możliwy błąd działania: w funkcji "getPrice()" zawarta jest podwójna tylda, która
// ma ona za zadanie zamienić jakikolwiek typ wartości właściwości "price" na liczbę całkowitą.
// W razie istnienia takiego błędu, należy usunąć znaki "~~" i przetestować działanie. 




// Spis statyczny predefiniowanych pozycji placków z dodatkami
// pizze które nie kopiuję z menu restauracji: CARBONARA aż do Verdure
export const menuPizza=[
    {id: 1, name: "MARGHERITA", ingredients:[ dough, tomatoe, cheese, basil], },
    {id: 2, name: 'Funghi', ingredients:[dough, tomatoe, cheese, funghi, basil]},
    {id: 3, name: 'Prosciutto Cotto', ingredients: [dough, tomatoe, cheese, cotto]},
    {id: 4, name: 'Salame', ingredients:[dough, tomatoe, cheese, salami]},
    {id: 5, name: 'Salame Piccante', ingredients:[dough, cheese, tomatoe, salamiPicante, garlic]},
    {id: 6, name: 'Margherita Di Bufala', ingredients:[dough, tomatoe, mozzarella, salt, ecoOlive, basil]},
    {id: 7, name: 'Capricciosa', ingredients:[dough, tomatoe, cheese, cotto, funghi, carciofi]},
    {id: 8, name: 'Broccoli', ingredients:[dough, tomatoe, cheese, broccoli, garlic]},
    {id: 9, name: 'Molla', ingredients:[dough, tomatoe, cheese, eggPlant, cotto, funghi, onion]}
    
     
];
// właściwość "img" i zdjęcia jako podgląd pizzy, doda się w przyszłości 5
 