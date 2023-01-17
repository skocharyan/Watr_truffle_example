const { ethers } = require("ethers");
const DemoMetadata = require("./../build/contracts/Demo.json");

contract("Demo", (accounts) => {
  let demo;
  const val = 999;

  it("should be able to get contract object  with `ethers.js` ", async () => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        "https://rpc.dev.watr.org/"
      );
      const mnemonicWallet = ethers.Wallet.fromMnemonic(
        "green chronic square vast piano crew best evidence perfect inch choose world"
      );
      const wallet = mnemonicWallet.connect(provider);
      demo = new ethers.Contract(
        "0xe69767337679B172D692579a44D46511E6f9eB29",
        DemoMetadata.abi,
        wallet
      );
      assert.ok(demo);
    } catch (error) {
      assert.ok(false, error);
    }
  });
  it("should be able to set the value ", async () => {
    try {
      await demo.setValue(val);
      assert.ok(true);
    } catch (error) {
      assert.ok(false, error);
    }
  });
  it("Should be able to receive the value", async () => {
    const recVal = await demo.getValue();
    assert.equal(recVal.toString(), val.toString());
  });
});
