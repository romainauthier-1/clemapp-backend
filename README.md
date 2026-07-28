# 🎁 ClemApp — Backend

> **Une API pour gérer les surprises et notifications** — Un backend Node.js/Express léger qui alimente l'application mobile ClemApp avec gestion des utilisateurs, surprises et notifications push.

---

[![Node.js](https://img.shields.io/badge/Node.js-16%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-4.16.1-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-9.3.3-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-9.3.3-880000?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![Web Push](https://img.shields.io/badge/Web_Push-3.6.7-0055A4?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Push_API)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

---

## 📜 À propos du projet

**ClemApp Backend** est une **API RESTful** conçue pour l'application mobile **ClemApp**. Elle permet de :

- **Gérer les utilisateurs** avec authentification sécurisée
- **Créer et gérer des surprises** pour les utilisateurs
- **Envoyer des notifications push** via l'API Web Push
- **Stocker les données** dans une base MongoDB
- **Sécuriser les accès** avec des tokens uniques

Idéal pour les applications mobiles qui ont besoin d'un backend simple mais puissant pour gérer du contenu dynamique et des notifications en temps réel.

---

## 🔧 Stack Technique

| Catégorie              | Technologie                                                  | Version | Rôle                                  |
| ---------------------- | ------------------------------------------------------------ | ------- | ------------------------------------- |
| **Runtime**            | [Node.js](https://nodejs.org/)                               | 16+     | Environnement d'exécution             |
| **Framework**          | [Express.js](https://expressjs.com/)                         | 4.16.1  | Framework web                         |
| **Base de données**    | [MongoDB](https://www.mongodb.com/)                          | Atlas   | Base de données NoSQL                 |
| **ODM**                | [Mongoose](https://mongoosejs.com/)                          | 9.3.3   | Modélisation MongoDB                  |
| **Authentification**   | [bcrypt](https://www.npmjs.com/package/bcrypt)               | 6.0.0   | Hashage des mots de passe             |
| **Tokens**             | [uid2](https://www.npmjs.com/package/uid2)                   | 1.0.0   | Génération de tokens                  |
| **Notifications Push** | [web-push](https://www.npmjs.com/package/web-push)           | 3.6.7   | Envoi de notifications push           |
| **CORS**               | [cors](https://www.npmjs.com/package/cors)                   | 2.8.6   | Middleware CORS                       |
| **Cookies**            | [cookie-parser](https://www.npmjs.com/package/cookie-parser) | 1.4.4   | Gestion des cookies                   |
| **Logging**            | [morgan](https://www.npmjs.com/package/morgan)               | 1.9.1   | Logger HTTP                           |
| **Environnement**      | [dotenv](https://www.npmjs.com/package/dotenv)               | 17.4.0  | Gestion des variables d'environnement |
| **Déploiement**        | [Vercel](https://vercel.com/)                                | -       | Hébergement serverless                |

---

## ✨ Fonctionnalités

### 👤 **Gestion des Utilisateurs**

- **Inscription** – Création de compte utilisateur (par un compte admin)
- **Connexion** – Authentification avec token
- **Abonnements Push** – Gestion des abonnements pour les notifications
- **Statuts utilisateurs** – Différents niveaux d'accès (guest+, star, demo-admin)

### 🎁 **Gestion des Surprises**

- **Création** – Ajout de nouvelles surprises
- **Lecture** – Récupération des surprises disponibles
- **Mise à jour** – Modification des surprises
- **Suppression** – Retrait des surprises
- **Verrouillage/Déverrouillage** – Contrôle d'accès aux surprises

### 🔔 **Notifications Push**

- **Abonnement** – Enregistrement des devices pour les notifications
- **Envoi de notifications** – Notifications en temps réel
- **Configuration VAPID** – Clés publiques/privées pour Web Push

### 🔒 **Sécurité**

- **Hashage des mots de passe** – Utilisation de bcrypt
- **Tokens uniques** – Génération via uid2
- **Protection CORS** – Configuration sécurisée
- **Middleware d'authentification** – Vérification des tokens

---

## 🚀 Installation

### Prérequis

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas) (ou instance locale)

### Étapes

1. **Cloner le dépôt**

   ```bash
   git clone https://github.com/dankysten/ClemApp-backend.git
   cd ClemApp-backend
   ```

2. **Installer les dépendances**

   ```bash
   yarn install
   # ou
   npm install
   ```

3. **Configurer l'environnement**
   Créer un fichier `.env` à la racine avec les variables suivantes :

   ```env
   CONNECTION_STRING=mongodb+srv://<user>:<password>@cluster0.XXXXXXX.mongodb.net/clemapp
   PORT=4000
   EXPO_PUBLIC_VAPID_PUBLIC_KEY=<ta_clé_publique>
   EXPO_PUBLIC_VAPID_PRIVATE_KEY=<ta_clé_privée>
   ```

4. **Lancer le serveur**

   ```bash
   # Mode développement
   yarn dev
   # ou
   npm run dev

   # Mode production
   yarn start
   # ou
   npm start
   ```

5. **Accéder à l'API**
   ```
   🚀 Serveur lancé sur le port 4000
   ```
   L'API sera disponible à l'URL : `http://localhost:4000`

---

## 📡 Endpoints API

### 🔹 **Base URL**

```
http://localhost:4000
```

### 🔹 **Utilisateurs**

| Méthode | Endpoint           | Description                         | Authentification |
| ------- | ------------------ | ----------------------------------- | ---------------- |
| POST    | `/users/signup`    | Inscription d'un nouvel utilisateur | ❌ Non           |
| POST    | `/users/login`     | Connexion et réception du token     | ❌ Non           |
| POST    | `/users/subscribe` | Abonnement aux notifications push   | ✅ Oui           |

### 🔹 **Surprises**

| Méthode | Endpoint         | Description                      | Authentification |
| ------- | ---------------- | -------------------------------- | ---------------- |
| GET     | `/surprises`     | Récupère toutes les surprises    | ✅ Oui           |
| GET     | `/surprises/:id` | Récupère une surprise spécifique | ✅ Oui           |
| POST    | `/surprises`     | Crée une nouvelle surprise       | ✅ Oui           |
| PUT     | `/surprises/:id` | Met à jour une surprise          | ✅ Oui           |
| DELETE  | `/surprises/:id` | Supprime une surprise            | ✅ Oui           |

### 🔹 **Notifications**

| Méthode | Endpoint              | Description                  | Authentification |
| ------- | --------------------- | ---------------------------- | ---------------- |
| POST    | `/notifications/send` | Envoie une notification push | ✅ Oui           |

### 🔹 **Health Check**

| Méthode | Endpoint  | Description                               | Authentification |
| ------- | --------- | ----------------------------------------- | ---------------- |
| GET     | `/health` | Vérifie la connexion à la base de données | ❌ Non           |

---

## 📁 Structure du Projet

```
ClemApp-backend/
├── app.js                    # Point d'entrée et configuration Express
├── package.json             # Dépendances et scripts
├── vercel.json              # Configuration Vercel
├── .env                     # Variables d'environnement
├── .gitignore               # Fichiers ignorés par Git
│
├── bin/
│   └── www                  # Script de démarrage
│
├── models/
│   ├── connection.js        # Connexion à MongoDB
│   ├── users.js             # Modèle User
│   └── surprises.js         # Modèle Surprise
│
├── modules/
│   └── checkBody.js         # Middleware de validation
│
├── routes/
│   ├── users.js             # Routes utilisateurs
│   ├── surprises.js         # Routes surprises
│   └── notifications.js     # Routes notifications
│
└── public/                  # Fichiers statiques
```

---

## 🛡️ Configuration de Déploiement (Vercel)

Le projet est configuré pour être déployé sur **Vercel** avec :

- Runtime : Node.js
- Serverless Functions : Activées
- Configuration automatique via `vercel.json`

**Pour déployer :**

1. Pousser le code sur un dépôt GitHub
2. Importer le projet sur Vercel
3. Configurer les **Environment Variables** :
   - `CONNECTION_STRING`
   - `EXPO_PUBLIC_VAPID_PUBLIC_KEY`
   - `EXPO_PUBLIC_VAPID_PRIVATE_KEY`
4. Déployer !

---

## 📝 Exemples de Requêtes

### Connexion

```bash
curl -X POST http://localhost:4000/users/login \
  -H "Content-Type: application/json" \
  -d '{"username": "johndoe", "password": "securePassword123"}'
```

### Récupérer les surprises

```bash
curl -X GET http://localhost:4000/surprises \
  -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

### Envoyer une notification push

```bash
curl -X POST http://localhost:4000/notifications/send \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{"title": "Nouvelle surprise !", "body": "Vérifie l\'application !"}'
```

---

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

- **Ouvrir une issue** pour signaler un bug ou proposer une amélioration
- **Forker le projet** et soumettre une Pull Request

---

## 📜 Licence

Ce projet est sous licence **[MIT](https://opensource.org/licenses/MIT)**.

---

## 👤 Auteur

📌 **Romain Authier**  
📧 [dankysten](https://github.com/dankysten)  
💼 Développeur Fullstack junior

---

> _"Parce que chaque surprise mérite d'être découverte au bon moment."_ 🎉✨
