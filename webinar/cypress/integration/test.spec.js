/// <reference types="cypress"/>
import {cookies,webinar,cookies2, registerPage, dropIcon, selectOption, enterVorname, enterNachname, enterEmail, enterIhreEFN, clickFortfaren, clickFortsetzen} from "./PageObject/page.url.spec";

describe('Webinar registration page', () => {

    it('Go to URL', () => {
        cy.visit("/"); //go to url
    })
    it('accept cookies', () => { 
        cookies()

    })
    it('webinar page', () => { 
        webinar()

    })
    it('accept second cookies', () => { 
        cookies2()

    })
    it('it is registeration button',()=>{
        registerPage()
    })
    it('This will select the title of the user',()=>{
        dropIcon()
        selectOption()
    })
    it('Enter all inputs',()=>{
        enterVorname()
        enterNachname()
        enterEmail()
        enterIhreEFN()
        clickFortfaren()
        clickFortsetzen()
    })
        
    })