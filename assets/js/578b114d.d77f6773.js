(self.webpackChunkfeswap_docs=self.webpackChunkfeswap_docs||[]).push([[1689],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=r,k=p["".concat(d,".").concat(m)]||p[m]||l[m]||i;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7097:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return l}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o={id:"StakingTwinRewards",title:"Contract Staking Reward",hide_title:!0,sidebar_label:"Staking Reward",hide_table_of_contents:!0},s=void 0,d={unversionedId:"Contracts/StakingTwinRewards",id:"Contracts/StakingTwinRewards",isDocsHomePage:!1,title:"Contract Staking Reward",description:"Staking Reward Contact",source:"@site/docs/Contracts/StakingTwinRewards.md",sourceDirName:"Contracts",slug:"/Contracts/StakingTwinRewards",permalink:"/docs/Contracts/StakingTwinRewards",version:"current",frontMatter:{id:"StakingTwinRewards",title:"Contract Staking Reward",hide_title:!0,sidebar_label:"Staking Reward",hide_table_of_contents:!0},sidebar:"FeSwapSidebar",previous:{title:"Staking Reward Factory",permalink:"/docs/Contracts/StakingTwinRewardsFactory"},next:{title:"TimeLock",permalink:"/docs/Contracts/Timelock"}},u=[{value:'<span className="title"> Staking Reward Contract Address </span>',id:"staking-reward-contract-address",children:[]},{value:'<span className="title"> Sponsor Contract Code </span>',id:"sponsor-contract-code",children:[]}],c={toc:u};function l(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"title"},(0,i.kt)("h1",null," Staking Reward Contact ")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"FeSwap staking reward contact receives liquidity token deposited by users, and distributes FESW tokens based on the amount and duration of deposited liquidity tokens. "),(0,i.kt)("p",null,"One staking reward contact is created for one token pair. Normally just a very few of token pairs are rewarded for staking. "),(0,i.kt)("p",null,"ETH/WBTC, ETH/USDT, ETH/FESW are the first 3 token pairs scheduled to be rewarded for staking during the firts 4 months at the first year. "),(0,i.kt)("p",null,"On ETH test chain, only ETH/FESW token pair is rewarded for staking at this test phase. Totally 10,000,000 FESW are filled as the reward for the duration of 4 month."),(0,i.kt)("p",null,"As each token pair has two liquidity sub-pools, the two liquidity tokens of the two liquidity sub-pools are rewarded completely same.   "),(0,i.kt)("h3",{id:"staking-reward-contract-address"},(0,i.kt)("span",{className:"title"}," Staking Reward Contract Address ")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"ETH NetWork"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Token Pair"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Staking Reward Contract Address"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Mainnet"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH/WBTC"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xac262b589b785e48e2a331cb9caf86ffaf069f91"},"0xaC262B589b785e48E2A331Cb9cAf86fFAf069f91"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Mainnet"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH/USDT"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x23d04f77063f60042aab7aaedf14addbd7be6ee9"},"0x23D04f77063f60042aAB7aAEDF14ADDbd7bE6Ee9"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Mainnet"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH/USDC"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0xa4a0b0a90f1574d02c55577f7aa5a698ca4b47c8"},"0xA4A0B0A90f1574d02c55577f7aA5a698Ca4B47c8"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Mainnet"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH/FESW"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://etherscan.io/address/0x33b6af4a9ce826621f6c89fe8563337f8a1ca51e"},"0x33B6af4A9ce826621F6c89Fe8563337f8A1CA51e"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Ropsten"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH/FESW"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://ropsten.etherscan.io/address/0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf"},"0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Rinkeby"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH/FESW"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://rinkeby.etherscan.io/address/0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf"},"0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Goerli"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH/FESW"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf"},"0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH Testnet Kovan"),(0,i.kt)("td",{parentName:"tr",align:"center"},"ETH/FESW"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://kovan.etherscan.io/address/0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf"},"0xC6e82Ec5B319bbBC8ad63F94873c8E9fD9B1EfDf"))))),(0,i.kt)("h3",{id:"sponsor-contract-code"},(0,i.kt)("span",{className:"title"}," Sponsor Contract Code ")),(0,i.kt)("p",null,"The open-source FeSwap ",(0,i.kt)("inlineCode",{parentName:"p"},"StakingTwinRewards")," contact is stored at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FeSwap/Governance/blob/main/contracts/StakingTwinRewards.sol"},"Github Governance Project")," "),(0,i.kt)("p",null,"Following is the code deployed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sol",metastring:'title="StakingTwinRewards.sol"',title:'"StakingTwinRewards.sol"'},'// SPDX-License-Identifier: GPL-3.0\npragma solidity ^0.7.0;\npragma experimental ABIEncoderV2;\n\nimport "@openzeppelin/contracts/math/Math.sol";\nimport "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";\nimport "@openzeppelin/contracts/utils/ReentrancyGuard.sol";\n\n// Inheritance\nimport "./interfaces/IStakingTwinRewards.sol";\nimport "./RewardsTwinDistributionRecipient.sol";\n\ncontract StakingTwinRewards is IStakingTwinRewards, RewardsTwinDistributionRecipient, ReentrancyGuard {\n    using SafeMath  for uint256;\n    using SafeERC20 for IERC20;\n    struct AmountWithSignature {\n        uint256     amount;\n        uint        deadline;\n        uint8       v;\n        bytes32     r;\n        bytes32     s;\n    }\n\n    /* ========== STATE VARIABLES ========== */\n\n    IERC20  public rewardsToken;\n    IERC20  public stakingTokenA;\n    IERC20  public stakingTokenB;\n    uint256 public periodFinish = 0;\n    uint256 public rewardRate = 0;\n    uint256 public rewardsDuration = 0 days;\n    uint256 public lastUpdateTime;\n    uint256 public rewardPerTokenStored;\n\n    mapping(address => uint256) public userRewardPerTokenPaid;\n    mapping(address => uint256) public rewards;\n\n    uint256 private _totalSupplyA;\n    uint256 private _totalSupplyB;\n\n    mapping(address => uint256) private _balancesA;\n    mapping(address => uint256) private _balancesB;\n\n    /* ========== CONSTRUCTOR ========== */\n\n    constructor(\n        address _rewardsDistribution,\n        address _rewardsToken,\n        address _stakingTokenA,\n        address _stakingTokenB\n    ) {\n        require(_stakingTokenA < _stakingTokenB, "Wrong token order");\n        rewardsToken = IERC20(_rewardsToken);\n        stakingTokenA = IERC20(_stakingTokenA);\n        stakingTokenB = IERC20(_stakingTokenB);\n        rewardsDistribution = _rewardsDistribution;\n    }\n\n    /* ========== VIEWS ========== */\n\n    function totalSupply() external override view returns (uint256, uint256) {\n        return (_totalSupplyA, _totalSupplyB);\n    }\n\n    function balanceOf(address account) external override view returns (uint256, uint256) {\n        return (_balancesA[account], _balancesB[account]);\n    }\n\n    function lastTimeRewardApplicable() public override view returns (uint256) {\n        return Math.min(block.timestamp, periodFinish);\n    }\n\n    function rewardPerToken() public override view returns (uint256) {\n        uint256 _totalSupply = _totalSupplyA.add(_totalSupplyB);\n        if(_totalSupply == 0) {\n            return rewardPerTokenStored;\n        }\n        return\n            rewardPerTokenStored.add(\n                lastTimeRewardApplicable().sub(lastUpdateTime).mul(rewardRate).mul(1e18).div(_totalSupply)\n            );\n    }\n\n    function earned(address account) public override view returns (uint256) {\n        return (_balancesA[account].add(_balancesB[account])).mul(rewardPerToken().sub(userRewardPerTokenPaid[account])).div(1e18).add(rewards[account]);\n    }\n\n    function getRewardForDuration() external override view returns (uint256) {\n        return rewardRate.mul(rewardsDuration);\n    }\n\n    /* ========== MUTATIVE FUNCTIONS ========== */\n\n    function stakeWithPermit(AmountWithSignature calldata amountA, AmountWithSignature calldata amountB) external nonReentrant updateReward(msg.sender) {\n        require( (amountA.amount > 0) || (amountB.amount > 0), "Cannot stake 0");\n        if(amountA.amount > 0) {\n            _totalSupplyA = _totalSupplyA.add(amountA.amount);\n            _balancesA[msg.sender] = _balancesA[msg.sender].add(amountA.amount);\n\n            // permit\n            IFeSwapERC20(address(stakingTokenA)).permit(msg.sender, address(this), amountA.amount, amountA.deadline, amountA.v, amountA.r, amountA.s);\n            stakingTokenA.safeTransferFrom(msg.sender, address(this), amountA.amount);\n        }\n        if(amountB.amount > 0) {\n            _totalSupplyB = _totalSupplyB.add(amountB.amount);\n            _balancesB[msg.sender] = _balancesB[msg.sender].add(amountB.amount);\n\n            // permit\n            IFeSwapERC20(address(stakingTokenB)).permit(msg.sender, address(this), amountB.amount, amountB.deadline, amountB.v, amountB.r, amountB.s);\n            stakingTokenB.safeTransferFrom(msg.sender, address(this), amountB.amount);\n        }\n\n        emit Staked(msg.sender, amountA.amount, amountB.amount);\n    }\n\n    function stake(uint256 amountA, uint256 amountB) external override nonReentrant updateReward(msg.sender) {\n        require( (amountA > 0) || (amountB > 0), "Cannot stake 0");\n        if( amountA > 0 ){\n            _totalSupplyA = _totalSupplyA.add(amountA);\n            _balancesA[msg.sender] = _balancesA[msg.sender].add(amountA);\n            stakingTokenA.safeTransferFrom(msg.sender, address(this), amountA);\n        }\n        if( amountB > 0 ){\n            _totalSupplyB = _totalSupplyB.add(amountB);\n            _balancesB[msg.sender] = _balancesB[msg.sender].add(amountB);\n            stakingTokenB.safeTransferFrom(msg.sender, address(this), amountB);\n        }\n\n        emit Staked(msg.sender, amountA, amountB);\n    }\n\n    function withdraw(uint256 amountA, uint256 amountB) public override nonReentrant updateReward(msg.sender) {\n        require( (amountA > 0) || (amountB > 0), "Cannot withdraw 0");\n        if( amountA > 0 ){\n            _totalSupplyA = _totalSupplyA.sub(amountA);\n            _balancesA[msg.sender] = _balancesA[msg.sender].sub(amountA);\n            stakingTokenA.safeTransfer(msg.sender, amountA);\n        }\n        if( amountB > 0 ){\n            _totalSupplyB = _totalSupplyB.sub(amountB);\n            _balancesB[msg.sender] = _balancesB[msg.sender].sub(amountB);\n            stakingTokenB.safeTransfer(msg.sender, amountB);\n        }\n        emit Withdrawn(msg.sender, amountA, amountB);\n    }\n\n    function getReward() public override nonReentrant updateReward(msg.sender) {\n        uint256 reward = rewards[msg.sender];\n        if (reward > 0) {\n            rewards[msg.sender] = 0;\n            rewardsToken.safeTransfer(msg.sender, reward);\n            emit RewardPaid(msg.sender, reward);\n        }\n    }\n\n    function exit() external override {\n        withdraw(_balancesA[msg.sender], _balancesB[msg.sender]);\n        getReward();\n    }\n\n    /* ========== RESTRICTED FUNCTIONS ========== */\n\n    function notifyRewardAmount(uint256 reward, uint256 _rewardsDuration) external override onlyRewardsDistribution updateReward(address(0)) {\n        require(_rewardsDuration > 0 , "Wrong duration");\n\n        if (block.timestamp >= periodFinish) {\n            rewardRate = reward.div(_rewardsDuration);\n        } else {\n            uint256 remaining = periodFinish.sub(block.timestamp);\n            uint256 leftover = remaining.mul(rewardRate);\n            rewardRate = reward.add(leftover).div(_rewardsDuration);\n        }\n\n        // Ensure the provided reward amount is not more than the balance in the contract.\n        // This keeps the reward rate in the right range, preventing overflows due to\n        // very high values of rewardRate in the earned and rewardsPerToken functions;\n        // Reward + leftover must be less than 2^256 / 10^18 to avoid overflow.\n        uint balance = rewardsToken.balanceOf(address(this));\n        require(rewardRate <= balance.div(_rewardsDuration), "Provided reward too high");\n\n        lastUpdateTime = block.timestamp;\n        periodFinish = block.timestamp.add(_rewardsDuration);\n        rewardsDuration = _rewardsDuration;\n        emit RewardAdded(reward, _rewardsDuration);\n    }\n\n    /* ========== MODIFIERS ========== */\n\n    modifier updateReward(address account) {\n        rewardPerTokenStored = rewardPerToken();\n        lastUpdateTime = lastTimeRewardApplicable();\n        if (account != address(0)) {\n            rewards[account] = earned(account);\n            userRewardPerTokenPaid[account] = rewardPerTokenStored;\n        }\n        _;\n    }\n\n    /* ========== EVENTS ========== */\n\n    event RewardAdded(uint256 reward, uint256 _rewardsDuration);\n    event Staked(address indexed user, uint256 amountA, uint256 amountB);\n    event Withdrawn(address indexed user, uint256 amountA, uint256 amountB);\n    event RewardPaid(address indexed user, uint256 reward);\n}\n\ninterface IFeSwapERC20 {\n    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external;\n}\n')))}l.isMDXComponent=!0}}]);