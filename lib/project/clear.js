module.exports = (ps, args) => {
    return new Promise( (resolve, reject) => {
        ps.project.clear( args, (err, resp) => {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}