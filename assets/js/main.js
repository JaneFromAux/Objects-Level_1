console.log("LEVEL_1_2_!");
let person = {
    naMe: "Jane",
    alter: 30,
    sagNameAlter: () => {
        window.alert(`I hoaß ${person.naMe} und bin scho ${person.alter}!`);
    },
};
person.sagNameAlter();

console.log("LEVEL_1_4_!");
let unsereHaustiere = [
    {
        tiertyp: "Katze",
        names: [
            "Gipsy",
            "Nala",
            "Dinky"
        ]
    },
    {
        tiertyp: "Hunde",
        names: [
            "Knöpfchen",
            "Pinselchen",
            "Droopy",
        ]
    }
];
// Nala
console.log(unsereHaustiere[0].names[1]);
//Droopy
console.log(unsereHaustiere[1].names[2]);
// Name ändern
unsereHaustiere[0].names[1] = "Nolo";
unsereHaustiere[1].names[2] = "Dreepy";
console.log(unsereHaustiere[0].names[1]);
console.log(unsereHaustiere[1].names[2]);

console.log("LEVEL_1_5_!");
let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};
//Geheimnisse
console.log(unserLager.schrank["Obere Schublade"].Ordner2);
//Cola
console.log(unserLager.schrank["Untere Schublade"]);
//Hefter
console.log(unserLager.schreibtisch.schublade);

console.log("LEVEL_1_6_!");
let myMusic = [
    {
        artist: "The Beatles",
        title: "Abbey Road",
        release_year: 1969,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    },
    {
        artist: "Pink Floyd",
        title: "Dark Side of the Moon",
        release_year: 1978,
        medium: ["CS", "CD", "LP", "Download"],
        gold: true
    },
    {
        artist: "Led Zeppelin",
        title: "Led Zeppelin IV",
        release_year: 1971,
        medium: ["CS", "LP", "Download"],
        gold: true
    },
    {
        artist: "Metallica",
        title: "Kill ’Em All und Ride the Lightning",
        release_year: 1983,
        medium: ["LP", "CD", "MC", "Download"],
        gold: true
    }
];
//"The Beatles"
console.log(myMusic[0].artist);
// Von Pink Floyd: "Download"
console.log(myMusic[1].medium[3]);
// Von Pink Floyd: true
console.log(myMusic[1].gold);
// 1971 und 1983
console.log(`${myMusic[2].release_year} und ${myMusic[3].release_year}`);
// Von Metallica: "MC"
console.log(myMusic[3].medium[2]);
// Von Metallica das Wort: Ride
console.log(myMusic[3].title.slice(17, 21));
// Von Led Zeppelin das Wort: IV:
console.log(myMusic[2].title.slice(13));
// Von Pink Floyd das Wort: Floyd
console.log(myMusic[1].artist.slice(5));

console.log("LEVEL_1_7_!");
myMusic.forEach(ele => {
    console.log(ele.artist);
    console.log(ele.title);
    console.log(ele.medium);
});
// Bonus, Baby ;)
myMusic.forEach(elm => {
    if (elm.release_year < 1975) {
        console.log(elm.release_year);
    }
})

console.log("LEVEL_1_8_!");
let studentData = [
    {
        name: "Alex",
        age: 23,
        coop: false,
        address: {
            street: "Don Valley Business Park",
            city: "Toronto",
            postalCode: "ONM3C3E5"
        },
        emails: ["alex69@gmail.com", "alex123@yahoo.com"]
    },
    {
        name: "Sandra",
        age: 22,
        coop: true,
        address: {
            street: "34 Lawrence Ave",
            city: "Toronto",
            postalCode: "ONM3C0E5"
        },
        emails: ["sandra@gmail.com", "sandra@yahoo.com"]
    }
];

studentData.map(elt => {
    console.log(`Names:  ${elt.name} Coop: ${elt.coop}  City: ${elt.address.city} Emails: ${elt.emails}`);
});
