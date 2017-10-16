
module.exports = (ps, options) => {
    return new Promise( function(resolve, reject) {
        ps.networks.list( options, function(err, resp) {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    });
}
