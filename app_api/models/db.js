var mongoose = require('mongoose');
var gracefulShutdown;
//string de conexao chamada de dbURI
var dbURI = 'mongodb://localhost/Loc8r';

if(process.env.NODE_ENV === 'production'){
	dbURI = process.env.MONGOLAB_URI;
}
//usando a metodo connect de mongoose, conecta-se o db pela string de conexao
mongoose.connect(dbURI);
//monitoramento da conexao do mongoose
mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error:' + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected');
});
//
gracefulShutdown = function(msg, callback){
	mongoose.connection.close(function(){
		console.log('Mongoose disconnected through ', + msg);
		callback();
	});
};
// Para reinicio do nodemon
process.once('SIGUR2', function(){
	gracefulShutdown('nodemon restart', function(){
		process.kill(process.pid, 'SIGUR2');
	});
});
// Para o encerramento da aplicacao
process.on('SIGINT', function(){
	gracefulShutdown('app termination', function(){
		process.exit(0);
	});
});
 // Para o encerramento da aplicacao no Heroku
process.on('SIGTERM', function(){
	gracefulShutdown('Heroku app shutdown', function(){
		process.exit(0);
	});
});

require('./locations');
