import {test, expect} from '@playwright/experimental-ct-react'
import Header from '../components/Header'

test('Header must show modal', async({mount}) =>{
    let showModal = false
    const component = await mount(<Header setShowModal={() => {showModal = true}}/>)

    await component.locator('button').click()

    await expect(showModal).toBeTruthy()
})