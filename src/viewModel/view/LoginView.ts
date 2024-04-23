import type { BaseView } from './BaseView';

export interface LoginView extends BaseView {
  onLoginSuccess(): void;
}
