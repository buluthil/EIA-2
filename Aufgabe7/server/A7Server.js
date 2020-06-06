"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
const Mongo = require("mongodb");
var L07_Haushaltshilfe;
(function (L07_Haushaltshilfe) {
    let orders;
    let port = process.env.PORT;
    if (port == undefined)
        port = 5001;
    let databaseUrl = "mongodb+srv://Hilal:<password>@eia-2-xoi33.mongodb.net/<dbname>?retryWrites=true&w=majority";
    /* mongodb+srv://Hilal:<password>@eia-2-xoi33.mongodb.net/<dbname>?retryWrites=true&w=majority*/
    startServer(port);
    connectToDatabase(databaseUrl);
    function startServer(_port) {
        let server = Http.createServer();
        console.log("Server starting on port:" + _port);
        server.listen(_port);
        server.addListener("request", handleRequest);
    }
    async function connectToDatabase(_url) {
        let options = { useNewUrlParser: true, useUnifiedTopology: true };
        let mongoClient = new Mongo.MongoClient(_url, options);
        await mongoClient.connect();
        orders = mongoClient.db("CocktailBar").collection("Orders");
        console.log("Database connection ", orders != undefined);
    }
    function handleRequest(_request, _response) {
        console.log("What's up?");
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            for (let key in url.query) {
                _response.write(key + ":" + url.query[key] + "<br/>");
            }
            let jsonString = JSON.stringify(url.query);
            _response.write("\n" + "Alert jsonString aus A7Server.ts: " + jsonString);
            storeOrder(url.query);
        }
        _response.end();
    }
    function storeOrder(_order) {
        orders.insert(_order);
    }
})(L07_Haushaltshilfe = exports.L07_Haushaltshilfe || (exports.L07_Haushaltshilfe = {}));
//# sourceMappingURL=A7Server.js.map