const HttpStatus = require('http-status-codes');
const UserModel = require('../user/user.model');

async function addCategory(req, res, next) {
    const {categoryName} = req.body;
    console.log(categoryName)
    const userId = req.user._id;

    try {
        const data = await UserModel.addCategory(userId, categoryName);
        return res.status(HttpStatus.CREATED).json(data.category);
    } catch (err) {
            next(err);
    }
}


module.exports = {addCategory};
