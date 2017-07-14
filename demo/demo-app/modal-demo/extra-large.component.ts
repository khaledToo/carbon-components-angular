import { Component } from "@angular/core";
import { ModalService } from "./../../../src/modal/modal.service";
import { Modal } from "../../../src/";
import { ErrorModalComponent } from "./error-modal.component";

@Modal()
@Component({
	selector: "xxl-modal",
	template: `
	<n-modal size="xxl" (overlaySelected)="closeModal()">
		<n-modal-header (closeSelect)="closeModal()">XXL</n-modal-header>
		<section class="modal-body">
			<p>This is an XXL modal.</p>
		</section>
		<n-modal-footer>
			<button class="btn btn-secondary cancel-button" (click)="closeModal()">Cancel</button>
			<button class="btn submit-button" (click)="openModal()">Submit and get error message</button>
		</n-modal-footer>
	</n-modal>
	`,
	styleUrls: ["./form-modal.component.scss"]
})
export class XLModalComponent {

	constructor(private modalService: ModalService) { }

	openModal(modalType) {
		this.modalService.create({component: ErrorModalComponent});
	}
}