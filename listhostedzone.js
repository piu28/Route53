var aws = require('aws-sdk');
var route53 = new aws.Route53();
var fs = require('fs');
route53.listHostedZones({}, function(err, data) {
    if (err) console.log(err, err.stack);
    else {
        for (var i in data.HostedZones) {
            var zoneid = []
            zoneid.push(data.HostedZones[i].Id + "\n");
            for (var j in zoneid) {
                fs.appendFile("zones.txt", zoneid[j], function(err) {
                    if (err) console.log(err)
                    else console.log("zone id appended in file");
                });
            }
        }
    }
});
