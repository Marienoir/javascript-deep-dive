
const getTestService = () => {
    return 'this is testing'
}

const postTestService = (req) => {
    const {test} = req;
    return `${test}: coming from post`;
}

module.exports = {
    getTestService,
    postTestService
}