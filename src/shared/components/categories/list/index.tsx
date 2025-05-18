"use server";

import { getCategoriesAction } from "@/shared/actions/categories/getCategoriesAction";
import { TreeViewItem, TreeViewList } from "@/shared/components/core/treeView";
import { Category } from "@prisma/client";
import { buildTree, Tree } from "@/utils/buildTree";
import Link from "next/link";
import { ClickHereIcon } from "@/shared/components/core/icons/clickHere.icon";
import clsx from "clsx";

const generateCategory = (category: Tree<Category>) => {
	return (
		<TreeViewItem
			label={
				<Link href={`/categories/${category.id}`}>
					<div className={"flex gap-2"}>
						<p className={"text-sm"}>{category.name}</p>
						<ClickHereIcon
							className={clsx("fill-telegram-link", "max-w-4", "w-full", {})}
						/>
					</div>
				</Link>
			}
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
