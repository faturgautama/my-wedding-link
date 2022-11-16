import { Component, OnInit } from '@angular/core';
import { IDaftarUndangan } from 'src/app/model/kiki-sandy.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
    selector: 'app-message-generator',
    templateUrl: './message-generator.component.html',
    styleUrls: ['./message-generator.component.css']
})
export class MessageGeneratorComponent implements OnInit {

    HasilHasBeenGenerated: boolean = false;

    DaftarUndangan: IDaftarUndangan[] = [];

    constructor(
        private utilityService: UtilityService,
        private firebaseService: FirebaseService,
    ) { }

    ngOnInit(): void {
    }

    handleGenerateUndangan(nama_lengkap: string): void {
        this.HasilHasBeenGenerated = false;

        const nama_for_url = nama_lengkap.toLowerCase().split(" ").join("-");

        const url = `https://my-wedding-link.web.app/to?penerima=${nama_for_url}`;

        const pesan = `Assalamualaikum Wr. Wb.
        <br>
        Kepada Yth. Bapak/Ibu/Saudara/i ${nama_lengkap}
        <br>
        <br>
        Tanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i ${nama_lengkap} untuk
        menghadiri acara kami.
        <br>
        <br>
        Link undangan : ${url}
        <br>
        <br>
        Merupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir
        dan memberikan doa restu.
        <br>
        <br>
        *Mohon maaf perihal undangan hanya di bagikan melalui pesan ini.*
        <br>
        <br>
        Dan karena suasana masih pandemi, diharapkan untuk *tetap menggunakan masker dan
        datang
        pada jam yang telah ditentukan.*
        <br>
        <br>
        Terima kasih banyak atas perhatiannya.
        <br>
        <br>
        Yang berbahagia,
        <br>
        *Kiki & Sandy*
        <br>
        <br>
        Wassalamualaikum Wr. Wb.`;

        const hasil = document.getElementById("hasil") as HTMLElement;
        hasil.innerHTML = pesan;

        this.HasilHasBeenGenerated = true;
    }

    handleCopyUndangan(): void {
        const hasil = document.getElementById("hasil") as HTMLElement;
        this.utilityService.showAlert('success', 'Success', 'Berhasil Dicopy ke Clipboard')
            .then(() => {
                navigator.clipboard.writeText(hasil.innerText);
            })
    }
}
