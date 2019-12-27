var azure = require('azure-storage');

// Create folder: .private
// Create file: env_vars.js and complete with your own data
// process.env['AZURE_STORAGE_ACCOUNT'] = '<your-azure-storage-account>';
// process.env['AZURE_STORAGE_ACCESS_KEY'] = '<your-storage-access-key>';
// process.env['AZURE_STORAGE_CONNECTION_STRING'] = '<your-azure-storage-connection-string>';

var env = require('./.private/env_vars');

// var queueSvc = azure.createQueueService();

// queueSvc.createQueueIfNotExists('myqueue', function(error, results, response){
//     if(!error){
//       // Queue created or exists
//     }
//   });

// var retryOperations = new azure.ExponentialRetryPolicyFilter();
// var queueSvc = azure.createQueueService().withFilter(retryOperations);

// queueSvc.createMessage('myqueue', "Hello world!", function(error, results, response){
//     if(!error){
//       // Message inserted
//     }
//   });

console.log(process.env.AZURE_STORAGE_ACCOUNT);
console.log(process.env.AZURE_STORAGE_ACCESS_KEY);
console.log(process.env.AZURE_STORAGE_CONNECTION_STRING);