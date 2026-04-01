import { test, expect } from '@playwright/test';

test.describe('PKD Integration Verification', () => {
  test('should show PKD in the projects collection list', async ({ page }) => {
    await page.goto('/projects');
    // Search for the title first
    const pkdTitle = page.locator('h3', { hasText: 'Pharos Kitchen Design' });
    await expect(pkdTitle).toBeVisible();
    
    // Find the link within the same container
    const pkdCard = page.locator('div', { has: pkdTitle });
    const pkdLink = pkdCard.locator('a[href="/projects/pkd"]');
    // Filter to get the "Read Case Study" link specifically if needed, 
    // but just checking it exists and has text is usually enough.
    await expect(pkdLink.filter({ hasText: 'Read Case Study' })).toBeVisible();
  });

  test('should show PKD in the resume experience section', async ({ page }) => {
    await page.goto('/resume');
    const pkdResumeLink = page.locator('a[href="/projects/pkd"]');
    await expect(pkdResumeLink).toBeVisible();
    await expect(pkdResumeLink).toContainText('Pharos Kitchen Design');
    
    const experienceItem = page.locator('li', { has: pkdResumeLink });
    await expect(experienceItem).toContainText('AEC interoperability platform');
    await expect(experienceItem).toContainText('Hybrid FSL-1.1 Licensing');
  });

  test('should show PKD in the home page competency card', async ({ page }) => {
    await page.goto('/');
    
    // Find the Systems Architecture card trigger
    const cardTrigger = page.locator('button', { hasText: 'Systems Architecture & Agentic Infrastructure' });
    await expect(cardTrigger).toBeVisible();
    
    // Expand the card
    await cardTrigger.click();
    
    // Check for PKD project card inside the expanded content
    const pkdHomeLink = page.locator('#card-content-systems-architecture').locator('a[href="/projects/pkd"]').first();
    await expect(pkdHomeLink).toBeVisible();
  });

  test('should render PKD project detail page correctly', async ({ page }) => {
    await page.goto('/projects/pkd');
    // Use a more specific locator for the main title
    await expect(page.locator('main h1').first()).toContainText('Pharos Kitchen Design');
    await expect(page.locator('h1#the-mission-deterministic-kitchen-design')).toBeVisible();
    await expect(page.locator('h2#strategic-foundation-forensic-interoperability')).toBeVisible();
    await expect(page.locator('text=Hybrid FSL-1.1').first()).toBeVisible();
  });
});
