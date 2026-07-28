# ClemApp — Backend

## Résumé

Backend pour l'application ClemApp : API REST légère en Node.js/Express, gestion des utilisateurs, surprises et notifications, et contenus statiques dans `public/`.

## Stack

- Node.js
- Express
- Modules internes (voir `modules/`)

## Prérequis

- Node.js 16+ ou 18+
- npm ou yarn

## Installation

1. Se placer dans le dossier du backend :

   cd ClemApp-backend

2. Installer les dépendances :

   npm install

## Configuration

Créez un fichier `.env` à la racine du dossier et ajoutez les variables d'environnement nécessaires.

Vérifiez [ClemApp-backend/models/connection.js](ClemApp-backend/models/connection.js) et [ClemApp-backend/app.js](ClemApp-backend/app.js) pour connaître les variables exactes attendues.

## Lancer le serveur

- En développement :

  npm run dev
  yarn dev

- En production :

  npm start
  yarn start

## Points d'entrée & routes

- Point d'entrée principal : [ClemApp-backend/app.js](ClemApp-backend/app.js)
- Routes principales :
  - [ClemApp-backend/routes/users.js](ClemApp-backend/routes/users.js)
  - [ClemApp-backend/routes/surprises.js](ClemApp-backend/routes/surprises.js)
  - [ClemApp-backend/routes/notifications.js](ClemApp-backend/routes/notifications.js)
- Données statiques et front minimal : dossier `public/`

## Structure du projet

- `app.js` — configuration Express et middlewares
- `bin/www` — script de démarrage
- `models/` — connexion base et modèles (`connection.js`, `users.js`, `surprises.js`)
- `routes/` — définitions des endpoints
- `modules/` — helpers internes (ex. `checkBody.js`)
- `public/` — fichiers statiques (html, css, images)

## Développement & tests

- Ajouter ou adapter des scripts npm dans `package.json` pour lancer les outils de développement ou les tests.
- Vérifier les logs dans la console pour valider le comportement des routes.

## Déploiement

Ce projet contient un fichier `vercel.json` : il est prêt pour un déploiement sur Vercel, ou peut être déployé sur n'importe quel hôte Node.js en configurant les variables d'environnement et le script `start`.

## Contribuer

1. Fork puis clone
2. Créez une branche descriptive
3. Ouvrez une PR avec une description claire

## Licence

À définir.

## Contact

Pour des questions sur ce backend, ouvrez une issue.
