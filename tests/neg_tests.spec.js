const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://www.swifttranslator.com/';

test.beforeEach(async ({ page }) => {
  await page.goto(BASE_URL, {
    waitUntil: 'domcontentloaded',
    timeout: 60000 // ⬅️ 60 seconds
  });
});

test('Neg_Fun_0001 - Joined words without spaces', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mamagedharayanavaa');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0001 ->', result);
});

test('Neg_Fun_0002 - Extremely long repeated text', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('api api api api api api api api api api api api');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0002 ->', result);
});

test('Neg_Fun_0003 - Slang informal sentence', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('ado machan meeka hariyata karalaa dhapanko');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0003 ->', result);
});

test('Neg_Fun_0004 - Special characters input', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mama ??? Karanavaa');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0004 ->', result);
});

test('Neg_Fun_0005 - Empty space input', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill(' ');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0005 ->', result);
});

test('Neg_Fun_0006 - Mixed English & slang', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('Thanks machan! supiri!!');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0006 ->', result);
});

test('Neg_Fun_0007 - Sad expression', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('ayiyoo epaa');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0007 ->', result);
});

test('Neg_Fun_0008 - Apology sentence', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mata samaava dhenna puluvandha?');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0008 ->', result);
});
test('Neg_Fun_0009 - Apology sentence', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('Thanks machan! supiri!!');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0009 ->', result);
});
test('Neg_Fun_0010 - Apology sentence', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('Api !! karanavaa??');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0010 ->', result);
});

// 🟢 UI TEST

test('Neg_UI_0001 - Typing long repeated words', async ({ page }) => {
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.type('mama mama mama mama mama mama mama');
  await page.waitForTimeout(3000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_UI_0001 ->', result);
});
