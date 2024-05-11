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
import { memo, useState } from "react";

function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<PrimaryButton type="submit" aria-disabled={pending}>
			Create Store
		</PrimaryButton>
	);
}

interface SkillChipProps {
	skills: { [x: string]: boolean };
	onDelete: (skill: string) => void;
}

const MemoizedChips = memo(function SkillChipList({
	skills,
	onDelete,
}: SkillChipProps) {
	return (
		<div className={clsx("flex", "gap-1", "flex-wrap")}>
			{Object.keys(skills)
				.filter((key) => skills[key])
				.map((skill) => {
					return (
						<Chip key={skill} label={skill} onDelete={() => onDelete(skill)} />
					);
				})}
		</div>
	);
});

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
	const onReset = () => {
		setSkill({});
	};
	
	const handleSkillDelete = (skill: string) => {
		setSkill((prevState) => ({
			...prevState,
			[skill]: false,
		}));
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === " " && skillValue.length) {
			setSkill((prevSkills) => ({ ...prevSkills, [skillValue]: true }));
			setSkillValue("");
		}
	};

	const formRef = useRef<HTMLFormElement>(null);

	useFormUtils(state, formRef, onReset);

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
					<MemoizedChips skills={skills} onDelete={handleSkillDelete} />
					<Input
						id="skills"
						name={"skills"}
						value={skillValue}
						onChange={(event) => {
							setSkillValue(event.target.value);
						}}
						onKeyDown={handleKeyDown}
						placeholder="Store Skills"
						errorMessages={getErrorMessage(state.fieldErrors["skills"]?.[0])}
					/>
				</div>
			</div>
			<SubmitButton />
		</form>
	);
};
