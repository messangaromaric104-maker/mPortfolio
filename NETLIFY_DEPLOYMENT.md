## Déploiement sur Netlify

### Prérequis
- Un compte Netlify (netlify.com)
- Un repository GitHub, GitLab, ou Bitbucket avec le code

### Étapes de déploiement

#### Option 1 : Via le tableau de bord Netlify (Recommandé)

1. Accédez à [netlify.com](https://netlify.com)
2. Cliquez sur **"New site from Git"**
3. Connectez votre provider Git (GitHub/GitLab/Bitbucket)
4. Sélectionnez le repository
5. Netlify détectera automatiquement la configuration `netlify.toml`
6. Cliquez sur **"Deploy site"**

Le site sera construit et déployé automatiquement. Netlify utilisera:
- **Commande de build**: `npm run build`
- **Dossier de publication**: `.next`
- **Node.js version**: 20
- **Plugin**: @netlify/plugin-nextjs (SSR/ISR)

#### Option 2 : CLI Netlify

```bash
# Installez la CLI
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Déployer le site
netlify deploy --prod
```

### Fonctionnalités activées

✓ **Server-Side Rendering (SSR)** - Pages générées à chaque requête
✓ **Incremental Static Regeneration (ISR)** - Pages pré-générées et révalidées
✓ **Image Optimization** - Images optimisées automatiquement
✓ **Security Headers** - Protection contre les attaques courantes
✓ **Static Asset Caching** - Cache long terme pour les assets

### Configuration

Le fichier `netlify.toml` contient:
- Headers de sécurité (X-Frame-Options, X-Content-Type-Options, etc.)
- Règles de cache pour les images et assets
- Configuration du plugin Next.js

Tous les paramètres peuvent être modifiés dans `netlify.toml`.

### Variables d'environnement

Si votre app utilise des variables d'environnement:

1. Allez dans **Site settings** > **Build & deploy** > **Environment**
2. Cliquez **Add environment variables**
3. Ajoutez vos clés et valeurs
4. Redéployez le site

### Support & Documentation

- [Documentation Netlify Next.js](https://docs.netlify.com/integrations/frameworks/next-js/)
- [Plugin @netlify/plugin-nextjs](https://github.com/netlify/next-js-plugin)
