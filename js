import { LightningElement,api } from 'lwc';
import {showToast} from 'c/accniteCommonHelper';
import { loadStyle } from 'lightning/platformResourceLoader';
import customStyleCSS from '@salesforce/resourceUrl/StyleCSS'
export default class EditAccountDetails extends LightningElement {

    @api recordId;
/**
Type: Event handler
Purpose : Handles error message if error comes in lightning record edit form
**/
    errorButton(event) {
        showToast('Error', 'error','Error occured!',this);
        let customEvent = new CustomEvent('close');
        this.dispatchEvent(customEvent);
    }
/**
Type: Event handler
Purpose : Handles success message when data is submitted successfully in lightning record edit form
**/
   savebutton(event) {
        showToast('Success', 'success','Updated successfully!',this);
        let customEvent = new CustomEvent('close');
        this.dispatchEvent(customEvent);
    }
/**
Type: Event handler
Purpose : Handles the event fired on click of button to close modal
**/
    closebutton(event) {
        let customEvent = new CustomEvent('close');
        this.dispatchEvent(customEvent);
    }

    constructor() {

        super();

        Promise.all([

            loadStyle(this,customStyleCSS)

        ]);

    }
}
