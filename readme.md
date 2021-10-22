>Instalando o Yarn linux:

#Remover
sudo apt remove cmdtest
sudo apt remove yarn

#instalaçao do yarn e remoção
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update
sudo apt-get install yarn -y
yarn install


>Para criar a tabela com sequelise:

$ yarn sequelize db:create

> Crinado uma migration apoós feito adição:

$ yarn sequelize migration:create --name=create-users

> Rodar as migrations:

$ yarn sequelize db:migrate

> Para matar o processo pela nome no linux

$ sudo killall -9 node

> Para verificar se a porta está em uso

$ sudo lsof -i :3333
