import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from "../../../service/auth.service";
import { DataService } from "../../../service/data.service";
import { MovieService } from "../../../service/movie.service";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { StateService } from '../../../service/state.service';

import { User } from 'src/movieModel/userModel';
import * as userSelector from './../../../state/selectors/user.selectors';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    user: User;
    avatar: string;
    title = 'fileUpload';
    multipleImages = [];
    status: boolean = false;
    inforUser: FormGroup;
    success: boolean;
    messenger: string;

    listFriend = [];
    listGroup = [];
    destroy$: Subject<boolean> = new Subject<boolean>();
    constructor(
        private movieService: MovieService,
        private reduxService: StateService,
        private authService: AuthService,
        private dataService: DataService,
        private router: Router,
        private http: HttpClient,
        public fb: FormBuilder,
        private store: Store,
    ) {
        this.store.select(userSelector.userInfor).pipe(
            takeUntil(this.destroy$)
        ).subscribe(data => {
            this.user = data;
            this.avatar = data.avatar;
            this.mainForm();
        });
    }

    ngOnDestroy() {
        this.destroy$.unsubscribe();
    }

    ngOnInit() {

    }
    files: File[] = [];

    selectImage(event) {
        this.files = [];
        // console.log(event);

        this.files.push(event.target.files[0]);
        // this.avatar = event.target.files[0].name; 
        this.status = true;

        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = (event: any) => {
            this.avatar = event.target.result;
        }
    }

    onSubmit() {
        const file_data = this.files[0];
        const data = new FormData();
        data.append('file', file_data);
        data.append('upload_preset', 'angular_cloudinary');
        data.append('dix5fjiy9', 'codexmaker');

        this.reduxService.uploadImage(data).subscribe((response) => {
            if (response) {
                this.movieService.updateUser(this.user.id, { avatar: response.url })
                    .subscribe(res => {
                        this.authService.changeAvatar(response.url)
                        this.messenger = 'Update avatar th??nh c??ng!';
                        this.success = true;
                        setTimeout(() => {
                            this.success = false;
                        }, 2000);
                        // this.getFavorite();
                    }, (error) => {
                        console.log(error)
                    })
            }
        });

    }

    mainForm() {
        this.inforUser = this.fb.group({
            oldPassword: [''],
            newPassword: [''],
            confirmPassword: [''],
        });
        this.inforUser.setValue({
            oldPassword: this.user.password,
            newPassword: [''],
            confirmPassword: [''],
        });
    }

    // changePassword() {
    //     if (window.confirm('Are you sure?')) {
    //         this.movieService.updateUser(this.user.id, { password: this.inforUser.value.newPassword })
    //             .subscribe(res => {
    //                 this.getFavorite();
    //                 this.messenger = 'Thay ?????i m???t kh???u th??nh c??ng!';
    //                 this.success = true;
    //                 setTimeout(() => {
    //                     this.success = false;
    //                 }, 2000);
    //             }, (error) => {
    //                 console.log(error)
    //             })
    //     }
    // }

}
