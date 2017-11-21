// var msg = require('./mod_teste')();
var app = require('./config/server');
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormularioInclusaoNoticias = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(3000, function() {
    console.log("Servidor rodando com express!!");
});