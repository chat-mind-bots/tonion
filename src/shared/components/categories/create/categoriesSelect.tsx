"use server";

import { IOption, Select } from "@/shared/components/core/select";
import { getErrorMessage } from "@/utils/getEttotMessage";
import { getCategoriesAction } from "@/shared/actions/categories/getCategoriesAction";
import { FormState } from "@/utils/toFormState";

interface CategoriesSelectProps {
	state: FormState;
}
export const CategoriesSelect = async (props: CategoriesSelectProps) => {
	const defaultOption: IOption = { value: null, displayValue: "-" };
	const options: IOption[] = [defaultOption].concat(
		((await getCategoriesAction()) ?? []).map((category) => ({
			value: category.id,
			displayValue: category.name,
		}))
	);

	return (
		<div className={"relative mb-6"}>
			<Select
				label={"Select parent category"}
				id={"parentId"}
				name={"parentId"}
				options={options}
				errorMessages={getErrorMessage(
					props?.state?.fieldErrors["parentId"]?.[0]
				)}
			/>
		</div>
	);
};
