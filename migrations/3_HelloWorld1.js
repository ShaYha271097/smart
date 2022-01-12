const HelloWorld1 = artifacts.require("HelloWorld1");

module.exports = function (deployer) {
  deployer.deploy(HelloWorld1);
};
