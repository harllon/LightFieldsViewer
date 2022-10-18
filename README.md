# Light Fields Viewer

Hello! Welcome to our project "Light Fields Viewer". This work was made as a final project for conclusion of our bachelor degree on Computer Engineering 
at Military Engineering Institute (IME).

The goal of this project was to create an web viewer of light fields images with two main features. The first one is the capability to change the view point of the image.
The second feature is the capability to change the focus of the selected image. 

Here, we made the viewer available for everyone and we'll explain below how to setup the project to run.

Setup:

1) Clone this repository
2) Go to the directory cloned on your computer, open a terminal inside this folder and run the following command on terminal: "npm install"
3) Run the following command: "npm start"
4) Go to your browser and write: "http://localhost:3000"

Now you can play as much as you like. If you have any question about how to use, you can press the help button on the website.

Now, let's talk about how to include new datasets.

To include new datasets, follow these steps:

1) Copy the files to the datasets folder. Please pay attention in two factors:
1.1) The image files need to follow a specific pattern of name. Example: 005_009.png. The first three numbers carry information about the row of the image matrix that this image belongs. The last three numbers carry information about the column.
1.2) Create a new folder inside the datasets directory to put all your image files.
2) Go to index.html and create a new button for your dataset, following the structure created on the file.
3) Go to requisition.js, access the button created with: "document.getElementById(id)" and create a new "get" requisition for the following address 'http://localhost:3000/src/public/datasets/(your file name)'. Don't forget to pass the disparity range.
4) Go to imageController.js and create a new controller for your dataset. Just follow the pattern and change the "folder" and "imgSrc" variables. Don't forget to export your controller!
5) Go to routes.js and set the new route created: "router.get('/src/public/datasets/(your Dataset)', controller.(your Controller Created))".
6) Now you can run "npm start" and be happy!

_______________________________________________________________________________________________________________________________________________________________________

Olá! Bem vindo ao nosso projeto "Visualizador de Light Fields". Esse trabalho foi confeccionado como trabalho de conclusão de curso(TCC) do meu bacharelado em Engenharia da Computação no Instituto Militar de Engenharia(IME)

O objetivo do projeto foi criar um visualizador de light fields com duas principais funcionalidades. A primeira funcionalidade é a mudança de pontos de vista da imagem e a segunda funcionalidade é a mudança de plano focal da imagem selecionada.

Aqui nós disponibilizamos o visualizador para uso geral e, iremos explicar como configurar o projeto localmente.

Configuração:

1) Clone este repositório
2) Vá para o diretório clonado e abra um terminal dentro dessa pasta. Em seguida, rode o seguinte comando: "npm install"
3) Após isto, rode "npm start"
4) Vá para seu navegador e digite: "http://localhost:3000"

Agora você pode brincar o quanto quiser! Se você tiver dúvidas de como usar o software, sinta-se a vontade para ir até o botão de ajuda no canto inferior direito.

A partir de agora, vamos explicar como inserir novos datasets ao software.

1) Copie as imagens para a pasta datasets. Preste atenção em dois fatores:
1.1) Os arquivos devem seguir uma nomenclatura padrão. Exemplo: 005_009.png. Os 3 primeiros números indicam a linha da matriz de imagens ao qual a imagem pertence e os 3 últimos indicam a coluna.
1.2) Crie uma nova pasta para colocar as imagens de forma que o caminho fique datasets/(seu diretorio)
2) Vá até o index.html e crie um novo botão para seu dataset, basta seguir a estrutura já criada para o "Airplane" dataset.
3) Vá até o requisition.js e crie uma referência ao botão criada com:  "document.getElementById(id)". Após isto, crie uma nova requisição "get" para o seguinte endereço 'http://localhost:3000/src/public/datasets/(seu dataset)'. Basta seguir a estrutura criada para o "airplane" e n"ao se esqueça de passar um intervalo de disparidade!
4) Vá para imageController.js e crie um novo controller para seu dataset. Siga o padrão criado para alterar as variáveis "folder" e "imgSrc". Não se esqueça de exportar seu controller ao final.
5) Vá para o arquivo routes.js e crie a nova rota definida por: "router.get('/src/public/datasets/(seu Dataset)', controller.(seu controller))".
6) Agora rode "npm start" e seja feliz!
