const testRepository = require('../repositories/TestRepository')

const getTestService = () => {
    return 'this is testing';
}

const postTestService = async (req) => {
    const test = await testRepository.test(req)
    return `${test}: coming from post`;
}

module.exports = {
    getTestService,
    postTestService
}