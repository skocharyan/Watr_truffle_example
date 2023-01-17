const Demo = artifacts.require("Demo");

module.exports = async function (deployer) {
  try {
    await deployer.deploy(Demo, { overwrite: false });
  } catch (error) {
    console.error(error);
  }
  // address 0xe69767337679B172D692579a44D46511E6f9eB29
  // tx  0x31b7911ba1fdd973eb3eb2f1b810e040a0b96a097c479c97032f4c7cdc0d925c
};
