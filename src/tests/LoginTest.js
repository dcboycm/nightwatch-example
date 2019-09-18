module.exports = {

	'Verify default user can log in': (browser) => {
		const loginPage = browser.page.LoginPage().navigate();
		const dashboardPage = browser.page.DashboardPage();
		
		loginPage.loginDefault();
		dashboardPage.expect.element('@header').text.to.contain('Dashboard - ');
		dashboardPage.expect.element('@quickAddContactButton').to.be.visible;
		dashboardPage.expect.element('@addWidgetButton').to.be.visible;

		browser.end();
	},

};
