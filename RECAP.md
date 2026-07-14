## Sécurité
- Signature SSH des commits (clé publique ajoutée dans les paramètres GitHub)
- Branches dev/prod protégées : suppression impossible, PR obligatoire, 
  linter au vert, commits signés requis

## Qualité de code
- Husky : lint automatique à chaque commit local
- GitHub Actions (.github/workflows/lint.yml) : re-vérifie le lint côté 
  distant → impossible de contourner via le hook local

## Collaboration
- Issues templates en .yml (.github/ISSUE_TEMPLATE/), liées aux PR
- PR template (.github/pull_request_template.md), merge via ruleset
- GitHub Projects pour le suivi d'avancement
- Gitflow respecté : nommage des commits, branches, releases

## Documentation
- README (présentation + lancement du projet)
- CODE_OF_CONDUCT (règles éthiques)
- CONTRIBUTING (règles de contribution)

## Configuration
- .gitignore : exclut node_modules, .env, la cave
- Double remote : push simultané sur un 2e repo GitHub
  `git remote set-url --add --push origin <url-repo-2>`