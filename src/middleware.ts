import { NextRequest } from "next/server";
import { updateSession } from "../lib/auth/updateSession";

export async function middleware(request: NextRequest) {
	return await updateSession(request);
}
