var azure = require('azure-storage');

// Create folder: .private
// Create file: env_vars.js and complete with your own data
// process.env['AZURE_STORAGE_ACCOUNT'] = '<your-azure-storage-account>';
// process.env['AZURE_STORAGE_ACCESS_KEY'] = '<your-storage-access-key>';
// process.env['AZURE_STORAGE_CONNECTION_STRING'] = '<your-azure-storage-connection-string>';

var env = require('./.private/env_vars');

var queueSvc = azure.createQueueService();

queueSvc.createQueueIfNotExists('fakesecurityalarmqueue', function(error, results, response){
    if(!error){
      // Queue created or exists
    }
  });

var retryOperations = new azure.ExponentialRetryPolicyFilter();
var queueSvc = azure.createQueueService().withFilter(retryOperations);

var message_sent = "Hello world from nodejs runnning locally";
queueSvc.createMessage('fakesecurityalarmqueue', message_sent, function(error, results, response){
    if(!error){
        console.log(`sent: ${message_sent}`);
    }
  });

  queueSvc.peekMessages('fakesecurityalarmqueue', function(error, results, response){
    if(!error){
      var message_received = results[0].messageText;
      console.log(`received: ${message_received}`);
    }
  });