# 🎁 ClemApp — Backend

API REST de ClemApp, une PWA événementielle avec contenus programmés et notifications push : comptes et rôles, surprises à révélation programmée, envoi de notifications Web Push et météo du lieu de l'événement.

**Frontend :** [clemapp-frontend](https://github.com/romainauthier-1/clemapp-frontend) · **Démo :** [clemapp-frontend.vercel.app](https://clemapp-frontend.vercel.app)

![Node.js](https://img.shields.io/badge/Node.js-Express_4-339933?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose_9-47A248?logo=mongodb&logoColor=white)
![Web Push](https://img.shields.io/badge/Web_Push-VAPID-0055A4)
![Vercel](https://img.shields.io/badge/Vercel-000000?logo=vercel&logoColor=white)

---

## Fonctionnalités

- **Comptes et rôles** : comptes créés par un organisateur, mots de passe hachés avec bcrypt, token aléatoire (uid2) attribué à chaque compte, rôles `star` / `guest` / `guest+` et équivalents de démo.
- **Surprises** : CRUD complet, trois modes de révélation (`time`, `riddle`, `manual`), vérification de la réponse aux énigmes (plusieurs réponses acceptées, saisie normalisée), verrouillage et déverrouillage manuels.
- **Notifications push** : stockage de l'abonnement Web Push de chaque utilisateur, envoi groupé (`Promise.allSettled`) et suppression automatique des abonnements expirés (codes 404 et 410).
- **Météo** : proxy vers l'API OpenWeatherMap (lever et coucher du soleil, prévisions sur 15 h) pour ne pas exposer la clé côté client.
- **Mode démo** : surprises et comptes marqués `demo`, servis séparément des données réelles.

## Stack technique

Node.js, Express 4, MongoDB (Atlas) avec Mongoose 9, bcrypt, uid2, web-push, déploiement serverless sur Vercel.

> Les routes ne sont pas protégées par un middleware d'authentification : le client transmet le token du compte dans le corps des requêtes qui en ont besoin. Ce choix reste acceptable pour une application événementielle à audience fermée et de courte durée. Pour un usage public, la prochaine étape serait un middleware de vérification de jeton et un filtrage systématique des champs sensibles dans les réponses.

## Routes

| Méthode | Route                              | Description                                   |
| ------- | ---------------------------------- | --------------------------------------------- |
| POST    | `/users/signup`                    | création d'un compte (`name`, `password`, `status`) |
| POST    | `/users/signin`                    | connexion                                     |
| GET     | `/users/all`                       | liste des comptes                             |
| PUT     | `/users/update/:id`                | modification (nom, rôle, mot de passe)        |
| DELETE  | `/users/delete/:id`                | suppression                                   |
| POST    | `/users/subscribe`                 | enregistrement de l'abonnement push           |
| GET     | `/users/weather`                   | météo du lieu de l'événement                  |
| GET     | `/users/linus` · POST `/users/changeLinus` | invité désigné par la roue            |
| GET     | `/surprises/all/:isDemo`           | surprises (réelles ou démo)                   |
| GET     | `/surprises/:id`                   | détail d'une surprise                         |
| POST    | `/surprises/new`                   | création                                      |
| PUT     | `/surprises/update/:id`            | modification                                  |
| DELETE  | `/surprises/:id`                   | suppression                                   |
| POST    | `/surprises/answer/:id`            | réponse à une énigme                          |
| POST    | `/surprises/unlock/:id`            | déblocage si l'heure de révélation est passée |
| POST    | `/surprises/unlockManually/:id` · `/surprises/lockManually/:id` | (dé)verrouillage manuel |
| GET     | `/surprises/isUnlocked/:id`        | état d'une surprise                           |
| GET     | `/surprises/random-quote`          | citation aléatoire                            |
| POST    | `/notifications/send`              | envoi d'une notification à une liste de destinataires |

## Installation

Prérequis : Node.js 18+, Yarn, une base MongoDB (Atlas ou locale).

```bash
git clone https://github.com/romainauthier-1/clemapp-backend.git
cd clemapp-backend
yarn install
cp .env.example .env    # renseigner les variables ci-dessous
yarn dev                # http://localhost:4000
```

| Variable                        | Rôle                                                       |
| ------------------------------- | ---------------------------------------------------------- |
| `CONNECTION_STRING`             | chaîne de connexion MongoDB                                |
| `EXPO_PUBLIC_VAPID_PUBLIC_KEY`  | clé publique VAPID (`npx web-push generate-vapid-keys`)    |
| `EXPO_PUBLIC_VAPID_PRIVATE_KEY` | clé privée VAPID                                           |
| `EXPO_PUBLIC_OWM_API_KEY`       | clé API OpenWeatherMap                                     |

## Structure

```
app.js            configuration Express, VAPID, routes
bin/www           démarrage du serveur HTTP
models/           connexion MongoDB, schémas User et Surprise
routes/           users, surprises, notifications
modules/          checkBody (validation des champs requis)
```

---

Romain Authier — [GitHub](https://github.com/romainauthier-1)
