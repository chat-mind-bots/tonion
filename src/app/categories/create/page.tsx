import { ContentBlock } from "@/shared/components/core/contentBlock";
import { PageTitle } from "@/shared/components/core/pageTitle";
import { Loader } from "@/shared/components/core/loader";
import { Suspense } from "react";
import { CategoryCreate } from "@/shared/components/categories/create";

export default function CategoriesCreate() {
	return (
		<div className={"pb-[81px]"}>
			<ContentBlock>
				<PageTitle title={"Create category"} className={"mb-4"} />
			</ContentBlock>
			<ContentBlock>
				<Suspense fallback={<Loader />}>
					<CategoryCreate />
				</Suspense>
			</ContentBlock>
		</div>
	);
}
