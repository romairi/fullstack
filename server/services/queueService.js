const kue = require('kue');

class QueueService {
    addItem(queueName, data, options) {
    }

    process(queueName, number, callback) {
    }
}

class KueService extends QueueService {
    constructor() {
        super();
        this.queue = kue.createQueue({
            redis: {
                port: 6379,
                host: 'redis',
                auth: 'roman123'
            }
        });
    }

    addItem(queueName, data, priorityLevel = 'high') {
        let item = this.queue.create(queueName, data).delay(10000)
            .priority(priorityLevel);
        item.save();
    }

    process(queueName, callback) {
        this.queue.process(queueName, 8, callback);
    }
}

module.exports = {QueueService, KueService};
