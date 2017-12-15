/* eslint-env jasmine, jquery */
/* global loadFixtures */

/**
 * Account menu module tests
 */

require('jquery')

var accountMenu, $menuItem1, $menuItem2, $subMenu1, $subMenu2

var setup = function () {
  accountMenu()
  $menuItem1 = $('#account-menu__main-1')
  $menuItem2 = $('#account-menu__main-2')
  $subMenu1 = $('#subnav-1')
  $subMenu2 = $('#subnav-2')
}

describe('Given I have an account menu of the page', function () {
  beforeEach(function () {
    jasmine.getFixtures().fixturesPath = 'base/components/account-menu'
    loadFixtures('account-menu.html')
    accountMenu = require('./account-menu.js')
  })

  describe('When the page is loaded', function () {
    beforeEach(setup)

    it('An account menu should show menu items with no sub menus visible', function () {
      expect($subMenu1).not.toHaveClass('subnav-reveal')
      expect($subMenu2).not.toHaveClass('subnav-reveal')
    })
  })

  describe('When I click on the first menu item', function () {
    beforeEach(setup)

    it('the first sub menu should open', function () {
      expect($subMenu1).not.toHaveClass('subnav-reveal')
      $($menuItem1).click()
      expect($subMenu1).toHaveClass('subnav-reveal')
    })
  })

  describe('When I click on the second menu item', function () {
    beforeEach(setup)

    it('the second sub menu should open', function () {
      expect($subMenu2).not.toHaveClass('subnav-reveal')
      $($menuItem2).click()
      expect($subMenu2).toHaveClass('subnav-reveal')
    })
  })

  describe('When I click the first menu item again', function () {
    beforeEach(setup)

    it('the first sub menu should close', function () {
      $($menuItem1).click()
      expect($subMenu1).toHaveClass('subnav-reveal')
      $($menuItem1).click()
      expect($subMenu1).not.toHaveClass('subnav-reveal')
    })
  })

  describe('When I click the second menu item again', function () {
    beforeEach(setup)

    it('the second sub menu should close', function () {
      $($menuItem2).click()
      expect($subMenu2).toHaveClass('subnav-reveal')
      $($menuItem2).click()
      expect($subMenu2).not.toHaveClass('subnav-reveal')
    })
  })
})
