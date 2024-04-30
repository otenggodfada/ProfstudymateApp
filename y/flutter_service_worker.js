'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "f2118e5a29b580d457d8c3e66c153458",
".git/config": "87a4b124f2badb3e42d3217bda7c12d9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4b61a8baed4cf98f880de7ec13523b23",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "92024a27b731aa49a12ba072b0686d9c",
".git/logs/refs/heads/master": "92024a27b731aa49a12ba072b0686d9c",
".git/logs/refs/remotes/origin/master": "fda2814edf80d9ee3da9d8043e3d981e",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/06/8aed65f183e77569f3a8d7c098fe00f3bb4b6b": "1d0827742a6dff7bedc48288022633ea",
".git/objects/07/8387aafeb670f1f2ab52bf4ed6d6e9647358f2": "552645fc6f7ebb9ac01897ebc35d3638",
".git/objects/08/a18584e6f017c32b3d64b2647157ea127aadb3": "d3b84ecc2ec015a7726e0798449e44b4",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/cfae45c3a1b8c997d247958bb62bd144743d2d": "6333d954cec3b6181898dec7c4042ca2",
".git/objects/16/48e33bed993f4806329842231a7f287b44b7a0": "8c8a0abc8f48931bd3025ae4b01697dc",
".git/objects/17/121caf79d28e63c22a84fa437a79f6953d81d4": "6dcb694143abf2efa3acafbff59b79ad",
".git/objects/18/c82eeeca3ec244582e08ada860efd8ac529e5d": "e3e8bf15945f8489717e696368c717ae",
".git/objects/1a/c978f304797cfab06c2da33e66ac1fc7d743ac": "5006d4372653d47f6b94a21bcb6ddbaf",
".git/objects/1b/85c465d1b1c01b0d0b227dd7d100c07ffac2ec": "13b36775908fce40a758460fec28343d",
".git/objects/1b/a0c537f86ddb0e3f40d038eca9795b0a3d1952": "b695ca55ffaa46e12b836c5ddccef0b7",
".git/objects/1e/b95cfebb9ac9044a3e0371a39c4b56ca7b6f5a": "41b80331b498a7feca804b09ad01c410",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/a7667fa03816b06c4198cc49f9523cc4a4e974": "95c2d626f22e8175e7250576fd964322",
".git/objects/24/72a1789c52d29426d1b960e330896f5cf47c20": "dee026e5fc6a44b3f8fa2aa0aab138d2",
".git/objects/27/a4a8f3c1f26da92b2cad4feb56ee86a58fb0e0": "8fa3d0fa478a1714907eea84e35bec21",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2f/cbfd15a50f75760048d9d2e791fca336904373": "f5407ba9ef01cc87c6ff86bf32d55eea",
".git/objects/30/74feba3f807be32a15e0708011446bd0b4b54c": "6ec49555b109f549ef477fcede537839",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/37/7043bcb5c923888b3ddb9e7b0ec23811629d41": "3d0a996a6b8c16949c1b9876b47b8a36",
".git/objects/3a/506839be78d5727f991dee5b392492a701d3db": "4bcb1b5d1aa57bf78ac0ce96c7cecea2",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/40/7f7dcd41f8c3c506d5dcb26ce784e768cc5fcc": "3b346619120cbfad862f8b5f47412a17",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/9e3f3f01dcf630f204c6726316db8c6e3b0d8b": "dfe3eafb9b93625b5b1d4ce0fc9f52f5",
".git/objects/46/1e71a028223cb215f8f1ad2ac28826a8a5ac04": "b4f13c148cfa3ceb4908b66f378be7af",
".git/objects/46/aba720fccecc4320b05c263f37677852034263": "bfdce433450f5d2d5331a7f8efc33cf1",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4c/a5818359f68c94e46724401bc4cd2c3d74299c": "de18f3e67326eaac461dc481fde9f923",
".git/objects/4c/cc9e5b923925df70525df5743a88b2b3eb85d9": "31d5786554b91e2869cf6dd5f9e34823",
".git/objects/4f/9e72c3549d78e5210d86d68a834155c0f6cf51": "f9698045cddcf18fe4bb36fccc7f9bd5",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/51/481748bdb55e36f640d747287e770ca53f0dbf": "dc88338f680d4b41c54f5013357ca9fd",
".git/objects/52/1e7575322b396924905235576c0b07a111f3f3": "0c57a220a1a9605ed88f8584d6b2e5f0",
".git/objects/59/5c92b609431d9dc3906bd920eced43568e2b04": "b505945c6b45184ae836cafba7a124c3",
".git/objects/5b/220d28032cc455b6fbdd6ffc6a1caf50d27158": "a0253087f2597a88134acc83479577a8",
".git/objects/62/64d64262bf83dce64888f034130de7a25db618": "6085954d6bb0637cf252462ada1480eb",
".git/objects/67/b3d6eaa33139a1270e6045e6151669020ac184": "6b5016b76ef9fb94b288f0dbc2e8675b",
".git/objects/6c/f68cf3c619306e80c4b79262e7d2d54df02732": "51064556e39af5f4384a77dbd270d1f3",
".git/objects/6d/82011047bfca6da39ae1062b9bdfa0d9f2d71d": "0ea142df87ee18890bcd7a0eb912e176",
".git/objects/6d/e12243579505fd5726f4bee20eeb272b316bb8": "7461d65fd42bc31eb99cad192090dbe4",
".git/objects/6e/ccac296239ea6218794e16467d0d68deb5ab4e": "b3b21fc577dfd7f92aef0c268b75f481",
".git/objects/6f/30b111460c6dc67e324559a877163b276624dd": "c18e2e9d06fdacb2060967f2a4fad1d6",
".git/objects/6f/a15aa44e9ccd976da97a84b495082420ed0030": "1444c62338ddffed6ad7d3a1e347a3c6",
".git/objects/70/f84740e324276335b5c6a2c8aa0ca2a1d4682c": "62db016f199ee4c04631955918d84e4f",
".git/objects/74/8e045dd2379dae8dd20238be127a4f603fb674": "22257ac9f20de330936e6ccb1173d813",
".git/objects/7a/1e254bd772186f731eca94b0e7be5a5dc117ac": "ff16abb63c5362674b6d55aee155b8bf",
".git/objects/7a/7094ecfa4ed9d8909ba8db4ce03db4560740bc": "38538290ef4bcc51097a42c1cd1cd6bf",
".git/objects/7a/c519ec4cffbba0c5ea21ad0601502db41d941d": "632272b0748b24537edcf647a4e7d709",
".git/objects/7c/5d53f879857972c4f1dc5745866a0d4b15bf7d": "4ecdab9cfe1652bbaf11d5f0a6414fd0",
".git/objects/7c/8d8ba0f58e877585a612014a6147980b2c5114": "3eca7013fa8aff4ca538e3d68c87e6e1",
".git/objects/7e/a639d20d3abfef12472944cef103632f5c26c4": "766728a50217b9b70486d5bb78661549",
".git/objects/7f/2fb74b43f7b6eb23189cfd7dbec34dedb57680": "c74fd1ff07b9a0e38cb7b218393e1764",
".git/objects/81/af13966e3b849007800cb8f23f0b22d32d115c": "a48e9fdef37699e720adf1bda9c19dd6",
".git/objects/86/260083ba8fddd34ab63a6cba6332cabbe933b7": "bcaa58ea43780cdcf39e9bb6de565e69",
".git/objects/87/1437ca7675c294ce8d6524a1cfb6de836d41ab": "61d51ad380ea5d9939f733bca2298889",
".git/objects/88/2c665d56b1d97a99516c351205bcbc65a33082": "8829366a8185de50e3cd9e9886c16d3b",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/9bd47296f627ed1a7e81fc0368c394a312e348": "5423b003d75f1d172ca3460f85580280",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/27a5e6ea267bf73f43c574ebc6929030310101": "e604d42dfd53ee87042926ecfe623407",
".git/objects/8c/93ad553cec53e244185a9cdee015ddfa52a1a6": "bf24cb538fb60fd07692c4471382e676",
".git/objects/8c/b499e4fb8a92c79866e08d9566dddf383a9cdb": "93fb80de8cb7817fe84a19613f2766a9",
".git/objects/90/b7bdfe1163a34a6cacadc77e3778e5fc61b0b0": "7ded1cc2454a748be64ca9eae78e23c9",
".git/objects/94/6dd1e6a3b43c61fa23a4e455f3a6820a6c98f3": "21532683482e88c9ccc4c599f2ac947e",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/96/31a95555c46ba3beef2c8e7aa661337f311c26": "9247996be6c7ac00d574c7bed9152827",
".git/objects/96/68f43c33df52fe725be9eb08b7d1584f895a20": "38721ba5f4b4035b4047f7b089b6b12d",
".git/objects/99/1b1e4bc7c9f873f2ab19b8211a061fbc886647": "8ff30b86ac501bddc9e29ef6e06fe3ef",
".git/objects/99/6978c337a68e3781cff81b207a2e53ebe3ab74": "a2b9a5acca07f163a281806ca666b42e",
".git/objects/9c/29405dc575929b9c40de1319a2dd2542a806d2": "354b6d498edc8629407ac912e2082c4c",
".git/objects/9d/9422a71537c9e8bd70de77cd32604400e72d3a": "a964df2493e4213333756654962492dc",
".git/objects/9f/5bbe4c078f314d0fe69922aea2c20d786e575d": "fc441182e72d051122668562068cf54c",
".git/objects/9f/7f931f7348ae0358911e6bab46d8fb573586c3": "853e700c4cb824e5fa2fb831731f04be",
".git/objects/a6/17694143e88e01a4a5e69e503781dddbfb2fac": "2f1abb040f8c0f74fec715e34a55a1c6",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ab/33c10670c468c45ba1fde431d58af6eb585928": "64108ee8008f10b068ce90f160028e6f",
".git/objects/ab/359e56fe2d5b082c912dec56244ac1008205e6": "ad6331daa152c17ca012f41dd2f570f4",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b1/3e15312ef3a202023deedff81f8fb2d02c6dba": "b151fbdab5f8f1b2254543056fdfbca2",
".git/objects/b1/b45b9c0d05d76ae3b1db45d6489ce740e1ced8": "d584734deb8b01c12d024290e8d7f87e",
".git/objects/b3/ea891b4770161890173d974af6a0de99720330": "0fe036616abdf7885de7a7b8d11aa0a5",
".git/objects/b4/927915a0e88857683349ffa55f6a02aad20bc8": "53bfbc2693ecd888eb75b51c3c20c662",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/2c61c8ef04d9045d6961ee64babd2ebd28b09a": "51a7d016cac4b36aae6245ab172e07a1",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/a5dcfc9b2ed11d93d828554e6b520d34c1dafb": "a1af941585fd615b2e4108950b04160d",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/c3/43ce89c48bcc2e2bfa20df38e969591b28374a": "2e278fc9c0a8d62dfc10fbfaebcde517",
".git/objects/c3/a21aa2ed015b030c9e1351360a97208e62eeb9": "a7eb0ab8c709655077a196f80fef4eaf",
".git/objects/c4/2ed6ac26d42139d32346ce5cd48e2ad297a182": "5d43c1346637340f7015c3f4d36b564b",
".git/objects/c4/a2ec4d1974a38cb676142a60e4bd4db0bb7fab": "f0980e82f835fc8293c4586f82caa277",
".git/objects/c6/3d02ab0cbf38c39d1f4811c4e0a47838f4e4dc": "db9c2f0d9bcb12f6b15d5e74c8b9c898",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/551f83fa13e6c4503f3b99fd6bbff23eb76717": "b260be3b81344015dec14a4fadefdcad",
".git/objects/c9/af1274dc4665bb3d323d25662b39496dcde732": "a48d1e18d79650814c7d997d23144fa6",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d1/c324bac2ec2266d56e0d6255caa588b78d61f9": "7b41feb1559a2f7eafb799f1ab0b36ea",
".git/objects/d5/90348dba9fe75697546afa3e93c80e05f61d58": "76e5dc77871172fa8a1ff29317565d60",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/6d271d3c542554720a3fd1ead372fbf6076eea": "21fba939982d9ad905d262fd0f333cf1",
".git/objects/d8/7417c6914a9cd7b2fd1100950f44dbbed51289": "a2c98ebcf279be20c6880b842ccec2d9",
".git/objects/d8/f3bb250ae581873bf74f3b4c92a39bc1b332a1": "25c5afbf7a573ca052cb2155db22a500",
".git/objects/d9/c6afa53297615ee0fd82d5900114290cfc7cbb": "96079eab6f4e39e540e86af5804a7745",
".git/objects/dc/6388e01346f1086bf18a2775c2df7297c088a3": "edc72b23b6324d591b0f4b8975c99774",
".git/objects/dc/b6f07cf28d082e467599037b03cf6a02e7b931": "fa8f2af651368ce278a797af6071e985",
".git/objects/e0/58af7829753fac5e2328d148aea3aae7c0aeaa": "4d0c665c66a96b629e4f643ed0db0550",
".git/objects/e3/311075c82fe5cfabc441dd00c11987b9b591f5": "5e176aeae666d62c8b694904beaaa3e1",
".git/objects/e3/597adbf4c9f8cc1620551b546196d37d7f9f5d": "27dbb1d19a97341eb575982beb0635c9",
".git/objects/e5/5961e9c0b240789ed4196e41ba201005f77e0e": "7fc377a8f7053d378d0661d6dc0c67a9",
".git/objects/e9/049b5b115cae6ab2e7cf2f605ddc7be666dd69": "b186df44d3618f64d6fd9bb24e0457a6",
".git/objects/e9/88b02d3f20bd9a0056d75dba06e555b8dca8c4": "948f5baaacf5b6e76c9ec10488f9beca",
".git/objects/ea/380cbc03d4a8e368b064d14725d3b48f5deabf": "36f312ecc077be178de138c4b0d07e1c",
".git/objects/ea/861d37d058ce8cd9273e22b5fa8b0d9c5b906c": "fd0f61438f8ae0e4831071a3ca7399aa",
".git/objects/eb/85bf830098d8adbf2bac4dbf3b417693b4a96d": "2d09fc628a84f1dc91c6ea6572b8ce82",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/1bd63cbcc80a0ea1b55d562e62495e86abb431": "7320e0bb72984312b9beaa098971d809",
".git/objects/f4/fb9fd09b16ad8bb975c7344a818b71531f20fb": "4374f42e4c6ba64dc328129171e57aa8",
".git/objects/f7/0418556872f5d7ed499a4e611cdf5de224d2e8": "a4813c0f4378be6cff13e94434c73993",
".git/objects/f8/34cd08976a6e5685cb30f6bb0cdf5fc8989b0f": "efe35f2a2923d8dfe5f3d1b9753330e7",
".git/objects/f8/4824bf5a09a0efe97615d16767ec4322ef80d6": "15e86aa47ff96427428dbafe73cec48c",
".git/refs/heads/master": "9b123731e6ae5dd0609993062e3470f3",
".git/refs/remotes/origin/master": "9b123731e6ae5dd0609993062e3470f3",
"assets/AssetManifest.bin": "9824506e2f1e50cb0267d5527641c0b5",
"assets/AssetManifest.bin.json": "f116c3b798acc6ce5244241cee1b1c4e",
"assets/AssetManifest.json": "d0d2549820fdfdcae26098262f3cdc69",
"assets/assets/animations/empty.json": "dc9e879c0c74b6ce7ae182fe6f72eae5",
"assets/assets/animations/notification.json": "c15d925b5ff7baa6a63e2efa1a24cdd4",
"assets/assets/images/atigo.png": "eb0fe23f527febb068a6dfa354eb9bd6",
"assets/assets/images/bnk.jpg": "2b23aae966660000efc88cf3f544cd25",
"assets/assets/images/icon.png": "5c35861f5164625741bb19872bad0f37",
"assets/assets/images/intro_1.svg": "a7f2b01a7b4d970f2f17c7ffa15871bc",
"assets/assets/images/intro_2.svg": "aaa9ff254db75ffbaf5d01d6c882fcbc",
"assets/assets/images/intro_3.svg": "0649349b02a7e8ea54cc125115bae1ee",
"assets/assets/images/logo.png": "fcc4284c34948895ba6296228955e0ae",
"assets/assets/images/momo.png": "9047a08c073155bb0bbb979ba81691a5",
"assets/assets/images/premium.png": "e64df11693a6ad21700af6e1ca637636",
"assets/assets/images/splash.png": "5c35861f5164625741bb19872bad0f37",
"assets/assets/images/telec.png": "60185827e10eee5a902e1b8b60be6502",
"assets/assets/translations/ar-SA.json": "99600a671da2cf238f0dca1e72e96ecf",
"assets/assets/translations/de-DE.json": "09690363a65fd324d23f9b329d2d637f",
"assets/assets/translations/en-US.json": "cc0f490111b9ee6d9485da763d5f2c83",
"assets/assets/translations/es-ES.json": "c16d546e8bfd2cab46d9a06bbbd24b33",
"assets/assets/translations/fr-FR.json": "c2ae291a07b722569ae7eae378acff45",
"assets/assets/translations/hi-IN.json": "3e5db5d08689576a3fb653c5b5b2d11c",
"assets/assets/translations/id-ID.json": "f1490fe81f73df07560642713c01a09b",
"assets/assets/translations/pt-BR.json": "33ccd56f04e1aa9bf2f624dd8f9451e7",
"assets/assets/translations/zh-CN.json": "6f882db5116572d4368afc6c484da5bc",
"assets/FontManifest.json": "6fd2628bfa5e2a7478acaf1a349044e8",
"assets/fonts/MaterialIcons-Regular.otf": "16740bb34fcfa828782a566f1d6439da",
"assets/NOTICES": "abf5f643a670a7becba909241470863a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a0cb8a35225d064a6465f046c9471fd",
"assets/packages/easy_stepper/assets/loading_black.json": "d412b17ec906f03090996d68abab4eca",
"assets/packages/easy_stepper/assets/loading_white.json": "92623d18291ed579cf8bfe3f5fc74213",
"assets/packages/feather_icons/fonts/feather.ttf": "0d0d92d310cc68e53796bf15c36838c2",
"assets/packages/fluttertoast/assets/toastify.css": "910ddaaf9712a0b0392cf7975a3b7fb5",
"assets/packages/fluttertoast/assets/toastify.js": "18cfdd77033aa55d215e8a78c090ba89",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "90befbec7bfc3e9748412e5088df93d4",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "c624c2618a2ce162bf15607bd46341d1",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"CNAME": "9621e70a7f61cf190f1ba4356fec6dfa",
"favicon.png": "5c35861f5164625741bb19872bad0f37",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bb6b186f493b9f5aa5c45ac09dc1d431",
"/": "bb6b186f493b9f5aa5c45ac09dc1d431",
"main.dart.js": "9672fa996dae11b20a18779f62da877c",
"manifest.json": "c0ff5127b0e6731ad6792e11fadd9f3d",
"version.json": "33077ef7ad9bafa4b3c1f2e7f15bec7b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
