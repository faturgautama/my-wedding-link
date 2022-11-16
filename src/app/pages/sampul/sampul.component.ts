import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-sampul',
    templateUrl: './sampul.component.html',
    styleUrls: ['./sampul.component.css']
})
export class SampulComponent implements OnInit {

    Penerima: string = "";

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.getPenerima();
    }

    getPenerima(): void {
        const penerima = this.activatedRoute.snapshot.queryParams.penerima;
        this.Penerima = penerima.split("-").join(" ");
    }

    handleOpenInvitation(): void {
        this.router.navigate(['kiki-sandy'], { queryParams: { penerima: this.activatedRoute.snapshot.queryParams.penerima } })
    }
}   
