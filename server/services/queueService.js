const kue = require('kue');

class QueueService {
    addItem(queueName, data, options) {
    }

    process(queueName, callback) {
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

    //
    // addItem(queueName, data, {priority = "high", delay}) {
    //     let item = this.queue.create(queueName, data)
    //         .priority(priority);
    //     if (delay) {
    //         item = item.delay(delay);
    //     }
    //     item.save();
    // }
    //
    addItem(queueName, data) {
        let item = this.queue.create(queueName, data)
            .priority("high");
        item.save();
    }

    process(queueName, callback) {
        this.queue.process(queueName, callback);
    }
}

module.exports = {QueueService, KueService};
