const { clearHash } = require('../services/cache');


module.exports = async (req, res, next) => {
    await next(); // trick to make this work after our handler code is done. i.e. execute it after res.send()

    clearHash(req.user.id);
}