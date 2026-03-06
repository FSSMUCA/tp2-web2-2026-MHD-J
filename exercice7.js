let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = "PROMO10";
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

// 1 - Sous-total
let sousTotal = prix * quantite;
console.log(`Sous-total: ${sousTotal} MAD`);

// 2 - Réduction
let reduction =
  (codePromo ?? false) && estMembre
    ? (sousTotal * reductionPourcentage) / 100
    : 0;
console.log(`Réduction: ${reduction} MAD`);

// 3 - Total final
let total = sousTotal - reduction;
console.log(`Total final: ${total} MAD`);

// 4 - Vérification du solde
let paiementAccepte = soldeCompte >= total;
console.log(paiementAccepte ? "Paiement accepté" : "Solde insuffisant");

// 5 - Nouveau solde
let nouveauSolde = paiementAccepte ? soldeCompte - total : soldeCompte;
if (paiementAccepte) {
  console.log(`Nouveau solde: ${nouveauSolde} MAD`);
}

// 6 - Récapitulatif
console.log("===== RÉCAPITULATIF =====");
console.log(`Produit   : ${nomProduit}`);
console.log(`Quantité  : ${quantite}`);
console.log(`Prix unit.: ${prix} MAD`);
console.log(`Sous-total: ${sousTotal.toFixed(2)} MAD`);
console.log(`Réduction : ${reduction} MAD`);
console.log(`Total     : ${total.toFixed(3)} MAD`);
console.log(
  `Statut    : ${paiementAccepte ? "Paiement accepté" : "Solde insuffisant"}`,
);
console.log(`Solde     : ${nouveauSolde.toFixed(3)} MAD`);
