// const { ethers } = require("ethers");
// const DemoMetadata = require("./../build/contracts/Demo.json");
// const Demo = artifacts.require("Demo");
// // assume accounts 0 has sufficient balance.
// contract("Demo", (accounts) => {
//   let demo;
//   it("should be deployed", async () => {
//     try {
//       demo = await Demo.deployed();
//       assert.ok(true);
//     } catch (error) {
//       assert.ok(false, error);
//     }
//   });

//   it("should be able to set  a new  value", async () => {
//     try {
//       await demo.setValue(1222);
//       assert.ok(true);
//     } catch (err) {
//       assert.ok(false, err);
//     }
//   });

//   it("should be able to receive  the value", async () => {
//     const value = await demo.getValue();
//     assert.ok(value);
//   });
// });
