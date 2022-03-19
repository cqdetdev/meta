import inquirer from 'inquirer';
import Response from './Response';

export default class CLI {
	private interface: inquirer.Inquirer;

	constructor() {
		this.interface = inquirer;
	}

	public async getMetaData(): Promise<any> {
		let metaData = <Response>await this.interface.prompt([
			{
				message: 'What is the name of the bot',
				name: 'name',
			},
			{
				message: 'What is the color of the bot (for embeds)',
				name: 'color',
			},
			{
				message: 'What is the token of the bot',
				name: 'token',
			},
			{
				message:
					'Custom message that is emitted when someone joins the server',
				name: 'welcomeMessage',
			},
			{
				message:
					'Custom message that is emitted when someone uses the help command',
				name: 'helpMessage',
			},
			{
				message:
					'Custom message that is emitted in the footer of an embed',
				name: 'footerMessage',
			},
			{
				message:
					'Whether the bot should be extensible after building to create more features',
				name: 'premium',
				default: false,
			},
		]);
		return metaData;
	}
}
