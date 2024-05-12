"use client";

import { useFormState, useFormStatus } from "react-dom";
import { EMPTY_FORM_STATE } from "@/utils/toFormState";
import { Input } from "@/shared/components/core/input";
import { getErrorMessage } from "@/utils/getEttotMessage";
import { Textarea } from "@/shared/components/core/textarea";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";
import { useFormUtils } from "@/hooks/useFormUtils";
import { Suspense } from "react";
import { Loader } from "@/shared/components/core/loader";
import { CategoriesSelect } from "@/shared/components/categories/create/categoriesSelect";
import { Category } from "@prisma/client";
import { updateCategoryAction } from "@/shared/actions/categories/updateCategoryAction";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<PrimaryButton type="submit" aria-disabled={pending}>
			Create Category
		</PrimaryButton>
	);
}

export const CategoryEditClient = ({ category }: { category: Category }) => {
	const [state, formAction] = useFormState(
		updateCategoryAction.bind(null, category.id),
		EMPTY_FORM_STATE
	);

	const { formRef } = useFormUtils(state);

	return (
		<form action={formAction} ref={formRef}>
			<div className={"relative mb-6"}>
				<Input
					label={"Category name"}
					id={"name"}
					name={"name"}
					defaultValue={category.name}
					placeholder={"Enter category name"}
					errorMessages={getErrorMessage(state.fieldErrors["name"]?.[0])}
				/>
			</div>
			<div className={"relative mb-6"}>
				<Textarea
					label={"Category description"}
					id={"description"}
					name={"description"}
					defaultValue={category.description}
					placeholder={"Enter category description"}
					errorMessages={getErrorMessage(state.fieldErrors["description"]?.[0])}
				/>
			</div>
			<Suspense fallback={<Loader />}>
				<CategoriesSelect
					state={state}
					defaultValue={category.parentId ?? undefined}
				/>
			</Suspense>
			<div>
				<SubmitButton />
			</div>
		</form>
	);
};
