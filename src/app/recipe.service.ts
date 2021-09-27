import { Injectable } from '@angular/core';

export interface Recipes {
  id: string;
  title: string;
  picture?: string;
  video?: string;
  ingrediants1: string;
  ingrediants2?: string;
  ingrediants3?: string;
  ingrediants4?: string;
  ingrediants5?: string;
  ingrediants6?: string;
  ingrediants7?: string;
  ingrediants8?: string;
  ingrediants9?: string;
  ingrediants10?: string;
  instructions1: string;
  instructions2?: string;
  instructions3?: string;
  instructions4?: string;
  instructions5?: string;
  instructions6?: string;
  instructions7?: string;
  instructions8?: string;
  instructions9?: string;
  instructions10?: string;
  time: string;
  difficulty: string;
}

const mockRecipes: Recipes[] = [
  { id: '1', title: 'Dhal de lentilles coco curry', ingrediants1: `250g de lentilles corail`, ingrediants2: `600ml d'eau`, ingrediants3: `200ml de lait de coco`, ingrediants4: `400g de légumes aux choix`, ingrediants5: `2 c. à soupe de curry`, ingrediants6: `1 c. à soupe de curcuma`, ingrediants7: `Pour l'accompagnement, prévoir du riz thaï ou basmati 60g à  80g cru par personne environ.`, ingrediants8: `Sel, poivre`, instructions1: `1.Mettez tous les ingrédients dans la cuve.`, instructions2: `2.Lancez en cuisson rapide sous pression 6 minutes.`, instructions3: `3.Préparez le riz : 2 fois le volume du riz en eau à cuire sous pression 4 minutes au cookéo.`, instructions4: `4.Dressez les assiettes en servant le dhal de lentilles avec le riz.`, instructions5: `5.Régalez-vous !!`, time: '10 minutes', difficulty: '1/5' },
  { id: '2', title: 'Porc au caramel et vermicelles de riz', ingrediants1: '300g de filet mignon de porc en cubes', ingrediants2: `240g de vermicelles de riz`, ingrediants3: `3 oignons émincés`, ingrediants4: `1 c. à soupe d huile d olives`, ingrediants5: `1 c. à soupe de sirop d'agave`, ingrediants6: `1 c. à soupe de sauce soja`, ingrediants7: `Quelques feuilles de coriandre et/ou de menthe`, instructions1: `1. Faites revenir les oignons 5 min avec l huile d olive dans la cuve du cookéo en mode dorer. Ajoutez la viande et poursuivez la cuisson 5 min.`, instructions2: `2. Versez 20 cl d eau. Lancez le mode cuisson sous pression pour 5 min.`, instructions3: `3. Assaisonnez, puis versez le sirop d agave et la sauce soja. Laissez caraméliser 5 min en mode dorer.`, instructions4: '4. Réhydratez les vermicelles dans de l eau bouillante, puis servez-les avec le porc caramélisé, le tout parsemé de feuilles de coriandre et / ou de menthe.', time: '20 minutes', difficulty: '2/5' },
  { id: '3', title: 'Papillotes de poulet', ingrediants1: `4 escalopes de poulet`, ingrediants2: `400 g de pois gourmands`, ingrediants3: `4 brins de coriandre hachés`, ingrediants4: `1 c. à  café de sauce soja`, instructions1: `1.Répartissez les pois gourmands au centre de 4 carrés de papier sulfurisé de 30cm de côté. Ajoutez 1 escalope de poulet sur chacun d'eux, assaisonnez et parsemez de coriandre. Refermez le papier de chaque papillote en portefeuille, puis repliez les extrémités sur elles-mêmes.`, instructions2: `2.Versez 30cl d eau dans la cuve du cookéo. Déposez les papillotes dans le panier vapeur (Vous pouvez les empiler). Lancez le mode cuisson sous pression pour 6 min.`, instructions3: `3.Dégustez bien chaud, arrosé de quelques gouttes de sauce soja et accompagné de riz.`, instructions4: `Astuce : Vous pouvez ajouter quelques baies roses après la cuisson`, time: '10 minutes', difficulty: '1/5' },
  { id: '4', title: 'One pot pasta dinde', ingrediants1: `350g d orecchiette`, ingrediants2: `4 aiguillettes de dinde en morceaux`, ingrediants3: `200g de mélange de légumes verts (petits pois, haricots verts, courgettes, ...)`, ingrediants4: `1 bonne poignée de pousses d'épinards`, ingrediants5: `1 c. à soupe d'huile d'olive`, ingrediants6: `40 cl de bouillon de légumes`, ingrediants7: `20 cl de crème liquide allègée`, ingrediants8: `40g de pecorino râpé`, instructions1: `1. Faites revenir la dinde 4 min avec l huile chaude dans la cuve du cookéo en mode dorer`, instructions2: `2. Ajoutez les pâtes, les légumes verts et versez le bouillon. Salez et poivrez. Lancez le mode cuisson sous pression pour la moitié du temps de cuisson indiqué sur le paquet des pâtes.`, instructions3: `3.Retirez une louche de bouillon de la cuve puis incorporez les épinards et la crème. Mélangez bien puis servez avec le pecorino.`, instructions4: `Astuce : Vous pouvez parsemer le plat de graines germées au moment de servir. Elles sont très bonnes pour la santé et apporteront une touche de fraîcheur !`, time: '8 minutes', difficulty: '1/5' },
  { id: '5', title: 'Escalope de veau à  la sauge', ingrediants1: `4 escalopes de veau fines`, ingrediants2: `Quelques feuilles de sauge`, ingrediants3: `500g de brocoli coupé en fleurettes`, ingrediants4: `600g de pommes de terre en cubes`, ingrediants5: `2 c. à  soupe d huile d olive`, ingrediants6: `1 citron`, instructions1: `1.Placez le brocoli et les pommes de terre dans le panier vapeur, versez 20 cl d eau dans la cuve du cookéo et insérez le panier vapeur. Lancez le mode cuisson sous pression pour 7 min.`, instructions2: `2.Ecrassez les brocolis avec les pommes de terre à  la fourchette. Salez, poivrez et incorporez 1 c. à  soupe d huile d olive.`, instructions3: `3.Faites chauffer l huile restante dans la cuve du cookéo en mode dorer. Ajoutez les feuilles de sauge et faites colorer les escalopes de veau 1 à  2 min de chaque côté. Servez avec la purée et des quartiers de citron.`, time: '10 minutes', difficulty: '3/5' }
]


@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getAll() {
    return [...mockRecipes];
  }
}
