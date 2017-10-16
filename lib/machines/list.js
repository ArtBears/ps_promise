
module.exports = (ps, options) => {
    return new Promise( function(resolve, reject) {
        ps.machines.list( options, function(err, resp) {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    });
}
