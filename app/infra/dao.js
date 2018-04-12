
function ProdutosDAO(connection){
  this._connection = connection;
}

ProdutosDAO.prototype.lista = function(callback){
    this._connection.query('select * from dht22', callback);
}

ProdutosDAO.prototype.salva = function(dht22, callback){
    this._connection.query('insert into dht22 set ?', dht22, callback);
}

module.exports = function(){
    return ProdutosDAO;
}
