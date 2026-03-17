---
name: preflight-specialist
description: Validates TDD coverage and repository health. Use as the final gatekeeper before any git push or release.
---

# Preflight Specialist Protocol (The Gatekeeper)

This skill acts as the final gatekeeper for repository integrity and deployment readiness.

## 1. TDD & Code Quality Enforcement
- **Validation:** Confirm all tests pass. If any unrelated tests fail, they must be resolved before proceeding.
- **Naming Audit:** Ensure all test functions follow the semantic format: `test_should_[expected_behavior]_when_[state_under_test]`.
- **Implementation Audit:** Verify no `TODO`, `pass`, or placeholders exist in the codebase.

## 2. Structural Rigor
- **Prologue Check:** Verify the Standardized File Prologue is present and complete.
- **Build Verification:** Execute `npm run build` to ensure static generation succeeds.
