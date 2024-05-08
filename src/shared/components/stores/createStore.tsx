"use client";

import { createStoreAction } from "@/shared/actions/store/createStoreAction";
import { useFormState, useFormStatus } from "react-dom";
import { PrimaryButton } from "@/shared/components/core/button/primaryButton";
import { Input } from "@/shared/components/core/input";
import { Textarea } from "@/shared/components/core/textarea";
import Typography from "@/shared/components/core/typography";
import Chip from "@/shared/components/core/chip";
import clsx from "clsx";

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
	const [state, formAction] = useFormState(createStoreAction, initialState);
	return (
		<form action={formAction}>
			<div className="relative mb-6">
				<Input
					label={"Store Name"}
					className="bg-colors-telegram-header-bg border border-colors-telegram-button-background-secondary text-telegram-text text-sm rounded-lg focus:ring-colors-telegram-button-background focus:border-colors-telegram-button-background block w-full p-2.5"
					id="name"
					name={"name"}
					placeholder="Store Name"
					errorMessages={state?.errors?.name}
				/>
			</div>

			<div className="relative mb-6">
				<Textarea
					label={"Store Description"}
					id="description"
					rows={2}
					name={"description"}
					placeholder="Store Description"
					errorMessages={state?.errors?.description}
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
						<Chip label={"JavaScript"} onDelete={() => {}} />
						<Chip label={"React"} onDelete={() => {}} />
						<Chip label={"React"} onDelete={() => {}} />
						<Chip label={"React"} onDelete={() => {}} />
						<Chip label={"React"} onDelete={() => {}} />
						<Chip label={"Tailwind"} onDelete={() => {}} />
						<Chip label={"NextJS"} onDelete={() => {}} />
					</div>
					<Textarea
						id="skills"
						rows={2}
						name={"skills"}
						placeholder="Store Skills"
						errorMessages={state?.errors?.skills}
					/>
				</div>
			</div>
			<Typography className={"mt-2 mb-3 text-telegram-link"} variant={"h3"}>
				Success!
			</Typography>
			<PrimaryButton type={"submit"}>{"Create Store"}</PrimaryButton>
		</form>
	);
};
