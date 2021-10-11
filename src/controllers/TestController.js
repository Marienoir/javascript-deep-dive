const getPostData = require('../helpers/utils')

const getTest = async (req, res) => {
    return res.status(200).json({message: 'This is testing'})
}

const postTest = async (req, res) => {
    let data = await getPostData(req);
    data = JSON.parse(data);

    try {
        res.status(200).json({
            success: true,
            message: data.test
        })
    } catch (e) {
        res.status(400).json({
            success: false,
            message: e.message
        })
    }
}

module.exports = {
    getTest,
    postTest
}