"use client";

const RegisterForm = ({ register }: { register(formData: FormData): void }) => {
	return (
		<form action={register}>
			<input type="text" name={"address"} placeholder={"Enter address"} />
			<button type={"submit"}>Register</button>
		</form>
	);
};

export default RegisterForm;
