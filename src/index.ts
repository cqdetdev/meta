import CLI from './cli/CLI';
import Processor from './core/Processor';

const main = async () => {
	console.clear();

	const cli = new CLI();

	const data = await cli.getMetaData(); // Does CLI actions

	const processor = new Processor(data);
	processor.buildConfig(); // Creates a config.json in the `build/` directory
};
main();
