import { ContentBlock } from "@/shared/components/core/contentBlock";
import { PageTitle } from "@/shared/components/core/pageTitle";
import { Suspense } from "react";
import { Loader } from "@/shared/components/core/loader";
import { CreateStore } from "@/shared/components/stores/createStore";
import { MyStores } from "@/shared/components/stores/myStores";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";
import Link from "next/link";

export default function StoreList() {
	return (
		<div>
			<ContentBlock>
				<PageTitle title={"Stores list"} className={"mb-4"} />
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
