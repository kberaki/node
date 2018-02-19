// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated by tools/bigint-tester.py.

// Flags: --harmony-bigint

var data = [{
  a: "e5e5071838eb1314",
  b: "3b7f55dce703a25ea14fdea6186156f775dec5d29f6edb3a014",
  r: "-3b7f55dce703a25ea14fdea6186156f775d067822deb4c88d00"
}, {
  a: "-f",
  b: "22d6805c7201a8ad4b9e6c2a7e8b5ab3bac",
  r: "-22d6805c7201a8ad4b9e6c2a7e8b5ab3bbb"
}, {
  a: "-22",
  b: "-11a0adfaedd5adb92297af1c3794ef5461dd8bc146db3",
  r: "11a0adfaedd5adb92297af1c3794ef5461dd8bc146d91"
}, {
  a: "-d20c39d0",
  b: "-46faa9d3eabcbd8b6d07adc2d0ff289d2",
  r: "46faa9d3eabcbd8b6d07adc2c3de65002"
}, {
  a: "-e5b56109a11",
  b: "211e1dcdf52f020ab0f16e18cc4e46027d05bfa3155b88973e630ae9a75bf2c7fbad269",
  r: "-211e1dcdf52f020ab0f16e18cc4e46027d05bfa3155b88973e630ae9a75cd87d5cb6c7a"
}, {
  a: "-b682aa",
  b: "-5fa59a6a80d39c0c885c030e9c8c84ec7",
  r: "5fa59a6a80d39c0c885c030e9c811cc1d"
}, {
  a: "-c1325b8ab9fea966f093bbfbc2e611b0e5bf0b13ce047c7133056d4eea",
  b: "f97d5c4014c5cc87923c344a",
  r: "-c1325b8ab9fea966f093bbfbc2e611b0e6b888700e19423dba97a98334"
}, {
  a: "-1872900ab729911a3c021db53672eda07a9ad623",
  b: "152d13997090c43551edfc89d4c7ea5e9ffee4a114085858892e67e82edea6384aaaba7",
  r: "-152d13997090c43551edfc89d4c7ea602727e54c86a169fc4950433b960d803ff4581ca"
}, {
  a: "5440388fc10de9",
  b: "-4b",
  r: "5440388fc10e34"
}, {
  a: "-198dc54795a81722f70acc9cc20505492172c7819ba168e57d",
  b: "-48f3b40bf850f771d44e423eb266846801d9e4e920c",
  r: "-198dc543066cd66371fb557f7d20e15dfb0a81017e031a5371"
}, {
  a: "c78082429b3163ce243c778",
  b: "-97afe29",
  r: "c78082429b3163cebbec5a1"
}, {
  a: "-50df",
  b: "-d5352ec9c1b0e62b97ea1363ce8b72",
  r: "d5352ec9c1b0e62b97ea1363ce3a93"
}, {
  a: "-5c9777f93d64636ff8bcda39125625aa58a49e9a4f29ece2b7afa5d",
  b: "894bb7aa90b8687e6290c3218a4258dac9400d556caafe02cf8c312c053f2fc73",
  r: "-894bb7aa9114fff65bce2784fa3b15b50252637b1703a2a169db5b18e7f6df6d0"
}, {
  a: "-e15c51f0627e460c477",
  b: "-dfd13bac43ebe2f8e77f5b31314843",
  r: "dfd13bac43ddcd33c879334cd083cc"
}, {
  a: "0",
  b: "adbd3e4b06b92771ae25eb52fca5fc86391303ebf7962",
  r: "-adbd3e4b06b92771ae25eb52fca5fc86391303ebf7962"
}, {
  a: "960a8aa627a1c48721f4e0",
  b: "-9e8742ae61615481cdd12f0728f0b61",
  r: "9e8742ae6ac1fd2c304b4b4f9b10041"
}, {
  a: "-abf5cf9ff3c15b0645009",
  b: "-e805773176aaa712d144e172db033c64aeaddf3380b2",
  r: "e805773176aaa712d144e1681ba6426572982ecf30a9"
}, {
  a: "349ebb89b13a7149ec1a4e067574c3825f90ec4e4413948b808c6a",
  b: "-44cdc0e3efa11513525f68163033a59d7b0610070",
  r: "349ebb89b13a7596c8288d0086c5f8a856124f517e6d6c3be18cda"
}, {
  a: "a86c53e8c49b20cff057882c4345c40f5c34a8cb8",
  b: "-76453703c781511b52e663",
  r: "a86c53e8c49b20cff05eec7fb3823c246de9d731b"
}, {
  a: "-2647d3c",
  b: "776e5b3a57bd5196be1b9c99ae899d949cb2b94310c53be8910db71b",
  r: "-776e5b3a57bd5196be1b9c99ae899d949cb2b94310c53be893723457"
}];

var error_count = 0;
for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var a = BigInt.parseInt(d.a, 16);
  var b = BigInt.parseInt(d.b, 16);
  var r = a - b;
  if (d.r !== r.toString(16)) {
    print("Input A:  " + a.toString(16));
    print("Input B:  " + b.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    print("Op: -");
    error_count++;
  }
}
if (error_count !== 0) {
  print("Finished with " + error_count + " errors.")
  quit(1);
}