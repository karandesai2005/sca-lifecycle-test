# SCA Vulnerability Lifecycle — Test Plan

Local fixture repo for validating O3 Security dashboard SCA behavior across
the PR lifecycle (detect / merge / close / re-merge) plus SAST and Secrets
parity checks. See [`vulnerable-deps.md`](./vulnerable-deps.md) for CVE detail.

---

## `test/sca-scenario1-detect`
**Scenario:** PR opened → SCA should detect finding, stays open.

- **Dependency:** `minimist@1.2.5`
- **CVE:** CVE-2021-44906
- **Fixed version (not applied):** `1.2.6`

| Field | Value |
|---|---|
| PR URL | |
| O3 vuln ID | |
| Fingerprint (before) | |
| Fingerprint (after) | |
| Opened at | |
| Detected at | |

---

## `test/sca-scenario2-merge`
**Scenario:** PR opened and merged → O3 should update finding status on merge.

- **Dependency:** `lodash@4.17.19`
- **CVE:** CVE-2020-8203
- **Fixed version (not applied):** `4.17.20`

| Field | Value |
|---|---|
| PR URL | |
| O3 vuln ID | |
| Fingerprint (before) | |
| Fingerprint (after) | |
| Opened at | |
| Merged at | |

---

## `test/sca-scenario3-close`
**Scenario:** PR opened and closed unmerged → O3 should auto-close finding.

- **Dependency:** `axios@1.5.1`
- **CVE:** CVE-2023-45857
- **Fixed version (not applied):** `1.6.0`

| Field | Value |
|---|---|
| PR URL | |
| O3 vuln ID | |
| Fingerprint (before) | |
| Fingerprint (after) | |
| Opened at | |
| Closed at | |

---

## `test/sca-scenario4-remerge`
**Scenario:** Re-test after closure — same vuln resurfacing, then re-merge.
Branched from `test/sca-scenario3-close`'s vuln; optionally swap to the
second axios CVE partway through to test "new vuln, same package, different
fingerprint" as a sub-case.

- **Dependency:** `axios@1.5.1` → optionally `axios@1.7.3`
- **CVE:** CVE-2023-45857 → optionally CVE-2024-39338
- **Fixed version (not applied):** `1.6.0` / `1.7.4`

| Field | Value |
|---|---|
| PR URL | |
| O3 vuln ID (initial) | |
| O3 vuln ID (after re-merge) | |
| Fingerprint (before) | |
| Fingerprint (after) | |
| Opened at | |
| Re-merged at | |

---

## `test/sast-parity`
**Scenario:** SAST merge/decline parity check — confirm SAST findings follow
the same lifecycle rules as SCA (not a dependency change).

- **Pattern:** hardcoded weak crypto usage (MD5 for password hashing)
- **CVE / rule:** n/a — SAST rule match, not a CVE

| Field | Value |
|---|---|
| PR URL | |
| O3 finding ID | |
| Fingerprint (before) | |
| Fingerprint (after) | |
| Opened at | |
| Resolved at | |

---

## `test/secrets-negative`
**Scenario:** Confirm Secrets scanning detects a dummy token but does NOT
auto-close on its own (negative/parity check).

- **Pattern:** obviously-fake token string, not a real credential
- **CVE / rule:** n/a — Secrets rule match, not a CVE

| Field | Value |
|---|---|
| PR URL | |
| O3 finding ID | |
| Fingerprint (before) | |
| Fingerprint (after) | |
| Opened at | |
| Resolved at | |

---

## Notes

- All branches are local only — nothing has been pushed. Create the GitHub
  repo and push manually once the structure looks right.
- After changing a dependency version on a branch, regenerate the lockfile
  (`rm -rf node_modules package-lock.json && npm install`) if you want the
  scanner to pick up the pinned version from `package-lock.json` too.
