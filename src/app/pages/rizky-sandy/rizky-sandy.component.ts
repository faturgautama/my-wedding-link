import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { googleCalendarEventUrl } from 'google-calendar-url';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilityService } from 'src/app/services/utility.service';
import { IUcapan } from 'src/app/model/kiki-sandy.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
    selector: 'app-rizky-sandy',
    templateUrl: './rizky-sandy.component.html',
    styleUrls: ['./rizky-sandy.component.css']
})
export class RizkySandyComponent implements OnInit, AfterViewInit, OnDestroy {

    private countDown$: Subscription = new Subscription();

    Event = new Date("Nov 27 2022 09:00:00");

    milliSecondsInASecond = 1000;
    hoursInDay = 24;
    minutesInAHour = 60;
    secondsInAMinute = 60;

    public timeDifference: any;
    public secondsToDateEvent: any = "00";
    public minutesToDateEvent: any = "00";
    public hoursToDateEvent: any = "00";
    public daysToDateEvent: any = "00";

    Ucapan: IUcapan[] = [];

    FormUcapan: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private utilityService: UtilityService,
        private firebaseService: FirebaseService,
    ) {
        this.FormUcapan = this.formBuilder.group({
            nama_lengkap: ['', [Validators.required]],
            ucapan: ['', [Validators.required]],
            is_hadir: [true, [Validators.required]],
            time: [new Date(), [Validators.required]],
        });
    }

    ngOnInit(): void {
        this.countDown$ = interval(1000).subscribe(x => {
            this.getTimeDifference();
        });

        this.handleGetUcapan();
    }

    ngAfterViewInit(): void {
        this.handlePlaySong();
    }

    handlePlaySong(): void {
        const btnPlaySong = document.getElementById("btnPlaySong") as HTMLElement;
        btnPlaySong.click();
    }

    private getTimeDifference(): void {
        this.timeDifference = this.Event.getTime() - new Date().getTime();
        this.allocateTimeUnits(this.timeDifference);
    }

    private allocateTimeUnits(timeDifference: any): void {
        this.secondsToDateEvent = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.secondsInAMinute);
        this.minutesToDateEvent = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAHour) % this.secondsInAMinute);
        this.hoursToDateEvent = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAHour * this.secondsInAMinute) % this.secondsInAMinute);
        this.daysToDateEvent = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAHour * this.secondsInAMinute * this.hoursInDay));
    }

    handleAddToCalendar(): void {
        const event = googleCalendarEventUrl({
            start: '20221127T100000',
            end: '20221127T130000',
            title: 'Kiki & Sandy Wedding',
            details: 'https://maps.app.goo.gl/vVYj4zm1PXQU1fvV6?g_st=ic',
            location: 'Jl. Pucang Anom V No 25 RT 08 RW 18 Kel. Batursari Kec. Mranggen Kab. Demak'
        });

        window.open(`https://calendar.google.com/calendar/r/eventedit?${event}`);
    }

    handleOpenMaps(): void {
        window.open('https://maps.app.goo.gl/vVYj4zm1PXQU1fvV6?g_st=ic');
    }

    handleGetUcapan(): void {
        this.firebaseService.getAllUcapan()
            .subscribe((result) => {
                if (result) {
                    this.Ucapan = result;
                }
            })
    }

    handleSubmitUcapan(FormUcapan: IUcapan): void {
        FormUcapan.time = new Date();

        this.firebaseService.submitUcapan(FormUcapan)
            .subscribe((result) => {
                if (result) {
                    this.utilityService.showAlert('success', 'Terima Kasih', 'Ucapan Anda Berarti Untuk Kami')
                        .then(() => {
                            this.handleResetFormUcapan();
                            this.handleGetUcapan();
                        });
                }
            });
    }

    handleResetFormUcapan(): void {
        this.FormUcapan.reset();
        this.nama_lengkap.setValue("");
        this.ucapan.setValue("");
        this.is_hadir.setValue(true);
        this.time.setValue(new Date());
    }

    handleClickFooter(): void {
        window.open('https://faturgautama.site');
    }

    ngOnDestroy(): void {
        this.countDown$.unsubscribe();
    }

    get nama_lengkap(): AbstractControl { return this.FormUcapan.get('nama_lengkap') as AbstractControl };
    get ucapan(): AbstractControl { return this.FormUcapan.get('ucapan') as AbstractControl };
    get is_hadir(): AbstractControl { return this.FormUcapan.get('is_hadir') as AbstractControl };
    get time(): AbstractControl { return this.FormUcapan.get('time') as AbstractControl };
}
