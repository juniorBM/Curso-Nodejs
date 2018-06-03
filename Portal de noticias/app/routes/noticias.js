module.exports = function (app) {

    app.get('/noticias', function (req, res) {

        var conn = app.config.dbConn();

        conn.query('select * from noticias', ((error, result) => {

            res.render('noticias/noticias', {noticias: result});

        }));
    });
}