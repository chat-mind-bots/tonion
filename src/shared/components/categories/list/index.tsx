"use server";

import { getCategoriesAction } from "@/shared/actions/categories/getCategoriesAction";
import { TreeViewItem, TreeViewList } from "@/shared/components/core/treeView";
import { Category } from "@prisma/client";
import { buildTree, Tree } from "@/utils/buildTree";

const generateCategory = (category: Tree<Category>) => {
	return (
		<TreeViewItem
			label={category.name}
			itemId={category.id}
			key={`category - ${category.id}`}
		>
			{category.children?.length &&
				category.children?.map((category) => generateCategory(category))}
		</TreeViewItem>
	);
};

export const CategoriesList = async () => {
	const categories = (await getCategoriesAction()) ?? [];

	const formattedCategories = buildTree(categories);

	return (
		<TreeViewList>
			{formattedCategories
				.filter((category) => !category.parentId)
				.map((category) => {
					return generateCategory(category);
				})}
		</TreeViewList>
	);
};
