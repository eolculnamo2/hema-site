const User = require('../../models/User')
const userNameExists = function (username) {
User.findOne({username: username}, (err,response) => {
    if(err) console.log(err)
    else {
        return true;
    }
})    
}

module.exports = userNameExists
