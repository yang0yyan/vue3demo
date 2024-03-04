import type { V } from "vitest/dist/reporters-MmQN-57K.js";
import type { BaseView } from "./BaseView";
import type { CaptchaBean } from "@/bean/login/CaptchaBean";
import type { TokenBean } from "@/bean/login/TokenBean";

export interface LoginView extends BaseView {
    onCaptchaSuccess(o: CaptchaBean): void;
    onLoginSuccess(): void;
}