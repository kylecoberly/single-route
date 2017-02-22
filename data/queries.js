var database = require("./database-connection");

module.exports = {
    getCards: function(){
        return database("card").select("*");
    },

    addCard: function(card){
      return database("card").insert(card);
    }
}
