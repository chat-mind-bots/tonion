"use client";

import "react-toastify/dist/ReactToastify.css";
import "../../app/globals.css";
import { Bounce, ToastContainer } from "react-toastify";

interface ToastProviderProps {
	children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
	const contextClass = {
		success:
			"text-telegram-button-text-color bg-colors-telegram-button-background",
		error: "text-telegram-text bg-colors-telegram-header-bg",
		info: "text-telegram-section-header-text bg-colors-telegram-section-bg",
		warning: "text-telegram-text bg-colors-telegram-header-bg",
		default: "text-telegram-text bg-colors-telegram-background",
		dark: "text-telegram-text bg-colors-telegram-header-bg",
	};

	return (
		<>
			{children}
			<ToastContainer
				position="bottom-center"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
				transition={Bounce}
				toastClassName={(context) =>
					contextClass[context?.type || "default"] +
					" relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer mb-[60px]"
				}
			/>
		</>
	);
}
