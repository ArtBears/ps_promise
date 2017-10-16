
module.exports = (ps, args) => {
    return new Promise( (resolve, reject) => {
        ps.machines.utilization( args, (err, resp) => {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}