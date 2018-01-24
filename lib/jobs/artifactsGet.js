module.exports = (ps, args) => {
    return new Promise( (resolve, reject) => {
        ps.jobs.artifactsGet( args, (err, resp) => {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}