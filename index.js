// SECRETS SCANNING TEST FIXTURE (test/secrets-negative branch) -- this is a
// deliberately fake, non-functional token string used only to trigger
// Secrets scanning. It is NOT a real credential, was never valid, and is
// not tied to any live account. Purpose: confirm Secrets scanning detects
// this pattern but does NOT auto-close the PR the way SCA does.
const FAKE_TEST_API_TOKEN = "sk_test_FAKEDUMMYTOKEN1234567890EXAMPLE";

console.log("sca-lifecycle-test: fixture repo for O3 SCA dashboard testing");
console.log("using fake token for secrets-scan fixture:", FAKE_TEST_API_TOKEN);
