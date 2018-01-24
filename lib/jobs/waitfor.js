module.exports = (ps, args) => {
    return new Promise( (resolve, reject) => {
        ps.jobs.waitfor( args, (err, resp) => {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}