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
            } // TODO GET REDIS DATA FROM ENV
        });
    }

    addItem(queueName, data, {priorityLevel = 'high', delay}) {
        let item = this.queue.create(queueName, data)
            .removeOnComplete(true)
            .priority(priorityLevel);

        if (delay) {
            item = item.delay(delay);
        }
        item.save();
    }

    process(queueName, number, callback) {
        this.queue.process(queueName, number, callback);
    }
}

// class QueueFactory {
//     static list = {
//         kue: KueService,
//     };
//
//     createQueue(type = 'kue') {
//         const KueService = KueService.list[type] || KueService.list.kue;
//         const kueQueue = new KueService();
//         kueQueue.type = type;
//         return kueQueue;
//     }
// }


// class QueueFactory {
//     create() {
//         return new KueService();
//     }
// }

module.exports = {QueueService, KueService};
