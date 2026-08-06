// SECRETS SCANNING TEST FIXTURE (test/secrets-negative branch) -- this is a
// deliberately fake, non-functional token string used only to trigger
// Secrets scanning. It is NOT a real credential, was never valid, and is
// not tied to any live account. Purpose: confirm Secrets scanning detects
// this pattern but does NOT auto-close the PR the way SCA does.
const API_TOKEN = "ghp_6OrT6u6V7ua9zddFBx4AoB5o12Y0eIt12308YkUN";

console.log("sca-lifecycle-test: fixture repo for O3 SCA dashboard testing");
