#### **<font color = "tan">0. Introduction du projet :</font>**

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

Ouvrir un navigateur et aller sur la page http://localhost:4200 qui est l'adresse par défaut du serveur.
Dans vscode, ouvrir `src/app/app.component.html`. C'est la page html par défaut du serveur.
Supprime tout le contenu. Une page blanche devrait alors s'afficher.

#### **<font color = "tan">2. Ajouter Material et le CDK :</font>**

---

Angular propose un ensemble de composant d'interface utilisateur conformes au Material Design dans le package `@angular/material`. L'une des dépendances de `@angular/material` est le `Component Development Kit` ou CDK. Il fournit des primitives, comme les utilitaires d'accessibilité, la fonctionnalité glisser-déposer et la superposition. Le CDK est dispo dans le package `@angular/cdk`

Ajouter le package Material. La commande invite à choisir un thème si on souhaite utiliser les styles de la typo globale et configurer les animations.

```bash
ng add @angular/material
# ng add installe @angular/material, ses dépendances et importe le BrowserAnimationModule
# dans AppModule.
```

Ajouter une barre d'outils et une icône à `AppComponent`. Ouvrir `src/app/app.component.html` et ajouter :
[Liste des icones material](https://fonts.google.com/icons)

```js
<mat-toolbar color="primary">
   <mat-icon>local_fire_department</mat-icon> <span>Kanban Fire</span>
</mat-toolbar>

// ça va générer une erreur. Il faudra faire les imports nécessaires dans app.module.ts
```

`src/app/app.module.ts`

```js
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
@NgModule({
  declarations: [AppComponent],
  imports: [...MatToolbarModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

![[Pasted image 20230829224744.png]]

#### \*\*<font color = "tan">3. Visualiser les tâches :</font> [component]

---

Créer un component qui va permettre de visualiser les tâches dans le tableau kanban. Aller dans le répertoire `src/app` et exécuter la commande CLI :

```bash
ng generate component nom_du_component
```

Ça va créer un nouveau dossier composant `nom_du_component`. Dans ce même répertoire, créer un fichier `nom_du_component.ts`

```js
export interface Task {
  id?: string;
  title: string;
  description: string;
}
```
