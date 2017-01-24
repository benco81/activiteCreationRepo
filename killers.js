var tableauJoueur = [];
var joueur = {
    
    init: function (nom, email) {
        this.nom = nom;
        this.email = email;
    },
    
    afficher: function () {
        var affichage = this.nom +  " a pour cible " + this.cible;
        return affichage;
    }
};

var tableauOrdre =[];
var quitter = false;
var nbJoueurs = 0;
var nbJoueurMax = 10;

while (quitter===false) {
    
    console.log(tableauJoueur);
    
    var creerNouveauJoueur = prompt("Voulez vous créer un nouveau joueur?");
    
    switch (creerNouveauJoueur) {
            
        case "oui" :
            var nbAleatoire = Math.floor(Math.random() * nbJoueurMax) + 1;
            //rajouter nombre de tour
            while (tableauJoueur[nbAleatoire]!==undefined) {
                nbAleatoire = Math.floor(Math.random() * nbJoueurMax) + 1;
            };        
            var nouveauJoueur = Object.create(joueur);
            var nom;
            while((nom===undefined)||(nom==="")){
                nom = prompt("Entrez nom du joueur");
                
            };
            var email;
            while((email===undefined)||(email==="")){
                email = prompt("Entrez email du joueur");
            };
            nbJoueurs++;
            nouveauJoueur.init(nom,email);
            tableauJoueur[nbAleatoire] = nouveauJoueur;
            nom ="";
            email="";
            if (nbJoueurs===nbJoueurMax){
                alert("Nombres de joueurs maxiumum atteind");
                quitter=true;
            };
            break;
            
        case "non":
            quitter=true;
            break;
            
        default:
            alert("entrez une réponse correcte");
            break;
    };

};

console.log(tableauJoueur.length);
    
for (var i=0;i<tableauJoueur.length;i++){
    
    var indexJoueur = tableauJoueur[i];
    
    
    if (indexJoueur!==undefined){
             
        
        tableauOrdre.push(indexJoueur);
        
    };
};

var i =0;

tableauOrdre.forEach(function(Joueur){
    
    i++;
    
    if (i===tableauOrdre.length){
        
        Joueur.cible = tableauOrdre[0].nom;
        
    }else{
        
        Joueur.cible = tableauOrdre[i].nom;
    };
    
    var paraElt = document.createElement("p");
    paraElt.textContent = Joueur.nom + " a pour cible " + Joueur.cible;
    document.body.appendChild(paraElt);
});



