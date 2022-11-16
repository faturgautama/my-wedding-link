export interface IUcapan {
    id: number;
    nama_lengkap: string;
    ucapan: string;
    is_hadir: boolean;
    time: Date;
}

export interface IDaftarUndangan {
    id: string;
    nama_lengkap: string;
    content: string;
}