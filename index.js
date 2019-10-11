const BroadlinkA1 = require('./a1')
const BroadlinkA1Platform = require('./a1platform')
const { discoverDevices } = require('./helpers/getDevice');

module.exports = (homebridge) => {
  global.Service = homebridge.hap.Service;
  global.Characteristic = homebridge.hap.Characteristic;

  homebridge.registerAccessory("homebridge-broadlink-a1", "BroadlinkEAir", BroadlinkA1);
  homebridge.registerPlatform("homebridge-broadlink-a1", "BroadlinkA1", BroadlinkA1Platform);

  discoverDevices();
}
