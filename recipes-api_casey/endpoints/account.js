'use strict';

module.exports.hello = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};


// modeule.exports = (() =>{

// })();

//let AWS = require('aws-sdk');
let DynamoDB = require('../utils/dynamo-db-utils');

module.exports = (() =>{
    async function login(event){
        console.log(' IN LOGIN');
        let request = JSON.parse(event.body);
        console.log(' REQUEST ',request);
        let account = await DynamoDB.getAccount(request.email);
        console.log('111 account ', account)
        console.log('3333 request ', request)
        if(account  && account.password === request.password){
            return {
                id:account.email
            }
        } else {
            console.log(" IN ELSE IN ACCOUNTJS")
            return {
                headers: {
                    'Access-Control-Allow-Origin':'*'
                },
                statusCode:200,
                body:JSON.stringify({
                    error:'Emails or Password Incorrectzzzz'
                })
            }
        }
        // return{
        //     statusCode:200
        // };
    }
    return {
        login
    }
})();