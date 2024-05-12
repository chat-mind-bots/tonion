import { FormState } from "@/utils/toFormState";
import { useEffect, useRef } from "react";
import { showToast } from "@/shared/helpers/showToast";

export const useFormUtils = (state: FormState, resetHandler?: () => void) => {
	const formRef = useRef<HTMLFormElement>(null);
	const prevTimestamp = useRef(state.timestamp);

	useEffect(() => {
		if (!formRef.current) return;

		if (
			state.status === "SUCCESS" &&
			state.message &&
			state.timestamp !== prevTimestamp.current
		) {
			showToast("success", state.message);
			formRef.current?.reset();
			resetHandler && resetHandler();
			prevTimestamp.current = state.timestamp;
		}
		if (
			state.status === "ERROR" &&
			state.message &&
			state.timestamp !== prevTimestamp.current
		) {
			showToast("error", state.message);
			prevTimestamp.current = state.timestamp;
		}
	}, [state, formRef]);

	return { formRef };
};
