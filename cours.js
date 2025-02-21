function showLesson(subject) {
  const lessonContent = document.getElementById('lesson-content');

  // Replace content dynamically
  let content = '';
  switch (subject) {
    case 'Math':
      content = '<h2>1-Limites et Continuité</h2>  <h2> 2-Dérivabilité et Etude des fonctions</h2>  <h2> 3-Suites numériques</h2> <h2> 4-Fonctions primitives</h2>   <h2> 5-La fonction logarithme</h2>   <h2> 6-Les nombres complexes</h2>   <h2> 7-La fonction Exponentielle</h2>  <h2> 8-Calcul intégral</h2>   <h2> 9-Équations différentielles</h2>  <h2> 10-Géométrie dans l’espace</h2> <h2> 11-Dénombrement et probabilités</h2>   ';
      break;
    case 'Science':
      content = '<h2>1-Ondes mécaniques progressives</h2> <h2>2-Ondes mécaniques progressives périodiques</h2> <h2>3-Propagation des ondes lumineuses</h2> <h2>4-Décroissance radioactive</h2> <h2>5-Noyaux, masse et énergie</h2> <h2>6-Dipôle RC</h2> <h2>7-Dipôle RL</h2> <h2>8-Oscillations libres dun circuit RLC</h2> <h2>9-Modulation damplitude</h2>      <h2>10-Lois de Newton</h2> <h2>11-Chute libre verticale d’un solide</h2> <h2>12-Mouvements plans</h2> <h2>13-Mouvement des satellites et des planètes</h2>   <h2>14-Mouvement de rotation d’un solide autour d’un axe fixe</h2>   <h2>15-Systèmes mécaniques oscillants</h2>  <h2>16-Aspects énergétiques des oscillations mécaniques</h2>  <h2>17-Atome et mécanique de Newton</h2>';
      break;
    case 'History':
      content = '<h2>1-Transformations lentes et transformations rapides </h2> <h2>2-Suivi temporel dune transformation chimique - Vitesse de réaction </h2>   <h2>3-Transformations chimiques s effectuant dans les 2 sens </h2>  <h2>4-État d équilibre dun système chimique </h2>  <h2>5-Transformations liées à des réactions acide-base </h2>  <h2>6-Dosage acido-basique </h2>  <h2>7-Évolution spontanée dun système chimique </h2>  <h2>8-Transformations spontanées dans les piles et production dénergie </h2>   <h2>9-Transformations forcées (Électrolyse)</h2>   <h2>10-Réactions d estérification et d hydrolyse</h2> <h2>11-Contrôle de l évolution d un système chimique</h2> ';
      break;
    case 'English':
      content = '<h4>1 : Réactions responsables de la Libération de l’énergie emmagasinée dans la matière organique</h4> <h4>2: Rôle du muscle strié squelettique dans la conversion de l’énergie</h4> <h4>3: Notion de l’information génétique</h4> <h4>4 : Mécanisme de l’expression de l’information génétique : étapes de la synthèse des protéines</h4> <h4>5: Transmission de l’information génétique par la reproduction sexuée</h4> <h4>6: Lois statistiques de la transmission des caractères héréditaires</h4> <h4>7: Les ordures ménagères issues de l’utilisation des matières organiques et inorganiques</h4> <h4>8: Les pollutions liées à la consommation des matières énergétiques et à l’utilisation des matières organiques et inorganiques dans les industries chimiques, alimentaires et minérales</h4>    <h4>9: Les matières radioactives et l’énergie nucléaire</h4>   <h4> 10: Contrôle de la qualité et de la salubrité des milieux naturels</h4>  <h4>11:Les chaines de montagnes récentes et leur relation avec la tectonique des plaques </h4>  <h4>12:Le métamorphisme et sa relation avec la tectonique des plaques</h4>   <h4>13: La granitisation et sa relation avec le métamorphisme</h4> ';
      break;
    default:
      content = '<h2>Seletionner la matiere au dessus </h2><p>liste des cours des matieres scientiques </p>';
  }

  // Update the lesson content
  lessonContent.innerHTML = content;

  // Add an animation
  lessonContent.style.animation = 'fadeIn 0.5s';
}
