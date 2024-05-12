export interface Mandatory {
	id: string;
	parentId: string | null;
}

export type Tree<T> = {
	children: Tree<T>[];
} & T &
	Mandatory;

export function buildTree<T extends Mandatory>(categories: T[]) {
	const categoryMap: { [x: string]: Tree<T> } = {};

	categories.forEach((categoryData) => {
		categoryMap[categoryData.id] = { ...categoryData, children: [] };
	});

	const rootCategories: Tree<T>[] = [];

	categories.forEach((categoryData) => {
		const category = categoryMap[categoryData.id];
		if (categoryData.parentId) {
			const parentCategory = categoryMap[categoryData.parentId];
			if (parentCategory) {
				parentCategory.children.push(category);
			}
		} else {
			rootCategories.push(category);
		}
	});

	return rootCategories;
}
