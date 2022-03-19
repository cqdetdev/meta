export default interface Response {
	name: string;
	color: string; // Must be validated by ^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$
	token: string;
	welcomeMessage: string;
	helpMessage: string;
	footerMessage: string;
	premium: boolean;
}
