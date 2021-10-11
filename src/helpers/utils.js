const getPostData = (req) => {
    return new Promise((resolve, reject) => {
        try {
            let body = "";
            // listen to data sent by client
            req.on("data", (chunk) => {
                body += chunk.toString(); // append the string version to the body
            });
            // listen till the end
            req.on("end", () => {
                resolve(body); // send back the data
            });
        } catch (error) {
            reject(error);
        }
    });
}
module.exports = getPostData ;