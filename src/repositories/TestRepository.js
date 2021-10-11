const getPostData = require("../helpers/utils");

const test = async (payload) => {
    const data = await getPostData(payload);
    return data.test;
}

module.exports = {
    test
}