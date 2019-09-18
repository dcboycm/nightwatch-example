module.exports = {
	url () {
		return `${this.api.launch_url}/Dashboard/userDashboard.jsp`;
	},
	elements: {
        header: '.page-header',
        quickAddContactButton: '#quick_add_button',
        addWidgetButton: '.inf-add-widget'
	},

	commands: [
		{
		},
	],
};
