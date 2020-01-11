
let AWS = require('aws-sdk');

module.exports= (()=> {
    var client = new AWS.DynamoDB.DocumentClient();

    function getAccount(email){
        return new Promise((resolve)=>{
            console.log(' IN GETACCOUNT', email)
            client.get({
                TableName : 'recipe-accounts',
                Key: {
                  email: email
                }
            },(err,data)=>{
                console.log(' IN GETACCOUNT return')
                if(err){
                    console.log('getAccount failed:',err);
                }
                resolve(data);
            });
        });
    }
    return {
        getAccount
    }
})();