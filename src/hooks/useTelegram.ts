import { Telegram } from "@twa-dev/types";

declare const window: {
	Telegram: Telegram;
};

const tg = window.Telegram.WebApp;

export function useTelegram() {
	const onClose = () => {
		tg.close();
	};

	const onExpand = () => {
		tg.expand();
	};

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	};
	return {
		onClose,
		onToggleButton,
		onExpand,
		tg,
		theme: tg.themeParams,
		user: tg.initDataUnsafe?.user,
		queryId: tg.initDataUnsafe?.query_id,
		startParam: tg.initDataUnsafe?.start_param,
	};
}
