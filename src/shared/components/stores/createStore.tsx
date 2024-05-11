"use client";

import { createStoreAction } from "@/shared/actions/store/createStoreAction";
import { useFormState, useFormStatus } from "react-dom";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";
import { Input } from "@/shared/components/core/input";
import { Textarea } from "@/shared/components/core/textarea";
import Typography from "@/shared/components/core/typography";
import Chip from "@/shared/components/core/chip";
import clsx from "clsx";
import { EMPTY_FORM_STATE } from "@/utils/toFormState";
import { useEffect, useRef, useState } from "react";
import { getErrorMessage } from "@/utils/getEttotMessage";
import { useFormUtils } from "@/hooks/useFormUtils";

const initialState = {
	message: "",
};

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<PrimaryButton type="submit" aria-disabled={pending}>
			Create Store
		</PrimaryButton>
	);
}

export const CreateStore = () => {
	const [skills, setSkill] = useState<{ [x: string]: boolean }>({});
	const [skillValue, setSkillValue] = useState("");
	const [state, formAction] = useFormState(
		createStoreAction.bind(
			null,
			Object.keys(skills).filter((key) => skills[key])
		),
		EMPTY_FORM_STATE
	);
	const formRef = useRef<HTMLFormElement>(null);

	useFormUtils(state, formRef);

	return (
		<form action={formAction} ref={formRef}>
			<div className="relative mb-6">
				<Input
					label={"Store Name"}
					className="bg-colors-telegram-header-bg border border-colors-telegram-button-background-secondary text-telegram-text text-sm rounded-lg focus:ring-colors-telegram-button-background focus:border-colors-telegram-button-background block w-full p-2.5"
					id="name"
					name={"name"}
					placeholder="Store Name"
					errorMessages={getErrorMessage(state.fieldErrors["name"]?.[0])}
				/>
			</div>

			<div className="relative mb-6">
				<Textarea
					label={"Store Description"}
					id="description"
					rows={2}
					name={"description"}
					placeholder="Store Description"
					errorMessages={getErrorMessage(state.fieldErrors["description"]?.[0])}
				/>
			</div>

			<div className="relative mb-6">
				<div className={clsx("flex gap-[12px] flex-col")}>
					<Typography
						variant={"p"}
						className={clsx(
							"block mb-2 text-sm font-medium text-telegram-text"
						)}
					>
						Store Skills
					</Typography>
					<div className={clsx("flex", "gap-1", "flex-wrap")}>
						{Object.keys(skills)
							.filter((key) => skills[key])
							.map((skill) => {
								return (
									<Chip
										key={skill}
										label={skill}
										onDelete={() => {
											setSkill((prevState) => ({
												...prevState,
												[skill]: false,
											}));
										}}
									/>
								);
							})}
					</div>
					<Textarea
						id="skills"
						rows={2}
						name={"skills"}
						value={skillValue}
						onChange={(event) => {
							setSkillValue(event.target.value);
						}}
						onKeyDown={(event) => {
							if (
								(event.key === "Enter" || event.key === " ") &&
								skillValue.length
							) {
								setSkill((prevState) => ({ ...prevState, [skillValue]: true }));
								setSkillValue("");
							}
						}}
						placeholder="Store Skills"
						errorMessages={getErrorMessage(state.fieldErrors["skills"]?.[0])}
					/>
				</div>
			</div>
			<SubmitButton />
		</form>
	);
};
