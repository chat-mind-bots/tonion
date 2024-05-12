import React, { Suspense } from "react";
import { ContentBlock } from "@/shared/components/core/contentBlock";
import { PageTitle } from "@/shared/components/core/pageTitle";
import { Loader } from "@/shared/components/core/loader";
import { CategoryEdit } from "@/shared/components/categories/edit";
import { EditStore } from "@/shared/components/stores/editStore";

export default function EditStorePage({ params }: { params: { id: string } }) {
	console.log("params", params.id);
	return (
		<div className={"pb-[81px]"}>
			<ContentBlock>
				<PageTitle title={`Edit store`} />
			</ContentBlock>
			<ContentBlock isBorderBottom isBorderTop>
				<Suspense fallback={<Loader />}>
					<EditStore id={params.id} />
				</Suspense>
			</ContentBlock>
		</div>
	);
}
