module.exports = (ps, args) => {
    return new Promise( (resolve, reject) => {
        ps.machines.update( args, (err, resp) => {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}