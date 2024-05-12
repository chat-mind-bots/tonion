import { PageTitle } from "@/shared/components/core/pageTitle";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";
import clsx from "clsx";
import Link from "next/link";
import { ContentBlock } from "@/shared/components/core/contentBlock";
import { Suspense } from "react";
import { Loader } from "@/shared/components/core/loader";
import { CategoryEdit } from "@/shared/components/categories/edit";

export default function CategoryEditPage({
	params,
}: {
	params: { id: string };
}) {
	return (
		<div className={"pb-[81px]"}>
			<ContentBlock>
				<PageTitle title={`Edit category`} />
			</ContentBlock>
			<ContentBlock isBorderBottom isBorderTop>
				<Suspense fallback={<Loader />}>
					<CategoryEdit id={params.id} />
				</Suspense>
			</ContentBlock>
		</div>
	);
}
