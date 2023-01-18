import {test, expect} from '@playwright/experimental-ct-react'
import Modal from '../components/Modal'


test('Modal should change text', async({mount}) =>{
    let newTask = ''
    const component = await mount(<Modal setNewTask={(text) => {newTask = text}}/>)

    await component.locator('input').fill('some Text')

    await expect(newTask).toContain('some Text')
}) 

test('Modal should closed', async({mount}) =>{
    let showModal = true
    const component = await mount(<Modal setShowModal={(value) => {showModal = value}}/>)

    await component.getByText('Cancel').click()

    await expect(showModal).toBeFalsy()
})