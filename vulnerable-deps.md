# Vulnerable Dependency Reference

Quick-reference test cases for toggling known-CVE dependency versions in
`package.json` to trigger SCA findings. Each entry is a long-patched,
publicly documented CVE — pinning the old version is safe, no exploit code
involved.

---

### 1. `minimist` — Prototype Pollution
- **CVE:** CVE-2021-44906
- **Vulnerable:** `1.2.5` (range: >=1.0.0 <1.2.6)
- **Fixed:** `1.2.6`
- **Root cause:** prototype pollution via `setKey()` in `index.js`

### 2. `lodash` — Prototype Pollution
- **CVE:** CVE-2020-8203
- **Vulnerable:** `4.17.19` (range: <4.17.20)
- **Fixed:** `4.17.20`
- **Root cause:** `pick`, `set`, `setWith`, `update`, `updateWith`, `zipObjectDeep` allow prototype modification via user-supplied property identifiers

### 3. `axios` — CSRF Token Header Leak
- **CVE:** CVE-2023-45857
- **Vulnerable:** `1.5.1` (range: 0.8.1–1.5.1)
- **Fixed:** `1.6.0`
- **Root cause:** leaks `XSRF-TOKEN` cookie value into `X-XSRF-TOKEN` header on every request, to any host

  **Second axios CVE (for re-test/fingerprint-diff scenarios):**
  - **CVE:** CVE-2024-39338 (SSRF)
  - **Vulnerable:** `1.7.3` (range: 1.3.2–1.7.3)
  - **Fixed:** `1.7.4`

### 4. `node-fetch` — Secure Header Leak on Redirect
- **CVE:** CVE-2022-0235
- **Vulnerable:** `2.6.6` (2.x line, range: <2.6.7)
- **Fixed:** `2.6.7`
- **Root cause:** forwards secure headers (`authorization`, `www-authenticate`, `cookie`, `cookie2`) when redirecting to an untrusted site

---

## Usage

- Swap the version pinned in `package.json`, then `rm -rf node_modules package-lock.json && npm install` so the lockfile reflects the change — some SCA scanners key off the lockfile rather than `package.json` alone.
- Full source detail and branch-to-CVE mapping: see [`../vuln.md`](../vuln.md) (one level up, outside this repo) and [`TESTING.md`](./TESTING.md) in this repo.
