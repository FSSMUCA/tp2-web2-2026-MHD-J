let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// Traitement
let nomCorrige = nom.trim() || "Inconnu";
let ageCorrige = parseInt(age);
let emailValide = email.includes("@") && email.split("@")[1].includes(".");
let scoreCorrige = parseInt(scoreJeu) || 0;
let estAdminCorrige = estAdmin === "true";
let derniereConnexionCorrige = derniereConnexion ?? "Jamais connecté";
let nombreConnexionsCorrige = Number(nombreConnexions);

// Rapport
console.log("===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(
  `age              : ${isNaN(ageCorrige) || ageCorrige <= 0 ? `${ageCorrige} (invalide)` : `${ageCorrige} (valide)`}`,
);
console.log(
  `email            : "${email}" (${emailValide ? "valide" : "invalide : pas de point après @"})`,
);
console.log(
  `scoreJeu         : ${scoreCorrige} (extrait depuis "${scoreJeu}")`,
);
console.log(
  `estAdmin         : ${estAdminCorrige} (attention : Boolean("false") = true, conversion manuelle requise)`,
);
console.log(
  `derniereConnexion: "${derniereConnexionCorrige}" (valeur par défaut via ??)`,
);
console.log(
  `nombreConnexions : "${nombreConnexionsCorrige === 0 ? "Aucune connexion" : nombreConnexionsCorrige}" (0 après conversion)`,
);
console.log("================================");