import { FormState } from "@/utils/toFormState";
import { RefObject, useEffect } from "react";
import { showToast } from "@/shared/helpers/showToast";

export const useFormUtils = (
	state: FormState,
	ref: RefObject<HTMLFormElement>
) => {
	useEffect(() => {
		if (state.status === "SUCCESS" && state.message) {
			showToast("success", state.message);
			ref.current?.reset();
		}
		if (state.status === "ERROR" && state.message) {
			showToast("error", state.message);
		}
	}, [state]);
};
