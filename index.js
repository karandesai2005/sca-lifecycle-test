// SAST TEST FIXTURE (test/sast-parity branch) -- intentionally weak crypto
// pattern to trigger a SAST finding (e.g. "use of broken hash algorithm").
// Not used for any real authentication; MD5 is never called anywhere else
// in this repo. Do not port this pattern outside the test branch.
const crypto = require("crypto");

function hashPasswordInsecurely(password) {
  return crypto.createHash("md5").update(password).digest("hex");
}

console.log("sca-lifecycle-test: fixture repo for O3 SCA dashboard testing");
console.log(hashPasswordInsecurely("fixture-only-not-a-real-password"));
