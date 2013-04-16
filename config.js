config = {
  "env" : {
    "master" : false,
    "type" : {
      "mongo" : false,
      "ds" : false,
      "web" : false,
      "api" : false,
      "oms" : false,
      "redis" : false,
      "lb" : false
    },
    "port" : 1337,
    "hostname" : "Pierce_MBP.local"
  },
  "monitor" : {
    //
  },
  "servers" : {
    "mongo" : [
      "123.45.67.89:1337",
      "234.56.78.90:1337",
      "173.113.241.98:1337"
    ],
    "ds" : [
      "12.34.56.78:1337"
    ],
    "web" : [
      "98.76.54.321:1337"
    ],
    "redis" : [
      "14.91.233.19:1337"
    ],
    "api" : [
      "51.123.92.623:1337"
    ],
    "email" : [
      "81.318.137.182:1337"
    ]
  },
  "commands" : {
    "common" : {
      "uptime" : "uptime",
      "node_memory" : "ps aux | grep node"
    },
    "db" : {
      //
    },
    "mongo" : {
      //
    }
  }
}
/*
  type : os.type(),
  platform : os.platform(),
  arch : os.arch(),
  hostname : os.hostname(),
  release : os.release(),
  tmpdir : os.tmpdir(),
  cpus : os.cpus().length,
  cpuinfo : os.cpus(),
  nics : os.networkInterfaces()
  load : os.loadavg(),
  totalmem : os.totalmem(),
  freemem : os.freemem(),
  uptime : os.uptime()
*/
module.exports = config