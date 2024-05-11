import { PageTitle } from "@/shared/components/core/pageTitle";
import { ContentBlock } from "@/shared/components/core/contentBlock";
import { CreateStore } from "@/shared/components/stores/createStore";
import { Suspense } from "react";
import { Loader } from "@/shared/components/core/loader";

export default function StoreCreate() {
	return (
		<div>
			<ContentBlock>
				<PageTitle title={"Create store"} className={"mb-4"} />
			</ContentBlock>
			<ContentBlock>
				<CreateStore />
			</ContentBlock>
		</div>
	);
}
