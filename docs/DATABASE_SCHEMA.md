🗄️ Documentation de la Structure de Données - laconic
Ce document détaille l'organisation des données. Chaque entité a été conçue pour garantir la sécurité des transactions et la simplicité des relations.

👥 Entité : Utilisateur (User)
C'est le profil individuel. Chaque utilisateur possède un compte sécurisé et peut être lié à une colocation.

Identifiant unique (id) : Un jeton de type CUID généré automatiquement pour éviter les collisions.

Identité (email, fullName) : L'email est l'identifiant de connexion unique. Le nom complet est utilisé pour l'affichage dans les bilans de dépenses.

Sécurité (password) : Jamais stocké en clair. Contient l'empreinte hachée via Bcrypt.

Rôles (role) : Définit les permissions. Un admin peut gérer la maison, un member peut seulement ajouter des dépenses.

Lien Maison (houseId) : Référence la maison actuelle de l'utilisateur.

🏠 Entité : Maison (House)
C'est l'espace partagé. Elle regroupe les utilisateurs et centralise toutes les activités communes.

Identifiant unique (id) : Référence interne pour lier les membres et les frais.

Nom de l'espace (name) : Le petit nom de la coloc (ex: "La Villa des Potes").

Système d'accès (inviteCode) : Un code unique et sécurisé. C'est la "clé" que l'on partage à ses colocataires pour qu'ils rejoignent le groupe.

Historique (createdAt) : Date de fondation de la colocation sur l'application.

💸 Entité : Dépense (Expense)
Le cœur financier de l'application. Elle enregistre qui a payé quoi et pour qui.

Détails du paiement (title, amount) : Le libellé de l'achat et le montant total TTC.

Responsable du paiement (userId) : Pointe vers l'utilisateur qui a sorti sa carte bancaire.

Contexte de groupe (houseId) : Assure que la dépense n'est visible que par les membres de la maison concernée.

Horodatage (createdAt) : Permet de générer des graphiques de dépenses mensuels ou hebdomadaires.

🛡️ Règles d'Intégrité Critique
Principe de Confidentialité
Aucune dépense ne peut exister sans être rattachée à la fois à un Utilisateur (qui paye) et à une Maison (le groupe). Si l'un des deux manque, la donnée est rejetée par la base.

Performance
Les recherches par email et par code d'invitation sont indexées nativement, garantissant une connexion instantanée même avec des milliers d'utilisateurs.
