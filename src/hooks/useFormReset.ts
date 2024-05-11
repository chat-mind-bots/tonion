import { useEffect, useRef } from "react";
import { FormState } from "@/utils/toFormState";

const useFormReset = (formState: FormState, handler?: () => void) => {
	const formRef = useRef<HTMLFormElement>(null);
	const prevTimestamp = useRef(formState.timestamp);

	useEffect(() => {
		if (!formRef.current) return;
		if (
			formState.status === "SUCCESS" &&
			formState.timestamp !== prevTimestamp.current
		) {
			formRef.current.reset();
			handler && handler();
			prevTimestamp.current = formState.timestamp;
		}
	}, [formState.status, formState.timestamp]);

	return formRef;
};

export { useFormReset };
