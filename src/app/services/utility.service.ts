import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    constructor() { }

    showAlert(icon: any, title: string, message: string): Promise<any> {
        return Swal.fire({
            icon: icon,
            title: title,
            text: message,
            showCloseButton: false,
            showCancelButton: false,
            confirmButtonText: 'Tutup'
        });
    }
}
