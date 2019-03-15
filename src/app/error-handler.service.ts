import { Injectable, ErrorHandler } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {
	handleError(error: any) {
		if (error instanceof HttpErrorResponse) {
			console.error(error.status, 'status code');
			console.error(error.error, 'error message');
		} 
	}
}
