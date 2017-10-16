
module.exports = (ps, args) => {
    return new Promise( (resolve, reject) => {
        ps.machines.show( args, (err, resp) => {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}