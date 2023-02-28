para compilar os passos são:

gerar o build
ng build --configuration production --base-href https://megalexandre.github.io/galileu/

dar push na branch de pages
ngh --branch=gh-pages

-------------------------------
ng build --configuration production
docker build -t alexandrequeiroz/acal-app:0.0.1 .
docker push alexandrequeiroz/acal-app:0.0.1
