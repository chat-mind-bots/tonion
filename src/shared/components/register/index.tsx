"use server";

import { registerUser } from "@/shared/actions/user/registerUser";
import { User } from "@prisma/client";

export const Register = async () => {
	const onSubmit = async (formData: FormData) => {
		console.log(formData.get("address"));
		// const data: Pick<User, "address"> = {
		// 	address: formData.get("address"),
		// };
	};
	return <div>SOmething</div>;
	// return (
	// 	<form action={onSubmit}>
	// 		<input type="text" id={"address"} placeholder={"Enter address"} />
	// 		<button type={"submit"}>Register</button>
	// 	</form>
	// );
};
