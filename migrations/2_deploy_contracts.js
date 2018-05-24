var OLSuperManager = artifacts.require('./OLSuperManager.sol')
var OLPublicAddress = artifacts.require('./OLPublicAddress.sol')

var OLMarket = artifacts.require('./OLMarket.sol')
var OLBlackWhiteList = artifacts.require('./OLBlackWhiteList.sol')
var OLFeeManager = artifacts.require('./OLFeeManager.sol')
var OLLogTool = artifacts.require('./OLLogTool.sol')
var OLRandomContract = artifacts.require('./OLRandomContract.sol')
var OracleChainToken = artifacts.require('./OracleChainToken.sol')

var OLTestSynatax = artifacts.require('./OLTestSynatax.sol')
var OLTestSynataxBB = artifacts.require('./OLTestSynataxBB.sol')
var OLLotteryContract = artifacts.require('./OLLotteryContract.sol')
var ThirdPartyVoter = artifacts.require('./ThirdPartyVoter.sol')

module.exports = function (deployer) {
  //1
  //deployer.deploy(OLSuperManager);
  //并配置地址到并配置地址到OLAddressSuperManager.sol源码中
  ///

  //2
  //deployer.deploy(OLPublicAddress);
  //并配置地址到OLAddressPublicAddressManager.sol源码中
  //

  //3
  deployer.deploy(OLRandomContract)
  if (0) {
    deployer.deploy(OLMarket)
    deployer.deploy(OLBlackWhiteList)
    deployer.deploy(OLFeeManager)
    deployer.deploy(OLLogTool)
    deployer.deploy(OLRandomContract)
    deployer.deploy(OracleChainToken)

  }
  //
  //deployer.deploy(ThirdPartyVoter);
  if(0) {
    deployer.deploy(OLLotteryContract)
    deployer.deploy(OLTestSynatax);
    deployer.deploy(OLTestSynataxBB);
    deployer.deploy(ThirdPartyVoter);
  }
}