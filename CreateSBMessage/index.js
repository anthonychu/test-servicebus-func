module.exports = async function (context, req) {
    context.bindings.msg = {
        "id": "foo",
        "message": "bar"
    }
};