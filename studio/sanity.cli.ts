import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
	api: {
		projectId: "kpkjot36",
		dataset: "production",
	},
	deployment: {
		appId: "fc0mbcfy6q9uwc4sf0r8i2dq",
		autoUpdates: true,
	},
});
