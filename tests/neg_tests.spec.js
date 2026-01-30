const { test, expect } = require('@playwright/test');

//
// 🔵 FUNCTIONAL TESTS (fill)
//

test('Neg_Fun_0001 - Joined words without spaces', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mamagedharayanavaa');
  await page.waitForTimeout(5000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0001 ->', result);
});

test('Neg_Fun_0002 - Extremely long repeated text', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('api api api api api api api api api api api api api api api');
  await page.waitForTimeout(5000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0002 ->', result);
});

test('Neg_Fun_0003 - Slang informal sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('ado machan meeka hariyata karalaa dhapanko');
  await page.waitForTimeout(5000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0003 ->', result);
});

test('Neg_Fun_0004 - Special characters input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mama ??? Karanavaa');
  await page.waitForTimeout(5000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0004 ->', result);
});

test('Neg_Fun_0005 - Empty space input', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill(' ');
  await page.waitForTimeout(5000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0005 ->', result);
});

test('Neg_Fun_0006 - Mixed English & slang', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('Thanks machan! supiri!!');
  await page.waitForTimeout(5000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_Fun_0006 ->', result);
});

//
// 🟢 UI TESTS (type)
//

test('Neg_UI_0001 - Typing empty space', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.type(' ');
  await page.waitForTimeout(5000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_UI_0001 ->', result);
});

test('Neg_UI_0002 - Typing sad expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.type('ayiyoo epaa');
  await page.waitForTimeout(5000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_UI_0002 ->', result);
});

test('Neg_UI_0003 - Typing apology sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.type('mata samaava dhenna puluvandha?');
  await page.waitForTimeout(5000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_UI_0003 ->', result);
});

test('Neg_UI_0004 - Typing long repeated words', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.type('mama mama mama mama mama mama mama mama');
  await page.waitForTimeout(5000);

  const result = await page.locator('textarea').last().inputValue();
  console.log('Neg_UI_0004 ->', result);
});
