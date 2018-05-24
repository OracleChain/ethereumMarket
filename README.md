
一.欧链管理员部署代码方式:
备注：
OracleChainToken创建者和超级管理员以及合约部署者都是一个用户

1.
将以太坊账号写入OLSuperManager源代码中
2.
deploy超级管理员OLSuperManager,并配置地址到OLAddressSuperManager.sol源码中
3.
deploy欧链公有地址服务OLPublicAddress,并配置地址到OLAddressPublicAddressManager.sol源码中

4.
deployer.deploy(OLMarket);
deployer.deploy(OLBlackWhiteList);
deployer.deploy(OLFeeManager);
deployer.deploy(OLLogTool);
deployer.deploy(OLRandomContract);
deployer.deploy(OracleChainToken);

5.
OLPublicAddress.putServerAddress("OLMarket", address, 1);
OLPublicAddress.putServerAddress("OLBlackWhiteList", address, 1);
OLPublicAddress.putServerAddress("OLFeeManager", address, 1);
OLPublicAddress.putServerAddress("OLLogTool", address, 1);
OLPublicAddress.putServerAddress("OLRandomContract", address, 1);
OLPublicAddress.putServerAddress("OracleChainToken", address, 1);

6.
OLFeeManager.setFee("OLRandomContract", 123);//单位oct

7.OLSuperManager.superManager给第三方账户兑换oct

8.第三方账户主动(可以提供工具合约，或者用以太坊钱包方式直接调用)
function chargeFee(address _spender, address _marketChargeManager, uint _value) public {}
充值到OLSuperManager.superManager

9.配置OLRandomContract地址的"OLFeeManagerAddFeeFeedBack"权限

二.
对外界市场服务调用者公布地址:
1.
OLPublicAddress地址
OLMarket名称
OracleChainToken代币地址
2.
OLMarket名称
市场所提供的服务名称以及调用方式，比如随机数，需要调用的服务方式说明
eg.“OLRandomContract”
3.
提供OLSuperManager获取方式，以及直接展示octManager地址（公钥）//欧链市场充值账户，以及充值方式

三.
对随机数种子源提供者公布:
1.
OLPublicAddress地址
OLMarket名称
市场所提供的服务名称以及调用方式，比如随机数，需要调用的服务方式说明
eg.“OLRandomContract”

2.
OLMarketServerInterface源码以及相应调用地址
OLRandomContractInterface源码
OLRandomContractCallBackInterface源码


四.欧链市场使用者用例合约
1.
deploy OLLotteryContract


