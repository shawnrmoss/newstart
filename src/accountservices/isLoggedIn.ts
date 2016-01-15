import {Injector} from 'angular2/core';
import {appInjector} from './appInjector';
import {AuthService} from './services/authservice';
import {Router, ComponentInstruction} from 'angular2/router';

export const isLoggedIn = (to: ComponentInstruction, from: ComponentInstruction) => {
	let injector: Injector = appInjector(); // Get the stored reference to the application injector
	let auth: AuthService = injector.get(AuthService);
	let router: Router = injector.get(Router);
  
	return new Promise((resolve) => {
	  auth.check()
				.subscribe((result) => {
					if (result) {
						resolve(true);
					} else {
						router.navigate(['/Login']);
						resolve(false);
					}
				});
	});
};