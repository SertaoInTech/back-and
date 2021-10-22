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
==========================================================================================
>Comando do yarn:

    #INSTALAR PACOTE
        $ yarn add {nome do pacote}

    #INICIAR PROJETO
        $ yarn init -y

    #INSTALAR NODE_MODULES
        $ yarn add yarn

==========================================================================================

>Manipulando DB migration sequelise

    #PARA CRIAR DATABASE:
        $ yarn sequelize db:create

    #PARA CRIAR UMA ARQUIVO DE MIGRATION:
        $ yarn sequelize migration:create --name=c{nome que deseja colocar}

    #COLOCAR AS MIGRATION EM PRODUÇÃO:
        $ yarn sequelize db:migrate

==========================================================================================
> Alguns comandos de debbug no linux
    
    #MATAR O SERVIÇO DA PORTAS
        $ sudo killall -9 node

>   #SABER QUAL SERVIÇO ESTA USANDO UMA PORTA

        $ sudo lsof -i :{numero da porta a consultar}
