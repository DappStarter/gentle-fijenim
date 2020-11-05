require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan rebel pizza erosion hover enter equal genius'; 
let testAccounts = [
"0xa9d7556a9ba995366a21b9f91206d2e1885532571178196c8369efb4139e904a",
"0x1098779d396f44bea24def2f9021fb8764d0ad7bf4ccb955364e6b9390263232",
"0x580e357d68b6fa4e57cb938d5f6f751ebdb5305a424d509f3ac285337360935a",
"0x16d2c0822beaff1436e9c22167edb2027b46e6468ef070f40053aafbdfc05d04",
"0x59d028422e78795dcad6e6efccf8a17b11f91536a6f9fd82d6dbd805a71c3da1",
"0xb962d0ddfbb601c285065bd7a5d6bb248ada514421f471c686b0bca95d93bda7",
"0x437297138578e37000b124819db5ee5e5088c76d30a742a6f1360e25f8c618e9",
"0x79b6383c76f8cd65fd6acca1de894b9afa0b46e5d1645249bf2143b8dc1fcaf6",
"0xd5dd31aafa55c5448cfb465f784350f56eff7622d3e33892c0a336a5434cd7ea",
"0x1305b5c2226c0f6cd624a969f56ea64bb457a100a2ef0916360599b83c270588"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
