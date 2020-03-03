const _ = require('lodash');

// _.chunk(), _.reverse(), _.without(), _.shuffle(), _.pebbles()

const users = 
[{"id":1,"first_name":"Marena","last_name":"Overal","email":"moveral0@twitter.com","gender":"Female","ip_address":"144.192.217.71"},
{"id":2,"first_name":"Noemi","last_name":"Van den Hof","email":"nvandenhof1@google.co.jp","gender":"Female","ip_address":"204.151.176.230"},
{"id":3,"first_name":"Modestia","last_name":"Tozer","email":"mtozer2@domainmarket.com","gender":"Female","ip_address":"75.251.233.140"},
{"id":4,"first_name":"Even","last_name":"Jelleman","email":"ejelleman3@tripadvisor.com","gender":"Male","ip_address":"99.192.212.80"},
{"id":5,"first_name":"Isadora","last_name":"Dodge","email":"idodge4@cam.ac.uk","gender":"Female","ip_address":"94.228.36.150"},
{"id":6,"first_name":"Jorgan","last_name":"Woolatt","email":"jwoolatt5@narod.ru","gender":"Male","ip_address":"31.251.186.248"},
{"id":7,"first_name":"Kaitlynn","last_name":"Boater","email":"kboater6@webmd.com","gender":"Female","ip_address":"149.250.73.189"},
{"id":8,"first_name":"Martino","last_name":"Works","email":"mworks7@zdnet.com","gender":"Male","ip_address":"195.184.133.84"},
{"id":9,"first_name":"Carolan","last_name":"Yellowley","email":"cyellowley8@wp.com","gender":"Female","ip_address":"28.251.241.210"},
{"id":10,"first_name":"Ali","last_name":"Benadette","email":"abenadette9@businessweek.com","gender":"Male","ip_address":"111.71.124.244"}]
;

let userNames = [];

users.forEach (user => 
    userNames.push(user.first_name)
);

const makePairs = (userNames) => {
    const pairs = _.chunk(userNames, 2);
    console.log(pairs);
    return pairs;
}

makePairs(userNames);