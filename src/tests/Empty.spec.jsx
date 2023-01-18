import {test, expect} from '@playwright/experimental-ct-react'
import Empty from '../components/Empty';

test('Empty should have text', async({mount}) =>{
    const component = await mount(<Empty/>);
    await expect(component.getByText(`To Do is empty....`)).toBeVisible()
})

test('Empty should have image', async({mount}) =>{
    const component = await mount(<Empty/>)
    const locator = component.locator('img')
    await expect(locator).toHaveAttribute('alt', 'empty todo list')
})