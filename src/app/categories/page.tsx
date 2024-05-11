import { CategoriesList } from "@/shared/components/categories/list";
import { PageTitle } from "@/shared/components/core/pageTitle";
import { ContentBlock } from "@/shared/components/core/contentBlock";
import { Loader } from "@/shared/components/core/loader";
import { Suspense } from "react";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";
import Link from "next/link";

export default function Categories() {
	return (
		<div className={"pb-[81px]"}>
			<ContentBlock>
				<PageTitle title={"Categories"} className={"mb-4"} />
			</ContentBlock>
			<ContentBlock isBorderBottom isBorderTop>
				<Suspense fallback={<Loader />}>
					<CategoriesList />
				</Suspense>
			</ContentBlock>
			<ContentBlock>
				<PrimaryButton>
					<Link href={"/categories/create"}>+ Create Category</Link>
				</PrimaryButton>
			</ContentBlock>
		</div>
	);
}
