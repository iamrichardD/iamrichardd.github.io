import { test, expect } from '@playwright/test';

test.describe('Header Branding Dynamic Visibility', () => {
  
  test('should be hidden initially on the index page and show on scroll', async ({ page }) => {
    await page.goto('/');
    
    const headerBrand = page.locator('#header-brand');
    
    // Initially hidden
    await expect(headerBrand).toHaveCSS('opacity', '0');
    
    // Scroll down past the hero section
    await page.evaluate(() => window.scrollTo(0, 600));
    
    // Wait for transition (0.4s in Header.astro)
    await page.waitForTimeout(500);
    
    // Check visibility
    await expect(headerBrand).toHaveCSS('opacity', '1');
    
    // Scroll back up
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await expect(headerBrand).toHaveCSS('opacity', '0');
  });

  test('should be hidden initially on the resume page and show on scroll', async ({ page }) => {
    await page.goto('/resume');
    
    const headerBrand = page.locator('#header-brand');
    
    // Initially hidden
    await expect(headerBrand).toHaveCSS('opacity', '0');
    
    // Scroll down past the hero section
    await page.evaluate(() => window.scrollTo(0, 600));
    
    // Wait for transition (0.4s in Header.astro)
    await page.waitForTimeout(500);
    
    // Check visibility
    await expect(headerBrand).toHaveCSS('opacity', '1');
    
    // Scroll back up
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    await expect(headerBrand).toHaveCSS('opacity', '0');
  });

  test('should be visible immediately on projects page', async ({ page }) => {
    await page.goto('/projects');
    
    const headerBrand = page.locator('#header-brand');
    
    // Visible immediately (no hero brand conflict)
    await expect(headerBrand).toHaveCSS('opacity', '1');
  });

});
