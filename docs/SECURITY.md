# 🔒 Politique de Sécurité - laconic

## 1. Authentification
* Utilisation de **Auth.js** pour la gestion des sessions.
* Hashage des mots de passe via **Argon2id**.
* Durée des sessions : 30 jours (persistantes).

## 2. Protection des Données (Privacy)
* **Isolation stricte** : Aucun utilisateur ne peut accéder aux données d'une `house_id` différente de la sienne.
* **Validation des entrées** : Utilisation de `Zod` pour valider chaque donnée arrivant de l'extérieur (API).

## 3. Sécurité Infrastructure
* Base de données isolée dans un réseau Docker interne.
* Pas d'accès direct à PostgreSQL depuis l'extérieur (uniquement via l'app).