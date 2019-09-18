module.exports = {
	url () {
		return `${this.api.launch_url}/`;
	},
	elements: {
		usernameField: '[name="username"]',
		passwordField: '[name="password"]',
		loginButton: '#btn-login',
	},

	commands: [
		{
			setUsernameField(username) {
				return this.clearValue('@usernameField')
				.setValue('@usernameField', username);
			},
            
			setPasswordField(password) {
				return this.clearValue('@passwordField')
					.setValue('@passwordField', password);
			},

			clickLoginButton() {
				return this.click('@loginButton');
			},

			loginDefault() {
				this.setUsernameField('curtis.miller@cycosoft.com')
					.setPasswordField('Password1')
					.clickLoginButton();
			}
		},
	],
};
