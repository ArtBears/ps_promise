module.exports = (ps, args) => {
    return new Promise( (resolve, reject) => {
        ps.project.init( args, (err, resp) => {
            if(err) {
                reject(err)
            } else {
                resolve(resp)
            }
        })
    })
}