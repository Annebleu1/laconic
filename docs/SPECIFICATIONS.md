Cahier des Charges — Project "laconic"

1. Présentation & Vision

1.1 Objectif Stratégique

L'application laconic vise à supprimer la charge mentale liée à la vie en communauté. Contrairement aux outils génériques (Splitwise pour l'argent, Todoist pour les tâches), laconic fusionne ces besoins dans un écosystème unique où les actions sont liées (ex: une corvée non faite peut impacter un score de fiabilité).

1.2 Indicateurs de Réussite (KPI)

Fiabilité : Précision des calculs au centime près.

Adoption : Temps de saisie d'une dépense < 10 secondes.

Engagement : Taux de complétion des tâches hebdomadaires > 80%.

2. Analyse des Utilisateurs

Segment	Besoins Spécifiques
Étudiants	Budget serré, besoin de micro-remboursements rapides.
Jeunes Actifs	Gain de temps, automatisation des tâches récurrentes.
Admin (Owner)	Gestion des entrées/sorties et des accès à la colocation.

3. Spécifications Fonctionnelles (Détaillées)

3.1  Moteur de Dépenses (Core Logic)

Modes de répartition : Égalitaire, par pourcentage, ou par parts (ex: une chambre plus grande paie plus d'électricité).

Gestion du "Settlement" : Algorithme de minimisation des transactions (ex: si A doit à B et B doit à C, A paie directement C).

Récurrence : Génération automatique des loyers et abonnements internet chaque mois.

3.2 Système de Chores (Gamification)

Algorithme de Rotation : Attribution intelligente pour éviter que la même personne fasse toujours la vaisselle.

Preuve de complétion : Possibilité d'attacher une photo pour valider une tâche (optionnel).

Rappels Push : Notifications contextuelles (ex: "C'est ton tour de sortir les poubelles demain").

3.3 Vie de la Communauté

Tableau d'affichage : Un "Wall" pour les annonces importantes (ex: "Ma copine vient dormir ce week-end").

Inventaire partagé : Liste de courses collaborative avec système de "Check-list".

3.4 Diagramme de Cas d'Utilisation (Use Case)

Le diagramme de cas d'utilisation permet de visualiser les interactions entre les acteurs (Utilisateurs) et le système.

Acteurs :

Colocataire (User) : L'utilisateur standard qui interagit au quotidien.

Administrateur (Owner) : Celui qui a créé la "maison" sur l'app et gère les membres.

Système (laconic) : Gère les calculs automatiques et les notifications.

📝 Premières User Stories (Sprint 1)

Thème 1 : Gestion de la Colocation & Accès

US.1 : En tant que nouvel utilisateur, je veux créer un compte avec mon email afin d'accéder aux fonctionnalités de l'application.

US.2 : En tant qu'Administrateur, je veux générer un code d'invitation unique afin de permettre à mes colocataires de rejoindre ma maison sécurisée.

US.3 : En tant que Colocataire, je veux rejoindre une colocation via un code afin de commencer à partager les frais avec mes amis.

Thème 2 : Gestion des Dépenses (Le "Cœur")

US.4 : En tant que Colocataire, je veux ajouter une dépense (titre, montant, date) afin que le groupe sache ce que j'ai payé.

US.5 : En tant que Colocataire, je veux sélectionner qui participe à une dépense afin que le calcul soit équitable (ex: ne pas faire payer la viande à un végétarien).

US.6 : En tant que Colocataire, je veux voir mon solde global afin de savoir si je dois de l'argent ou si on m'en doit.

Thème 3 : Gestion des Tâches (Chores)

US.7 : En tant que Colocataire, je veux déclarer une tâche comme terminée afin de gagner des points et de tenir mes colocataires informés.

US.8 : En tant que Système, je veux envoyer une notification de rappel afin que personne n'oublie de sortir les poubelles le jour J.

Thème 4 : Gestion des Espaces & Ressources (Booking)

L'objectif ici est d'éviter les "embouteillages" dans la maison.

US.9 : En tant que Colocataire, je veux voir la disponibilité d'un espace commun (salon, cuisine, buanderie) sur un calendrier partagé afin de planifier mes activités.

US.10 : En tant que Colocataire, je veux réserver un créneau horaire pour un espace spécifique afin de prévenir mes colocataires que l'espace sera occupé.

US.11 : En tant que Colocataire, je veux indiquer le motif de ma réservation (ex: "Dîner de famille", "Session de ménage intensif") afin que mes colocataires comprennent l'importance de l'occupation.

US.12 : En tant qu'Administrateur, je veux définir des "Règles d'Espace" (ex: maximum 2h pour la buanderie, pas de fête après 22h) afin de maintenir une harmonie dans la maison.

US.13 : En tant que Colocataire, je veux annuler ma réservation si mon plan change afin de libérer l'espace pour les autres.

4. Architecture Technique & DevOps

4.1 Stack de Référence

Frontend : Next.js 14 (App Router) + Tailwind CSS + Lucide React (Icons).

Backend : Node.js (NestJS pour la robustesse ou Express pour la rapidité).

Base de données : PostgreSQL (relationnel indispensable pour la cohérence des dettes).

Cache : Redis (pour la gestion des sessions et notifications temps réel).

4.2 Infrastructure & CI/CD

Conteneurisation : Docker & Docker Compose (Environnements Dev/Stage/Prod identiques).

CI/CD : GitHub Actions (Lint -> Test -> Build Image -> Deploy).

Monitoring : Sentry pour la remontée d'erreurs en production.

5. Modèle de Données (Schéma Relationnel)

Extrait de code
erDiagram
    USER ||--o{ LACONIC_MEMBER : belongs_to
    LACONIC_GROUP ||--o{ LACONIC_MEMBER : has
    LACONIC_GROUP ||--o{ EXPENSE : contains
    LACONIC_GROUP ||--o{ TASK : manages
    EXPENSE ||--o{ DEBT : generates
    USER ||--o{ DEBT : owes_or_is_owed
Logic Debt : Une table pivot Debts lie l'initiateur de la dépense et les bénéficiaires pour permettre un historique immuable.

6. UX / UI & Design System

Mobile-First : L'application sera utilisée à 90% sur smartphone (dans la cuisine, au supermarché).

Accessibilité : Respect des normes WCAG (contrastes, tailles de police).

Feedback Visuel : Squelettes de chargement (Skeletons) et Toasts de confirmation.

7. Sécurité & Conformité

Authentification : JWT avec Refresh Tokens ou intégration Clerk/Supabase Auth.

RGPD : Fonction "Exporter mes données" et "Supprimer mon compte". Chiffrement des mots de passe via Argon2/BCrypt.

Validation : Utilisation de Zod ou Joi pour la validation stricte des schémas d'API.

Planning de Développement (V2)

Sprint 1 (Fondations) : Auth + Création de Groupe + DB Schema.

Sprint 2 (Finance) : Moteur de calcul des dettes + Historique.

Sprint 3 (Organisation) : Gestion des tâches + Calendrier.

Sprint 4 (Ops) : Dockerisation + Déploiement Cloud + QA.