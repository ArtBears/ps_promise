
module.exports = (ps, args) => {
    return new Promise( (resolve, reject) => {
        ps.machines.start( args, (err, resp) => {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}