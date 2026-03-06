let valeurs = [0,1,"","0",null,undefined,NaN,false,[],{}]
for(let i = 0; i < valeurs.length; i++){
    if (typeof valeurs[i] == "string" && valeurs[i].length == 0) {
        let affichage = "(chaine vide)"
        console.log(affichage + " -> " + (valeurs[i] ? "truthy" : "falsy"))
        continue
    }
    let affichage = String(valeurs[i])
    console.log(affichage + " -> " + (valeurs[i] ? "truthy" : "falsy"))
}