const { test, expect } = require('@playwright/test');

// ===================== POSITIVE FUNCTION TESTS =====================
test('Pos_Fun_0001 - Health inquiry sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('Oyaage saepa saniipa kohamadha?');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0002 - Long descriptive sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mama sunaQQgu vunee maargayata gasak kadaagena vaetii thibu nisaa');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0003 - Time & reason sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('oyaata heta udhea 7.30 ta enna puLuvanne heathuva mata asaniipa nisaa');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0004 - Simple future sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('Api heta enavaa');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0005 - Mixed English + Singlish', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mata help ekak karanna puLuvandha? Can you help please?');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0006 - Weather related sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mama gedhara yanavaa, eth vahina nisaa dhaenma yannee naehae');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0007 - Help request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mata udhavuvak karanna puLuvandha?');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0008 - Short command', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('vahaama enna.');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0009 - Negative statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('oyaa ehema karannee naehae.');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0010 - Meeting request sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('machan mata heta meeting ekee Zoom link eka email ekak vidhihata evanna puLuvandha?');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

/// ===================== POSITIVE FUNCTION TESTS CONTINUED =====================
test('Pos_Fun_0011 - Simple statement', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mama ehema karanavaa.');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0012 - Past tense sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mama iiyee gamea giyaa.');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0013 - Emotional sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mata dhuka hithenavaa');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0014 - Work related sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('Api dhaen vaeda karanavaa');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0015 - Very long mixed sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('machan adha thiyena meeting ekata Zoom link eka email ekak vidhihata mata evanna puluvandha? 3.00 pm venna kalin eka evuvanam hodhayi. Mama office yanna kalin eka balanna oonaa. Email ekak evanna baeri nam WhatsApp message ekak hari evanna.Thanks!');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0016 - Short confirmation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('hari hari');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_Fun_0017 - Compliment sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('wow oyaa harima lassanayi!');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

// ===================== POSITIVE UI TESTS =====================
test('Pos_UI_0001 - Food request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mata bath oonee');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_UI_0002 - Help offer', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mama obata sahaya vennadha?');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_UI_0003 - Help offer repeat', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mama obata sahaya vennadha?');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_UI_0004 - Health question', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('oyaagee saepa saniipa kohomadha?');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_UI_0005 - Travel sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('man pansal yanavaa');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_UI_0006 - Joined sentence', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mama gedhara yanavaa oyaa enavadha?');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_UI_0007 - Meeting time', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('Zoom meeting eka adha 7.30 AM');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});

test('Pos_UI_0008 - Invitation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');
  await expect(input).toBeVisible();

  await input.fill('mama gedhara innavaa, obata enna puluvandha?');
  await page.waitForTimeout(5000);

  console.log(await page.locator('textarea').last().inputValue());
});
