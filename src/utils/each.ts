const each = async (items: any[], next: Function, cb?: Function) => {
	if (items.length === 0) return cb(undefined, items);

	let transformed = new Array(items.length);
	let i = 0;
	let returned = false;
	items.forEach((item, index) => {
		next(item, (err: any, _item: any) => {
			if (returned) return;
			if (err) {
				returned = true;
				return cb(err);
			}
			transformed[index] = _item;
			i += 1;
			if (i === items.length) return cb(undefined, transformed);
		});
	});
};
export default each;
