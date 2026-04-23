📜 Charte de Projet - laconic
1. Vision & Objectifs

laconic est une application de gestion de colocation minimaliste et sécurisée. L'objectif est de simplifier la gestion des finances, des tâches et des espaces communs sans friction inutile.

2. Benchmark & Justification Technologique

Framework. Next.js 
(App Router),Rendu hybride (SSR/Client) pour la performance et le SEO. API Routes intégrées.

Langage,TypeScript,
Typage statique pour réduire les bugs en production et faciliter la maintenance.

Base de Données,PostgreSQL,
Base relationnelle robuste. Support natif des types complexes (ex: tstzrange pour le booking).

ORM,Prisma,
Abstraction de la BDD avec typage automatique. Migrations simplifiées.

Sécurité,Auth.js / Zod / Bcrypt,
Standard de l'industrie pour l'authentification et la validation de schéma.

Infrastructure,Docker & Compose,
Environnement de développement et de production identique (Isomorphisme).


3. Plan de Sécurité (Sécurité par Couches)

Authentification : Sessions sécurisées via cookies HttpOnly.

Validation : Zod filtre 100% des entrées (API & Formulaires).

Hachage : Mots de passe chiffrés avec Bcrypt (12 rounds).

Isolation : Chaque requête SQL est contrainte par un house_id.

En-têtes : Implémentation de CSP (Content Security Policy) pour bloquer les attaques XSS.

4. Politique de Sauvegarde (Backup Strategy)

La perte de données financières est critique. Nous mettons en place la stratégie suivante :

Méthode : Utilisation de pg_dump automatisé.

Fréquence :

Quotidienne : Export complet à 03:00 UTC.

Hebdomadaire : Archivage compressé chaque dimanche.

Stockage :

Local (Volume Docker dédié).

Externe (Object Storage type AWS S3 ou Backblaze B2 pour le "Disaster Recovery").

Rétention : Conservation des 7 derniers jours et des 4 dernières semaines.

5. Roadmap Prévisionnelle (MVP)

Phase 1 : Fondations (S1)

[ ] Système d'Auth complet (Login/Register).

[ ] Création de "Maison" et système d'invitation.

[ ] Middleware de sécurité et validation d'environnement.

Phase 2 : Finance & Dépenses (S2)

[ ] Ajout de dépenses avec répartition.

[ ] Calcul automatique des dettes entre membres.

[ ] Dashboard des soldes.

Phase 3 : Espaces & Vie Commune (S3)

[ ] Création de pièces (Cuisine, Salon, etc.).

[ ] Système de réservation avec calendrier.