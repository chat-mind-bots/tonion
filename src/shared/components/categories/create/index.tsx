"use client";

import { createCategoryAction } from "@/shared/actions/categories/createCategoryAction";
import { useFormState, useFormStatus } from "react-dom";
import { EMPTY_FORM_STATE } from "@/utils/toFormState";
import { Input } from "@/shared/components/core/input";
import { getErrorMessage } from "@/utils/getEttotMessage";
import { Textarea } from "@/shared/components/core/textarea";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<PrimaryButton type="submit" aria-disabled={pending}>
			Create Category
		</PrimaryButton>
	);
}

export const CategoryCreate = () => {
	const [state, formAction] = useFormState(
		createCategoryAction,
		EMPTY_FORM_STATE
	);

	return (
		<form action={formAction}>
			<div className={"relative mb-6"}>
				<Input
					label={"Category name"}
					id={"name"}
					name={"name"}
					placeholder={"Enter category name"}
					errorMessages={getErrorMessage(state.fieldErrors["name"]?.[0])}
				/>
			</div>
			<div className={"relative mb-6"}>
				<Textarea
					label={"Category description"}
					id={"description"}
					name={"description"}
					placeholder={"Enter category description"}
					errorMessages={getErrorMessage(state.fieldErrors["name"]?.[0])}
				/>
			</div>
			<div>
				<SubmitButton />
			</div>
		</form>
	);
};
