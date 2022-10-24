// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht 1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com


function getEmailDomainShort(email){
    let domain = email.split("@");
    return domain[1];
}

getEmailDomainShort("n.eeken@novi-education.nl");
getEmailDomainShort("t.mellink@novi.nl");
getEmailDomainShort("a.wiersma@outlook.com");



/* Opdracht 2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(email){
    switch (true) {
        case email.includes("@novi-education.nl"):
            console.log("Student");
            break;

        case email.includes("@novi.nl"):
            console.log("Medewerker");
            break;

        case email.includes("@outlook.com"):
            console.log("Extern");
            break;

        default:
            console.log("u bent niet bekend bij novi");
    }
}
typeOfEmail("n.eeken@novi-education.nl");
typeOfEmail("t.mellink@novi.nl");
typeOfEmail("a.wiersma@outlook.com");
typeOfEmail("novi.nlaapjesk@outlook.com");


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:

function checkEmailValidity(email){
    switch (true) {
        case email.includes("@" ) && (email.includes(".")) && (email.slice(-1) !==".") && (!email.includes(",")):
            console.log("True");
            break;
        case !email.includes("@"):
            console.log("False");
            break;
        case email.slice(-1) === "." || !email.includes("."):
            console.log("False");
            break;
        case email.includes(",") :
            console.log("False")
            break;
        default: console.log("False omdat het kan");
    }
}
 checkEmailValidity("n.eeken@novi.nl"); //geeft true
 checkEmailValidity("tessmellink@novi.nl"); // geeft true
 checkEmailValidity("n.eekenanovi.nl"); // geeft false - want geen @
 checkEmailValidity("n.eeken@novinl."); // geeft false - want de punt mag niet als laatst
 checkEmailValidity("tessmellink@novinl"); //geeft false