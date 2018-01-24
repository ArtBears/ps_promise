module.exports = (ps, args) => {
    return new Promise( (resolve, reject) => {
        ps.jobs.artifactsList( args, (err, resp) => {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}