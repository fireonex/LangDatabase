//ДОДЕЛАТЬ!!!!!!!! (Welcome!)

function greet(language) {
    let dataBase = [
        {Language: "english", Greetings: "Welcome"},
        {Language: "danish", Greetings: "Velkomst"},
        {Language: "czech" , Greetings: "Vitejte"},
        {Language: "dutch", Greetings: "Welkom"},
        {Language: "estonian", Greetings: "Tere tulemast"},
        {Language: "finnish", Greetings: "Tervetuloa"},
        {Language: "flemish", Greetings: "Welgekomen"},
        {Language: "french", Greetings: "Bienvenue"},
        {Language: "german", Greetings: "Willkommen"},
        {Language: "irish", Greetings: "Failte"},
        {Language: "italian", Greetings: "Benvenuto"},
        {Language: "latvian", Greetings: "Gaidits"},
        {Language: "lithuanian", Greetings: "Laukiamas"},
        {Language: "polish", Greetings: "Witamy"},
        {Language: "spanish", Greetings: "Bienvenido"},
        {Language: "swedish", Greetings: "Valkommen"},
        {Language: "welsh", Greetings: "Croeso"}
    ]
    for (let i = 0; i < dataBase.length; i++) {
        if (language === dataBase[i].Language) {
            return dataBase[i].Greetings;
        }
    }
    return dataBase[0].Greetings;

}
console.log(greet("german"))





