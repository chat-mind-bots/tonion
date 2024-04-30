import { PageTitle } from "@/shared/components/core/pageTitle";
import { ContentBlock } from "@/shared/components/core/contentBlock";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";
import { Suspense } from "react";
import { MyStores } from "@/shared/components/stores/myStores";
import { Loader } from "@/shared/components/core/loader";
import Link from "next/link";

export default function Portfolio() {
	return (
		<div className={"pb-[81px]"}>
			<ContentBlock>
				<PageTitle title={"Portfolio"} className={"mb-4"} />
			</ContentBlock>

			<ContentBlock isBorderBottom isBorderTop>
				<PageTitle title={"My Stores"} />
				<Suspense fallback={<Loader />}>
					<MyStores />
				</Suspense>
			</ContentBlock>

			<ContentBlock className={"w-full flex justify-center"}>
				<PrimaryButton>
					<Link href={"/store/create"}>+ Create Market</Link>
				</PrimaryButton>
			</ContentBlock>
		</div>
	);
}
