# Devoir MongoDB

Le jeu de données [Panneaux de stationnement de la Ville de Québec](https://www.donneesquebec.ca/recherche/dataset/vque_7/resource/27480cd1-ab19-47fe-a93b-9d526a0eb1e3). Le jeu de données contient 34 180 panneaux en date du 26 août 2022.

## Commandes

``` sh
docker compose up -d # Construire le conteneur Docker

# Accéder au conteneur de manière interactive avec authentification
# ou docker exec -it devoir1 mongo -u root -p mdp_root  pour le faire en root
docker exec -it devoir1 mongo -u student -p glo-4035 --authenticationDatabase panneaux_ville_de_quebec

docker compose down # Fermer le conteneur Docker
```

## Documentation

- [How to pass environment variable to mongo script](https://stackoverflow.com/questions/39444467/how-to-pass-environment-variable-to-mongo-script/60192758#60192758)
- [Dockerizing a Mongo Database](https://medium.com/swlh/dockerizing-a-mongo-database-ac8f8219a019)