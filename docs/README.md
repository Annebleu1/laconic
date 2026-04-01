🏠 laconic — Harmonious Co-Living Management
laconic est une application web moderne conçue pour simplifier la vie en colocation. Elle centralise la gestion des espaces, du temps, des corvées et des finances pour réduire les frictions et transformer la cohabitation en une expérience transparente, équitable et efficace.

✨ Fonctionnalités Clés
🏠 Gestion de l'Espace & Loyer

Calculateur de loyer équitable : Répartition basée sur la taille et les équipements des chambres.

Réservation d'espaces : Planning partagé pour la cuisine, la buanderie ou le salon.

⏰ Coordination du Temps

Calendrier de maison : Centralisation des événements et des indisponibilités.

Heures calmes : Rappel des règles de vie commune pour respecter le sommeil de chacun.

🧹 Organisation des Corvées

Système à points : Valorisation des tâches pour garantir une équité réelle.

Rotation automatique : Attribution dynamique des corvées avec rappels automatisés.

💸 Finances & Factures

Suivi des dépenses : Centralisation des tickets de caisse et factures communes.

Splitting intelligent : Pondération des charges (électricité, internet, courses).

🛠 Stack Technique
Couche	Technologie
Frontend	React / Next.js, TailwindCSS
Backend	Node.js (NestJS / Express)
Database	PostgreSQL via Supabase
Auth	Supabase Auth / Clerk
Infrastructure	Docker, GitHub Actions
🐳 Docker & Environnement
Nous utilisons Docker pour garantir que l'application fonctionne de la même manière sur toutes les machines.

Lancement Rapide

Bash
# 1. Cloner et configurer
git clone https://github.com/annebleu1/laconic.git
cd laconic
cp .env.example .env

# 2. Démarrer avec Docker Compose
docker-compose up --build
L'interface sera disponible sur http://localhost:3000.

🔄 CI/CD & Automatisation
Le projet intègre un pipeline GitHub Actions qui s'exécute à chaque Pull Request vers main :

Validation : Vérification de la syntaxe (Linting) et des types (TypeScript).

Tests : Exécution de la suite de tests unitaires et d'intégration.

Build : Construction de l'image Docker multi-stage.

Release : Génération automatique du changelog basée sur les commits Angular.

🤝 Contribution & Standards de Code
Pour maintenir une base de code saine, nous suivons la Convention de Commits Angular.

Format des Messages

Chaque commit doit respecter la structure suivante : type(scope): description

feat : Une nouvelle fonctionnalité.

fix : Correction d'un bug.

docs : Changements dans la documentation.

style : Mise en forme, points-virgules manquants.

refactor : Modification du code sans changement fonctionnel.

perf : Amélioration des performances.

test : Ajout ou modification de tests.

chore : Maintenance (build, outils, dépendances).

Exemple : feat(chores): add automated points redistribution system

🧱 Structure du Projet
Plaintext
/src
 ├── components/     # Composants atomiques (UI)
 ├── pages/          # Pages Next.js et routing
 ├── hooks/          # Logique React réutilisable
 ├── services/       # Clients API (Supabase, Firebase)
 ├── styles/         # Thème global et Tailwind
 └── utils/          # Fonctions pures et helpers
🗺️ Roadmap
[x] MVP : Comptes utilisateurs, création de maison, corvées et dépenses.

[ ] Space Booking : Système de réservation en temps réel.

[ ] AI-Assisted : Distribution intelligente des corvées par IA.

[ ] Mobile : Version native via React Native.

📝 Licence
Distribué sous la licence MIT. Voir LICENSE pour plus d'informations.