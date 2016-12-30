var aws = require('aws-sdk');
var route53 = new aws.Route53();
var lineReader = require('line-reader');
var sleep = require('sleep');
lineReader.eachLine('zones.txt', function(line, last) {
    console.log(line);
    var recordparams = {
        HostedZoneId: line,
    }
    route53.listResourceRecordSets(recordparams, function(err, data) {
        if (err) console.log(err, err.stack);
        else {
            for (var j in data.ResourceRecordSets) {

                if (data.ResourceRecordSets[j].Type == 'A') {

                    for (var k in data.ResourceRecordSets[j].ResourceRecords) {

                        if (data.ResourceRecordSets[j].ResourceRecords[k].Value == 'xx.xx.xxx.xx') {

                            name = data.ResourceRecordSets[j].Name;
                            console.log(name);
                            console.log("hostedzone: ", line);
                            var delparams = {
                                ChangeBatch: {
                                    Changes: [{
                                        Action: 'UPSERT',
                                        ResourceRecordSet: {
                                            Name: name,
                                            Type: 'A',
                                            AliasTarget: {
                                                DNSName: 'xxxxxxxxx.ap-south-1.elb.amazonaws.com',

                                                EvaluateTargetHealth: false,

                                                HostedZoneId: 'ZP97RAFLXTNZK'
                                            },
                                        }
                                    }],
                                    Comment: 'Updating A Record'
                                },
                                HostedZoneId: line

                            };

                            route53.changeResourceRecordSets(delparams, function(err, data) {
                                if (err) console.log(err, err.stack);
                                else {
                                    sleep.sleep(2);
                                    console.log(data);
                                }
                            });
                        }
                    }
                }
            }

            next = data.NextRecordName;
            var params = {
                HostedZoneId: 'Z469O0K0J9QOS',
                StartRecordName: next,
            };
            route53.listResourceRecordSets(params, function(err, data) {
                if (err) console.log(err, err.stack);
                else {

                    for (var j in data.ResourceRecordSets) {

                        if (data.ResourceRecordSets[j].Type == 'A') {

                            for (var k in data.ResourceRecordSets[j].ResourceRecords) {

                                if (data.ResourceRecordSets[j].ResourceRecords[k].Value == 'xx.xx.xxx.xx') {

                                    name = data.ResourceRecordSets[j].Name;
                                    console.log(name);
                                    console.log("hostedzone: ", line);
                                    var delparams = {
                                        ChangeBatch: {
                                            Changes: [{
                                                Action: 'UPSERT',
                                                ResourceRecordSet: {
                                                    Name: name,
                                                    Type: 'A',
                                                    AliasTarget: {
                                                        DNSName: 'xxxxxxxxx.ap-south-1.elb.amazonaws.com',

                                                        EvaluateTargetHealth: false,

                                                        HostedZoneId: 'ZP97RAFLXTNZK'
                                                    },
                                                }
                                            }],
                                            Comment: 'Updating A Record'
                                        },
                                        HostedZoneId: 'Z469O0K0J9QOS'

                                    };

                                    route53.changeResourceRecordSets(delparams, function(err, data) {
                                        if (err) console.log(err, err.stack);
                                        else {
                                            sleep.sleep(2);
                                            console.log(data);
                                        }
                                    });
                                }
                            }
                        }
                    }
                    next01 = data.NextRecordName;
                    var params = {
                        HostedZoneId: 'Z469O0K0J9QOS',
                        StartRecordName: next01,
                    };
                    route53.listResourceRecordSets(params, function(err, data) {
                        if (err) console.log(err, err.stack);
                        else {

                            for (var j in data.ResourceRecordSets) {

                                if (data.ResourceRecordSets[j].Type == 'A') {

                                    for (var k in data.ResourceRecordSets[j].ResourceRecords) {

                                        if (data.ResourceRecordSets[j].ResourceRecords[k].Value == 'xx.xx.xxx.xx') {

                                            name = data.ResourceRecordSets[j].Name;
                                            console.log(name);
                                            console.log("hostedzone: ", line);
                                            var delparams = {
                                                ChangeBatch: {
                                                    Changes: [{
                                                        Action: 'UPSERT',
                                                        ResourceRecordSet: {
                                                            Name: name,
                                                            Type: 'A',
                                                            AliasTarget: {
                                                                DNSName: 'xxxxxxxxx.ap-south-1.elb.amazonaws.com',

                                                                EvaluateTargetHealth: false,

                                                                HostedZoneId: 'ZP97RAFLXTNZK'
                                                            },
                                                        }
                                                    }],
                                                    Comment: 'Updating A Record'
                                                },
                                                HostedZoneId: 'Z469O0K0J9QOS'

                                            };

                                            route53.changeResourceRecordSets(delparams, function(err, data) {
                                                if (err) console.log(err, err.stack);
                                                else {
                                                    sleep.sleep(2);
                                                    console.log(data);
                                                }
                                            });
                                        }
                                    }
                                }
                            }
                            next02 = data.NextRecordName;
                            var params = {
                                HostedZoneId: 'Z469O0K0J9QOS',
                                StartRecordName: next02,
                            };
                            route53.listResourceRecordSets(params, function(err, data) {
                                if (err) console.log(err, err.stack);
                                else {

                                    for (var j in data.ResourceRecordSets) {

                                        if (data.ResourceRecordSets[j].Type == 'A') {

                                            for (var k in data.ResourceRecordSets[j].ResourceRecords) {

                                                if (data.ResourceRecordSets[j].ResourceRecords[k].Value == 'xx.xx.xxx.xx') {

                                                    name = data.ResourceRecordSets[j].Name;
                                                    console.log(name);
                                                    console.log("hostedzone: ", line);
                                                    var delparams = {
                                                        ChangeBatch: {
                                                            Changes: [{
                                                                Action: 'UPSERT',
                                                                ResourceRecordSet: {
                                                                    Name: name,
                                                                    Type: 'A',
                                                                    AliasTarget: {
                                                                        DNSName: 'xxxxxxxxx.ap-south-1.elb.amazonaws.com',

                                                                        EvaluateTargetHealth: false,

                                                                        HostedZoneId: 'ZP97RAFLXTNZK'
                                                                    },
                                                                }
                                                            }],
                                                            Comment: 'Updating A Record'
                                                        },
                                                        HostedZoneId: 'Z469O0K0J9QOS'

                                                    };

                                                    route53.changeResourceRecordSets(delparams, function(err, data) {
                                                        if (err) console.log(err, err.stack);
                                                        else {
                                                            sleep.sleep(2);
                                                            console.log(data);
                                                        }
                                                    });
                                                }
                                            }
                                        }
                                    }
                                    next03 = data.NextRecordName;
                                    var params = {
                                        HostedZoneId: 'Z469O0K0J9QOS',
                                        StartRecordName: next03,
                                    };
                                    route53.listResourceRecordSets(params, function(err, data) {
                                        if (err) console.log(err, err.stack);
                                        else {

                                            for (var j in data.ResourceRecordSets) {

                                                if (data.ResourceRecordSets[j].Type == 'A') {

                                                    for (var k in data.ResourceRecordSets[j].ResourceRecords) {

                                                        if (data.ResourceRecordSets[j].ResourceRecords[k].Value == 'xx.xx.xxx.xx') {

                                                            name = data.ResourceRecordSets[j].Name;
                                                            console.log(name);
                                                            console.log("hostedzone: ", line);
                                                            var delparams = {
                                                                ChangeBatch: {
                                                                    Changes: [{
                                                                        Action: 'UPSERT',
                                                                        ResourceRecordSet: {
                                                                            Name: name,
                                                                            Type: 'A',
                                                                            AliasTarget: {
                                                                                DNSName: 'xxxxxxxxx.ap-south-1.elb.amazonaws.com',

                                                                                EvaluateTargetHealth: false,

                                                                                HostedZoneId: 'ZP97RAFLXTNZK'
                                                                            },
                                                                        }
                                                                    }],
                                                                    Comment: 'Updating A Record'
                                                                },
                                                                HostedZoneId: 'Z469O0K0J9QOS'

                                                            };

                                                            route53.changeResourceRecordSets(delparams, function(err, data) {
                                                                if (err) console.log(err, err.stack);
                                                                else {
                                                                    sleep.sleep(2);
                                                                    console.log(data);
                                                                }
                                                            });
                                                        }
                                                    }
                                                }
                                            }
                                            next04 = data.NextRecordName;
                                            var params = {
                                                HostedZoneId: 'Z469O0K0J9QOS',
                                                StartRecordName: next04,
                                            };
                                            route53.listResourceRecordSets(params, function(err, data) {
                                                if (err) console.log(err, err.stack);
                                                else {

                                                    for (var j in data.ResourceRecordSets) {

                                                        if (data.ResourceRecordSets[j].Type == 'A') {

                                                            for (var k in data.ResourceRecordSets[j].ResourceRecords) {

                                                                if (data.ResourceRecordSets[j].ResourceRecords[k].Value == 'xx.xx.xxx.xx') {

                                                                    name = data.ResourceRecordSets[j].Name;
                                                                    console.log(name);
                                                                    console.log("hostedzone: ", line);
                                                                    var delparams = {
                                                                        ChangeBatch: {
                                                                            Changes: [{
                                                                                Action: 'UPSERT',
                                                                                ResourceRecordSet: {
                                                                                    Name: name,
                                                                                    Type: 'A',
                                                                                    AliasTarget: {
                                                                                        DNSName: 'xxxxxxxxx.ap-south-1.elb.amazonaws.com',

                                                                                        EvaluateTargetHealth: false,

                                                                                        HostedZoneId: 'ZP97RAFLXTNZK'
                                                                                    },
                                                                                }
                                                                            }],
                                                                            Comment: 'Updating A Record'
                                                                        },
                                                                        HostedZoneId: 'Z469O0K0J9QOS'

                                                                    };

                                                                    route53.changeResourceRecordSets(delparams, function(err, data) {
                                                                        if (err) console.log(err, err.stack);
                                                                        else {
                                                                            sleep.sleep(2);
                                                                            console.log(data);
                                                                        }
                                                                    });
                                                                }
                                                            }
                                                        }
                                                    }
                                                    next05 = data.NextRecordName;
                                                    var params = {
                                                        HostedZoneId: 'Z469O0K0J9QOS',
                                                        StartRecordName: next05,
                                                    };
                                                    route53.listResourceRecordSets(params, function(err, data) {
                                                        if (err) console.log(err, err.stack);
                                                        else {

                                                            for (var j in data.ResourceRecordSets) {

                                                                if (data.ResourceRecordSets[j].Type == 'A') {

                                                                    for (var k in data.ResourceRecordSets[j].ResourceRecords) {

                                                                        if (data.ResourceRecordSets[j].ResourceRecords[k].Value == 'xx.xx.xxx.xx') {

                                                                            name = data.ResourceRecordSets[j].Name;
                                                                            console.log(name);
                                                                            console.log("hostedzone: ", line);
                                                                            var delparams = {
                                                                                ChangeBatch: {
                                                                                    Changes: [{
                                                                                        Action: 'UPSERT',
                                                                                        ResourceRecordSet: {
                                                                                            Name: name,
                                                                                            Type: 'A',
                                                                                            AliasTarget: {
                                                                                                DNSName: 'xxxxxxxxx.ap-south-1.elb.amazonaws.com',

                                                                                                EvaluateTargetHealth: false,

                                                                                                HostedZoneId: 'ZP97RAFLXTNZK'
                                                                                            },
                                                                                        }
                                                                                    }],
                                                                                    Comment: 'Updating A Record'
                                                                                },
                                                                                HostedZoneId: 'Z469O0K0J9QOS'

                                                                            };

                                                                            route53.changeResourceRecordSets(delparams, function(err, data) {
                                                                                if (err) console.log(err, err.stack);
                                                                                else {
                                                                                    sleep.sleep(2);
                                                                                    console.log(data);
                                                                                }
                                                                            });
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                            next06 = data.NextRecordName;
                                                            var params = {
                                                                HostedZoneId: 'Z469O0K0J9QOS',
                                                                StartRecordName: next06,
                                                            };
                                                            route53.listResourceRecordSets(params, function(err, data) {
                                                                if (err) console.log(err, err.stack);
                                                                else {

                                                                    for (var j in data.ResourceRecordSets) {

                                                                        if (data.ResourceRecordSets[j].Type == 'A') {

                                                                            for (var k in data.ResourceRecordSets[j].ResourceRecords) {

                                                                                if (data.ResourceRecordSets[j].ResourceRecords[k].Value == 'xx.xx.xxx.xx') {

                                                                                    name = data.ResourceRecordSets[j].Name;
                                                                                    console.log(name);
                                                                                    console.log("hostedzone: ", line);
                                                                                    var delparams = {
                                                                                        ChangeBatch: {
                                                                                            Changes: [{
                                                                                                Action: 'UPSERT',
                                                                                                ResourceRecordSet: {
                                                                                                    Name: name,
                                                                                                    Type: 'A',
                                                                                                    AliasTarget: {
                                                                                                        DNSName: 'xxxxxxxxx.ap-south-1.elb.amazonaws.com',

                                                                                                        EvaluateTargetHealth: false,

                                                                                                        HostedZoneId: 'ZP97RAFLXTNZK'
                                                                                                    },
                                                                                                }
                                                                                            }],
                                                                                            Comment: 'Updating A Record'
                                                                                        },
                                                                                        HostedZoneId: 'Z469O0K0J9QOS'

                                                                                    };

                                                                                    route53.changeResourceRecordSets(delparams, function(err, data) {
                                                                                        if (err) console.log(err, err.stack);
                                                                                        else {
                                                                                            sleep.sleep(2);
                                                                                            console.log(data);
                                                                                        }
                                                                                    });
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            });
                                                        }
                                                    });
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
})
