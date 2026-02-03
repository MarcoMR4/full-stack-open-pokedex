import { test, expect } from '@playwright/test'

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

    test('Go to a pokemon page', async ({ page }) => {
    await page.goto('/pokemon/charizard')
    await expect(page.getByText('charizard')).toBeVisible()
    await expect(page.getByText('blaze')).toBeVisible()
    await expect(page.getByText('Impact thunder')).toHaveCount(0)
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })
})