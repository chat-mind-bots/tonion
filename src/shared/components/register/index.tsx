"use server";

import RegisterForm from "@/shared/components/register/register-form";
import { User } from "@prisma/client";
import { registerUser } from "@/shared/actions/user/registerUser";

const Register = async () => {
	const onSubmit = async (formData: FormData) => {
		"use server";
		const address = formData.get("address") as string;
		if (address) {
			const data: Pick<User, "address"> = {
				address,
			};
			const user = await registerUser(data);
		}
	};
	return <RegisterForm register={onSubmit} />;
};
export default Register;
