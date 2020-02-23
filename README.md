## Confusion Restaurant App

A Restaurant Single Page Application built using React JS, Redux for State Management with thunks as Middleware and a mock JSON Server.
Designing Done using React-Strap.

## DEMO

![](Gif/1.gif)
![](Gif/2.gif)

## To Setup up JSON Server

json-server is a node module, and hence can be installed globally by typing the following at the command prompt
npm install json-server -g

Navigate to the Json Server Folder In the project and type the following command
json-server --watch db.json -p 3001 -d 2000

         where,
            p=port
            d = delay

By default the server should listening at port 3001. If not kindly change the configuration in "src/shared/baseURL"

## Final Steps

npm i && npm start
