let ps_promise = require('../index');
let acc = ps_promise('') // Add your
let machine = {
    "region": "East Coast (NY2)",
    "machineType": "GPU+",
    "size": 50,
    "billingType": "hourly",
    "machineName": "Parsec Provision Test",
    "templateId": "ts8mg8g"
}
acc.machines.list().then(function(val){console.log(val.body)})

// acc.machines.create(machine).then(
//     function(val) {
//         console.time("MachineProvisionStart")
//         let body = val.body
//         let id = body.id
//         acc.machines.waitfor({ machineId: id, state: "ready"})
//             .then(
//                 function(res) {
//                     console.log(res)
//                     console.timeEnd("MachineProvisionStart")
//                 }
//             ).catch(
//                 function (err) {
//                     console.log(err)
//                     console.timeEnd("MachineProvisionStart")
//                 }
//         )
//     }
// ).catch(
//     function (err) {
//         console.log("Error on Machine Create")
//         console.log(err)
//         console.timeEnd("MachineProvisionStart")
//     }
// )