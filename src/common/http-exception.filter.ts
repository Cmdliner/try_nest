import { ArgumentsHost, Catch, ExceptionFilter, UnauthorizedException } from "@nestjs/common";
import { Response } from "express";

@Catch(UnauthorizedException)
export class UnauthorizedExceptionFilter implements ExceptionFilter {
    catch(exception: UnauthorizedException, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const request =ctx.getRequest<Request>();
        const response = ctx.getResponse<Response>();
        const status = exception.getStatus();

        response.status(status).json({ error: exception.message, other: "From filter" });
    }
}
