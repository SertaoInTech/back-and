>Instalando o Yarn linux:

    #REMOVER
        $ sudo apt remove cmdtest
        $ sudo apt remove yarn

    #INSTALAR
        $ curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
        $ echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.$ list.d/yarn.list
        $ sudo apt-get update
        $ sudo apt-get install yarn -y
        $ yarn install

>Instalando o npm linux

    #REMOVER
        $ sudo apt remove npm

    #INSTALAR
        $ sudo apt install npm

>Comando do yarn:

    #INSTALAR PACOTE
        $ yarn add {nome do pacote}

    #INICIAR PROJETO
        $ yarn init -y

    #INSTALAR NODE_MODULES
        $ yarn add yarn

>Comando do npm:

    #INSTALAR PACOTE
        $ npm install {nome do pacote}

    #INICIAR PROJETO
        $ npm init -y

    #INSTALAR LIB DO PROJETO NODE_MODULES
        $ npm install

>Manipulando DB migration sequelise com yarn

    #PARA CRIAR DATABASE:
        $ yarn sequelize db:create

    #PARA CRIAR UMA ARQUIVO DE MIGRATION:
        $ yarn sequelize migration:create --name=c{nome que deseja colocar}

    #COLOCAR AS MIGRATION EM PRODUÇÃO:
        $ yarn sequelize db:migrate

>Manipulando DB migration sequelise com npm

    #INSTALAR sequelize-cli
        $ npm install --save-dev sequelize-cli

    #PARA CRIAR DATABASE:
        $ npm sequelize db:create {obs: para SGDB sqlite não precisa rodar esse comando}

    #PARA CRIAR UMA ARQUIVO DE MIGRATION:
        $ npm sequelize migration:create --name={nome que deseja colocar}

    #COLOCAR AS MIGRATION EM PRODUÇÃO:
        $ npx sequelize db:migrate {obs: esse comando para SGDB sqlite, já cria o DB automaticamente}
    
> Alguns comandos de debbug no linux
    
    #FINALIZAR O SERVIÇO QUE USA UMA PORTA
        $ sudo killall -9 node

>   #SABER QUAL SERVIÇO ESTA USANDO UMA PORTA

        $ sudo lsof -i :{número da porta a consultar}



