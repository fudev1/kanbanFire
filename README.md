#### **<font color = "tan">0. Introduction du projet :</font>
---

Je vais créer un tableau kanban Web avec Angular et Firebase. L'appli finale comportera trois catégories de tâches : **en attente**, **en cours** et **terminées**. Je pourrais **créer**, **supprimer** et **transférer** des tâches d'une catégorie à une autre par glisser-déposer.

Je vais développer l'interface utilisateur à l'aide d'Angular et utiliser Firestore comme stockage persistant. À la fin, je déploierais l'appli sur Firebase Hosting à l'aide de la CLI Angular.

#### **<font color = "tan">1. Créer un projet :</font>**
---

Créer un espace de travail pour Angular :

```bash
ng new nom_du_projet
```

Prend quelques minutes. La CLI Angular crée la structure du projet et installe toutes les dépendances. Une fois le process d'installation terminé, aller dans le répertoire `nom_du_projet` et démarrer le serveur. 

```bash
ng serve
```

Ouvrir un navigateur et aller sur la page http://localhost:4200  qui est l'adresse par défaut du serveur.
Dans vscode, ouvrir  `src/app/app.component.html`. C'est la page html par défaut du serveur. 
Supprime tout le contenu. Une page blanche devrait alors s'afficher. 

#### **<font color = "tan">2. Ajouter Material et le CDK :</font>**
---

Angular propose un ensemble de composant d'interface utilisateur conformes au Material Design dans le package `@angular/material`. L'une des dépendances de `@angular/material` est le `Component Development Kit` ou CDK. Il fournit des primitives, comme les utilitaires d'accessibilité, la fonctionnalité glisser-déposer et la superposition. Le CDK est dispo dans le package `@angular/cdk`
