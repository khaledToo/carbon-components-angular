import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "ibm-timepicker",
	template: `
		<div class="bx--form-item">
			<div class="bx--time-picker">
				<div class="bx--time-picker__input">
					<div
						[ngClass]="{
							'bx--time-picker__select': true,
							'bx--select--inline': display === 'inline',
							'bx--select--light': theme === 'light',
							'bx--skeleton': skeleton
						}"
						class="bx--select">
						<label *ngIf="!skeleton" [attr.for]="id" class="bx--label">{{label}}</label>
						<input
							#timePicker
							[placeholder]= "placeholder"
							[pattern]= "pattern"
							[attr.id]="id"
							[disabled]="disabled"
							maxlength="5"
							(change)="onChange($event)"
							class="bx--time-picker__input-field">

					</div>
				</div>
				<ng-content></ng-content>
			</div>
		</div>
	`
})
export class TimePicker {

	/**
	 * Tracks the total number of selects instantiated. Used to generate unique IDs
	 */
	static timePickerCount = 0;

	@Input() label;
	@Input() placeholder = "hh:mm";
	@Input() pattern = "(1[012]|[0-9]):[0-5][0-9]";
	@Input() id = `timepicker-${TimePicker.timePickerCount++}`;
	@Input() disabled = false;

	@Output() valueChange: EventEmitter<string> = new EventEmitter();


	onChange(event) {
		this.valueChange.emit(event.target.value);
	}
}