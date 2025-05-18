import { getCategoryAction } from "@/shared/actions/categories/getCategoryAction";
import Typography from "@/shared/components/core/typography";
import { ClickHereIcon } from "@/shared/components/core/icons/clickHere.icon";
import clsx from "clsx";
import Link from "next/link";

export const Category = async ({ id }: { id: string }) => {
	const category = await getCategoryAction(id);
	const parentCategory = category
		? await getCategoryAction(category.parentId)
		: null;

	return category ? (
		<ul>
			<li className={"flex gap-2"}>
				<Typography variant={"h4"}>name:</Typography>{" "}
				<Typography variant={"span"} className={"text-telegram-hint"}>
					{category.name}
				</Typography>
			</li>
			<li className={"flex gap-2"}>
				<Typography variant={"h4"}>description:</Typography>{" "}
				<Typography variant={"span"} className={"text-telegram-hint"}>
					{category.description}
				</Typography>
			</li>
			{!!parentCategory && (
				<li className={"flex gap-2"}>
					<Typography variant={"h4"}>parent category:</Typography>{" "}
					<Typography
						variant={"span"}
						className={"text-telegram-hint flex gap-2 items-center"}
					>
						{parentCategory.name}
						<Link href={`/categories/${parentCategory.id}`}>
							<ClickHereIcon
								className={clsx("fill-telegram-link", "max-w-4", "w-full", {})}
							/>
						</Link>
					</Typography>
				</li>
			)}
		</ul>
	) : null;
};
