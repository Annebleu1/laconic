# ⚙️ Méthodologie de Travail - laconic

Pour maximiser l'efficacité et la clarté du développement, nous utilisons la méthodologie **Kanban**.

## 📋 Flux de Travail (Board)
Le projet est géré via un tableau de bord divisé en 5 colonnes :

1. **Backlog** : Toutes les idées et User Stories validées.
2. **To Do** : Tâches prioritaires sélectionnées pour le développement immédiat.
3. **In Progress** : Tâches en cours de codage (Limite : 2 tâches max).
4. **Review / QA** : Vérification du code et validation du pipeline CI/CD.
5. **Done** : Fonctionnalité déployée et fonctionnelle.

## 🤝 Collaboration IA & Humain
* **Binôme** : Utilisateur (Lead Dev/Product Owner) & Gemini (Architecte/Pair Programmer).
* **Communication** : Discussions itératives pour définir les specs avant chaque phase de code.
* **Validation** : Toute nouvelle fonctionnalité doit passer le pipeline GitHub Actions (Lint, Test, Docker Build).

## 🪵 Gestion des Commits
Nous suivons la convention **Angular/Conventional Commits** pour garantir un historique clair et permettre la génération automatique de changelogs.