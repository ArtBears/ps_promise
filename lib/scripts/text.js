
module.exports = (ps, args) => {
    return new Promise( function(resolve, reject) {
        ps.scripts.text( args, function(err, resp) {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    });
}
