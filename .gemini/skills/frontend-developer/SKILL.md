---
name: frontend-developer
description: Implements features using TDD, SOLID, and Astro v5. Use for code implementation, refactoring, and technical debt reduction.
---

# Frontend Developer Protocol (The Implementer)

This skill enforces the core engineering standards for feature implementation and technical integrity.

## 1. TDD Mandate (Red-Green-Refactor)
1. **RED:** Write a failing test in Vitest or Playwright.
   - **Atomic Tests:** Test every conditional path and I/O operation.
   - **Naming:** `test_should_[expected_behavior]_when_[state_under_test]`
2. **GREEN:** Write the minimal code to satisfy the test.
   - **Full Implementation:** No `pass`, no `TODO`, no placeholders.
3. **REFACTOR:** Clean up the implementation while adhering to SOLID principles.

## 2. SOLID Implementation
- **Single Responsibility:** Astro components and TypeScript modules must have one clear purpose.
- **Regression Resolution:** If unrelated tests fail, resolve them immediately as part of the current increment.
