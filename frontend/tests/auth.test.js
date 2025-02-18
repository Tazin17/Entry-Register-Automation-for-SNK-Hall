import { test, expect } from '@playwright/test';

test.describe('Login & Register Page Tests', () => {

  const baseUrl = 'http://localhost:3000'; // Change this if needed

  test.beforeEach(async ({ page }) => {
    await page.goto(`${baseUrl}/user-login`);
  });

  test('User should see the login page', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('SNK Hall Entry');
  });

  test('User should not log in with invalid credentials', async ({ page }) => {
    await page.fill('input[name="id"]', 'invalidUser');
    await page.fill('input[name="password"]', 'wrongpassword');
    await page.click('button[type="submit"]');

    // Expect toast error message
    await expect(page.locator('.text-red-500')).toContainText('Invalid ID or Password');
  });

  test('User should log in successfully and redirect', async ({ page }) => {
    await page.fill('input[name="id"]', '2004015'); // Use an existing test user
    await page.fill('input[name="password"]', '123456');
    await page.click('button[type="submit"]');

    await page.waitForURL(`${baseUrl}/user`); // Adjust if necessary
    await expect(page).toHaveURL(/user$/);
  });

  test('Admin user should be redirected to user-details page', async ({ page }) => {
    await page.fill('input[name="id"]', 'admin123'); // Example admin ID
    await page.fill('input[name="password"]', 'adminpass');
    await page.click('button[type="submit"]');

    await page.waitForURL(`${baseUrl}/user-details`);
    await expect(page).toHaveURL(/user-details$/);
  });

  test('User should be able to switch to the Sign-Up tab', async ({ page }) => {
    await page.click('button:has-text("Sign Up")');
    await expect(page.locator('input[name="username"]')).toBeVisible();
  });

  test('User should not sign up with missing fields', async ({ page }) => {
    await page.click('button:has-text("Sign Up")'); // Switch to Sign-Up tab
    await page.fill('input[name="username"]', 'John Doe');
    await page.fill('input[name="email"]', 'johndoe@gmail.com');
    await page.click('button[type="submit"]'); // Try to submit with missing fields

    await expect(page.locator('.text-red-500')).toHaveCount(4); // Expect 4 error messages
  });

  test('User should register successfully', async ({ page }) => {
    await page.click('button:has-text("Sign Up")'); // Switch to Sign-Up tab

    await page.fill('input[name="username"]', 'Test User');
    await page.fill('input[name="email"]', 'testuser@gmail.com');
    await page.fill('input[name="id"]', '2004020');
    await page.fill('input[name="contact_no"]', '01987654323');
    await page.fill('input[name="password"]', 'testpass');
    await page.fill('input[name="confirmPassword"]', 'testpass');

    await page.click('button[type="submit"]');

    // Expect a success toast message
    await expect(page.locator('.text-green-500')).toContainText('User register successfully');
  });

});
