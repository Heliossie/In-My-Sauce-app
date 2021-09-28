***********************   In My Sauce !   ***********************


-----------Page de l'application-----------
A l'ouverture de l'application nous arrivont sur la home page, celle-ci contient en en-tête une actualité.
Nous pouvons trouver ensuite les recettes favorites, celle qui sont le plus utiliser et y accèder directement depuis cette page.

Dans le menu nous avons le buton 'Recette' celui-ci nous amène sur la pages ou sont lister toutes les recettes.
Nous pouvons ici partager les recettes, ou les affichier.
Si nous cliquons sur la loupe, la recette s'affichera.
Sur cette page de recette nous retrouvons une photo du plat, ainsi que les ingrediants et les instructions pour réaliser le plat.
De plus j'ai intégrer dans cette page un minuteur en secondes.


-----------fonctionnalité de l'application / plugin utiliser-----------
Pour partager les recettes j'ai utiliser le plugin 'Share' de capacitor, j'ai ensuite attribuer un titre au partage, et un petit texte qui l'accompagne.

Actuellement le partage envoye sur la doc de ionic, dans une V2 j'aimerais développer un fichier pdf ou une url pour le partage.

J'ai également utiliser le plugin Haptics pour émettre une vibration lors que le minuteur est a zéro

-----------Difficulté rencontrer-----------
J'ai rencontrer quelques difficultée pour la mise en page et l'utilisation de certains composant de Ionic en effet, le composant ion-input par exemple sous le navigateur chrome n'ouvre pas de clavier(virtuel), lorsque j'ai transfèrer mon application sur mon téléphone, pour la simuler je me suis aperçu que les inputs ouvrais par default le clavier du smartphone, cela étant gênant pour la navigation j'ai fait le choix de retirer les inputs. Il faudrait que je développe un fonctionnalité pour modifier les recettes.

Autre difficulté rencontrer lors de la création de l'interface 'Recipes', en effet j'ai ajouter tous les ingrédiants et instructions en les incrémentant de +1 à chaque fois, je pense qu'il aurais été plus judicieux de faire une interface ingrediants et une interface instructions, ou tout simplement les mettrent sous forme de tableau.

-----------Et pour la suite?-----------
-Il est possible d'améliorer cette application, notament en la reliant a une base de données afin d'y stocker les recettes, chemin d'images etc..
-J'aimerais également pouvoir partager correctement la recette, pouvoir l'envoyer au format PDF par exemple ou généré un liens qui rendra accessible la recette a la personne a qui je la partage
-Voir pour un autre design, en effet j'ai prit le design de base, je trouve correcte mais je pense que l'on peu intégrer un thème à l'application.
-Ajoutez la possibilité de modifier la recette, ou d'adapter automatiquement la recette en fonction du nombre de part désirer.
-Egalement, voir pour la fonctionnalité de suppression et d'ajout de recette.