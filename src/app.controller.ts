import { Controller, Get, Options } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(private readonly appService: AppService) { }

	@Get("/healthz")
	getServerHealth() {
		return { active: "The hood is up Commandliner 🚀🚀🚀" };
	}

}
