const {connectDb, getUser} = require('../shared/shared');

module.exports = async function (context, req) {
    // const user = getUser(req);

    // const database = await connectDb();

    // const response = await database.collection("tasks").find({
    //     userId: user.userId
    // });
    // const tasks = await response.toArray();

    const tasks = [
        {
            id: 1,
            label: "🍔 Eat",
            status: ""
        },
        {
            id: 2,
            label: "🛏 Sleep",
            status: ""
        },
        {
            id: 3,
            label: "</> Code",
            status: ""
        }
    ];

    context.res = {
        body: tasks
    };
}