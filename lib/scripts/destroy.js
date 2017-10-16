
module.exports = (ps, args) => {
    return new Promise( (resolve, reject) => {
        ps.scripts.destroy( args, (err, resp) => {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}