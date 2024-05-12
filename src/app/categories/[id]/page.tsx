import { PageTitle } from "@/shared/components/core/pageTitle";
import { ContentBlock } from "@/shared/components/core/contentBlock";
import { Category } from "@/shared/components/categories/category";
import { Suspense } from "react";
import { Loader } from "@/shared/components/core/loader";
import clsx from "clsx";
import Link from "next/link";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";

export default function CategoryPage({ params }: { params: { id: string } }) {
	return (
		<div className={"pb-[81px]"}>
			<ContentBlock>
				<PageTitle
					title={`Category`}
					actions={
						<PrimaryButton className={clsx("py-1", "px-2", "text-sm")}>
							<Link href={`/categories/${params.id}/edit`}>Edit Category</Link>
						</PrimaryButton>
					}
				/>
			</ContentBlock>
			<ContentBlock isBorderBottom isBorderTop>
				<Suspense fallback={<Loader />}>
					<Category id={params.id} />
				</Suspense>
			</ContentBlock>
		</div>
	);
}
