# Arkeup — Site vitrine IA (ArkeupIADATALP)

Ce dépôt contient le code source du site vitrine d'Arkeup IA — une petite application single-page (React + Vite + TypeScript) utilisée pour présenter l'expertise d'Arkeup en intelligence artificielle, illustrer des cas d'usage et fournir des pages d'atterrissage ciblées pour des offres spécifiques.

Le site est développé en TypeScript et React, stylisé avec Tailwind CSS et empaqueté avec Vite. Il propose plusieurs pages/landing pages (routes) pour des offres telles que e‑commerce, géo‑IA, control tower, etc.

## Fonctionnalités principales

- Application SPA React avec (react-router)
- Tailwind CSS pour le style utilitaire
- TypeScript pour la sûreté des types
- Gestion du consentement (Cookiebot) et intégration Google Analytics dans `index.html`
- Plusieurs pages ciblées et une page d'accueil marketing

## Stack technique

- React 18 + react-router-dom
- TypeScript
- Vite (serveur dev + build)
- Tailwind CSS + PostCSS
- lucide-react (icônes)
- react-intersection-observer

## Structure du projet (fichiers/dossiers importants)

- `index.html` — point d'entrée HTML (contient Cookiebot et Google Analytics)
- `src/main.tsx` — point d'entrée React
- `src/App.tsx` — routes et layout principal
- `src/components/` — composants réutilisables (Header, Hero, Footer, ...)
- `src/pages/` — pages et landings spécifiques
- `public/` — ressources statiques (images, favicon, ...)
- `package.json` — scripts et dépendances

Pages / routes notables (définies dans `src/App.tsx`) :

- `/` — Page d'accueil / landing (Hero, ProcessSteps, UseCases, References, Expertise)
- `/ecommerce` — Landing E‑commerce
- `/about` — À propos
- `/agent-augmente` — Landing Agent augmenté
- `/socle-climatique` — Landing Socle climatique
- `/control-tower` — Landing Control Tower
- `/geo-ai` — Landing Geo AI
- `/use-cases` — Liste complète des cas d'usage
- `/mentions-legales` — Mentions légales

## Analytics et gestion du consentement

`index.html` contient les scripts Cookiebot (pour la gestion du consentement) et Google Analytics (`gtag`). Si vous développez localement et souhaitez éviter d'envoyer des données analytiques ou de charger Cookiebot, commentez ces scripts dans `index.html`.

