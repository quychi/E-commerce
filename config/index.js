var configValues = require("./config");

module.exports = {
    getDbConnectionString: function () {
        return `mongodb+srv://${ configValues.username }:${ configValues.password }@cluster0.bpjft.mongodb.net/${ configValues.dbname }?retryWrites=true&w=majority`;  //set db user, pass mongodb created by mlab.com (read from config.json)
    }
}