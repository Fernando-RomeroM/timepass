module.exports = function(req, res, next) {
    const horaActual = new Date().getHours();
    if (horaActual >= 12 && horaActual < 24) {
        next();
    } else {
        res.send('Aún no son las 12 de la mañana');
    }
};
