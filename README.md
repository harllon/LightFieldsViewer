# pfc_lightfieldViewer

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

1) Copy the files to the dataset folder.
2) Go to index.html and create a new button for your dataset, following the structure created on the file.
3) Go to requisition.js, access the button created with: "document.getElementById(id)" and create a new "get" requisition for the following address 'http://localhost:3000/src/public/datasets/(your file name)'. Don't forget to pass the disparity range.
4) Go to imageController.js and create a new controller for your dataset. Just follow the pattern and change the "folder" and "imgSrc" variables. Don't forget to export your controller!
5) Go to routes.js and set the new route created: "router.get('/src/public/datasets/(your Dataset)', controller.(your Controller Created))".
6) Now you can run "npm start" and be happy!
