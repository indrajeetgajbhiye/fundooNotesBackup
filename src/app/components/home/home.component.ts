import { ChangeDetectorRef, Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DataService } from '../../service/data/data.service';
import { LabelDialogComponent } from '../label-dialog/label-dialog.component';
import { NoteService } from '../../service/note/note.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component'
import { environment } from '../../../environments/environment'
import { SnackbarService } from '../../service/snackbar/snackbar.service';
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
    view = true;
    name: string;
    email: string;
    imageProfile: string;
    image;
    destroy$: Subject<boolean> = new Subject<boolean>();
    mobileQuery: MediaQueryList;
    private _mobileQueryListener: () => void;
    search: string;
    check
    labelNotes;
    hide = true;
    profile;
    imageFile = null;
    innerWidth: number;
    header = 'notes'
    ArrayOfLabel=[];
    public newImage
    img
    dark = false;
    public loading = false;
    constructor(public dialog1: MatDialog, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private dataService: DataService, public noteService: NoteService, private snackbar : SnackbarService) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
        this.innerWidth = window.innerWidth;
    }
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
    }
    ngOnInit() {
        this.loading = true;
        this.getLabel();
        this.name = localStorage.getItem('firstName');
        this.email = localStorage.getItem('email');
        this.newImage = localStorage.getItem('imageUrl');
        this.img = environment.profileUrl + "/" + this.newImage

        this.dataService.currentPhoto.subscribe(message => {
            this.image = message
            this.newImage = localStorage.getItem('imageUrl');
            this.img = environment.profileUrl + "/" + this.newImage
            
        })
        this.loading=false;
    }
    navigateArchive() {
        this.router.navigate(['archive']);
    }
    navigateHome() {
        this.loading = true;
        this.router.navigate(['home']);
        this.loading = false;
    }
    navigateTrash() {
        this.router.navigate(['trash']);
    }
    navigateSearch() {
        this.router.navigate(['search'])
    }
    navigateReminder() {
        this.router.navigate(['reminder']);
    }
    navigateCart() {
        this.router.navigate(['cart'])
    }
    searchfor() {
        this.dataService.changeMessage(this.search);
    }
    showSearch() {
        return this.hide = !this.hide
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
        this.ngOnInit();
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }
    openLabelNotes(labelName) {
        this.router.navigate(['label', labelName]);
    }
    getLabel() {
        try {
            this.noteService.getLabels()
                .pipe(takeUntil(this.destroy$))
                .subscribe(result => {
                    this.ArrayOfLabel = result["data"]["details"];
                    this.dataService.updateLabels(result["data"]["details"]);
                })
        } catch{
        }
    }
    openLabelDialog() {
        const dialogRef = this.dialog1.open(LabelDialogComponent, {
            data: { data: this.ArrayOfLabel },
            width: 'auto',
            height: 'auto'
        });
        dialogRef.afterClosed().subscribe(result => {

        })
    }
    changeView() {
        this.view = !this.view;
        this.dataService.changeView(this.view);
    }

    onFileUpload(event) {
        this.loading = true;
        this.imageFile = event.path[0].files[0];
        const uploadImage = new FormData();
        uploadImage.append('file', this.imageFile, this.imageFile.name);
        this.openPicture(event);
    }
    openPicture(data) {
        const dialogRef = this.dialog1.open(ImageDialogComponent, {
            width: 'auto',
            height: 'auto',
            data: data,
            //   disableClose: true
        })
        dialogRef.afterClosed().subscribe(result => {
            if (result == "imageChange") {
            }
            this.dataService.currentPhoto.subscribe(response => this.profile = response)
            if (this.profile = true) {
                this.imageProfile = localStorage.getItem('imageUrl');
                this.img = environment.profileUrl + "/" + this.imageProfile;
            }
        })
    }
}
