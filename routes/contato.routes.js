module.exports = (app) => {
    app.get('/contato',(req, res)=> {
        res.send('funfou');
    });
}