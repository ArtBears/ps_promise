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

    promises.project = {
        clear: require('./project/clear').bind(null, ps),
        init: require('./project/init').bind(null, ps),
        show: require('./project/show').bind(null, ps)
    }

    promises.jobs = {
        artifactsDestroy:   require('./jobs/artifactsDestroy').bind(null, ps),
        artifactsGet:       require('./jobs/artifactsGet').bind(null, ps),
        artifactsList:      require('./jobs/artifactsList').bind(null, ps),
        clone:              require('./jobs/clone').bind(null, ps),
        create:             require('./jobs/create').bind(null, ps),
        destroy:            require('./jobs/destroy').bind(null, ps),
        list:               require('./jobs/list').bind(null, ps),
        logs:               require('./jobs/logs').bind(null, ps),
        show:               require('./jobs/show').bind(null, ps),
        stop:               require('./jobs/stop').bind(null, ps),
        waitfor:            require('./jobs/waitfor').bind(null, ps)
    }

    return promises;
};