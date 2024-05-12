import { CategoriesList } from "@/shared/components/categories/list";
import { PageTitle } from "@/shared/components/core/pageTitle";
import { ContentBlock } from "@/shared/components/core/contentBlock";
import { Loader } from "@/shared/components/core/loader";
import { Suspense } from "react";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";
import Link from "next/link";
import clsx from "clsx";

export default function Categories() {
	return (
		<div className={"pb-[81px]"}>
			<ContentBlock>
				<PageTitle
					title={"Categories"}
					actions={
						<PrimaryButton className={clsx("py-1", "px-2", "text-sm")}>
							<Link href={"/categories/create"}>+ Create Category</Link>
						</PrimaryButton>
					}
				/>
			</ContentBlock>
			<ContentBlock isBorderBottom isBorderTop>
				<Suspense fallback={<Loader />}>
					<CategoriesList />
				</Suspense>
			</ContentBlock>
		</div>
	);
}
