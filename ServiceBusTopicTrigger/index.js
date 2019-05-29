module.exports = async function(context, mySbMsg, file) {
    context.log('JavaScript ServiceBus topic trigger function processed message', mySbMsg);
    context.log(file);
};