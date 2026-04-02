# 1. Utiliser une image de base légère (Node 20 sur Alpine Linux)
FROM node:20-alpine AS base

# 2. Définir le dossier de travail dans le conteneur
WORKDIR /app

# 3. Copier uniquement les fichiers de dépendances pour optimiser le cache
COPY package*.json ./

# 4. Installer les dépendances
RUN npm install

# 5. Copier le reste du code source
COPY . .

# 6. Exposer le port que Next.js utilise par défaut
EXPOSE 3000

# 7. Commande de lancement pour le développement
CMD ["npm", "run", "dev"]