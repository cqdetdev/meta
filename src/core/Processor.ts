import Response from '../cli/Response';
import fs from 'fs';
import each from '../utils/each';
export default class Processor {
	private metaData: Response;
	private config: any;

	constructor(metaData: Response) {
		this.metaData = metaData;
	}

	async buildConfig() {
		await fs.promises.writeFile(
			'./build/config.json',
			JSON.stringify(this.metaData, null, 4)
		);
	}

	async buildFromTemplate(template: 'moderation' | 'security') {
		let dirs = await fs.promises.readdir(`./src/templates/${template}/src`);
		each(dirs, async (dir: string, next: Function) => {
			let files = await fs.promises.readdir(
				`./src/templates/${template}/src/${dir}`
			);
			for (let file of files) {
				let data = await fs.promises.readFile(file, 'utf-8');
				data.replace('{ token }', this.config.token); // Still gotta figure this out tho
				// Then do rest of the replaces
			}
			next();
		});
	}

	async buildFromCustom() {}
}
