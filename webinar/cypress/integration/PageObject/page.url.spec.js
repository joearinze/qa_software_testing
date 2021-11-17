/// <reference types="cypress"/>


import elements from "../../fixtures/elements"
import { testdata } from "../../fixtures/testdata"

export function cookies () {
   
    cy.xpath(elements.acceptCookies).should('contain',' Akzeptieren ').click({force:true})
    
}
export function webinar(){
    cy.xpath(elements.webinarpage).invoke('removeAttr','target').click({force:true})
    cy.url().should('include', 'best-of-congress-2021')
}
export function cookies2 () {
   
    cy.xpath(elements.acceptCookies2).should('contain',' Akzeptieren ').click({force:true})
    
}
export function registerPage(){
    cy.get(elements.register).should("contain","Jetzt anmelden").click({force:true})
}
export function dropIcon(){
    cy.xpath(elements.dropdown).click({force:true})
}
export function selectOption(){
    cy.xpath(elements.select).should('contain','Dr. jur.').click({force:true})
}
export function enterVorname(){
    cy.xpath(elements.vorname).click({force:true}).type(testdata.vorname)
}
export function enterNachname(){
    cy.xpath(elements.nachname).click({force:true}).type(testdata.Nachname)
}
export function enterEmail(){
    cy.xpath(elements.email).click({force:true}).type(testdata.Email)
}
export function enterIhreEFN(){
    cy.xpath(elements.ihre_efn).click({force:true}).type(testdata.ihreEFN)
}
export function clickFortfaren(){
    cy.xpath(elements.fortfaren).should('contain',' Fortfahren ').click({force:true})
} 
export function clickFortsetzen(){
    cy.xpath(elements.fortsetzen).click({force:true})
} 