let paperspace = require('paperspace-node');

module.exports = (key) => {
    let ps = paperspace({apiKey: key});
    let promises =  {};
    promises.machines = {
        list:       require('./machines/list').bind(null, ps),
        create:     require('./machines/create').bind(null, ps),
        destroy:    require('./machines/destroy').bind(null, ps),
        restart:    require('./machines/restart').bind(null, ps),
        show:       require('./machines/show').bind(null, ps),
        start:      require('./machines/start').bind(null, ps),
        stop:       require('./machines/stop').bind(null, ps),
        util:       require('./machines/util').bind(null, ps),
        waitfor:    require('./machines/waitfor').bind(null, ps),
        availability: require('./machines/availability').bind(null, ps),
        update:     require('./machines/update').bind(null, ps)
    }

    promises.templates = {
        list:       require('./templates/list').bind(null, ps)
    }

    promises.networks = {
        list:       require('./networks/list').bind(null, ps)
    }

    promises.users = {
        list:       require('./users/list').bind(null, ps)
    }

    promises.scripts = {
        create:     require('./scripts/create').bind(null, ps),
        destroy:    require('./scripts/destroy').bind(null, ps),
        list:       require('./scripts/list').bind(null, ps),
        show:       require('./scripts/show').bind(null, ps),
        text:       require('./scripts/text').bind(null, ps)
    }

    return promises;
};