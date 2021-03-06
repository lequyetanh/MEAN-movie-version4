import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from "rxjs";
import { BehaviorSubject } from 'rxjs';
import {User} from '../../movieModel/userModel';
import {Category} from '../../movieModel/categoryModel';

@Injectable({
    providedIn: 'root'
})
export class StateService {
    formSearch: Subject<boolean>;
    accountLogined: Subject<boolean>;
    list_star: Subject<Object>;
    // toggleFormIcon: Subject<boolean>;

    private _count = new BehaviorSubject<string>('');
    count = this._count.asObservable(); 

    private _userInformation = new BehaviorSubject<User>(null);
    userInformation = this._userInformation.asObservable(); 

    private _category = new BehaviorSubject<Array<Category>>(null);
    category = this._category.asObservable(); 


    allMovie: Subject<Object>;
    constructor(private _http: HttpClient) {
        this.formSearch = new Subject();
        this.accountLogined = new Subject();
        this.list_star = new Subject();
        this.allMovie = new Subject();
        // this.toggleFormIcon = new Subject();
    }

    updateUserInformation(user){
        this._userInformation.next(user);
        // console.log(this._userInformation)
    }

    updateCategory(category){
        this._category.next(category);
    }

    updateList_star(list_star){
        // console.log(list_star);
        this.list_star = (list_star);
        // console.log(this.list_star);
    }

    uploadImage(vals): Observable<any> {
        let data = vals;

        return this._http.post(
            'https://api.cloudinary.com/v1_1/codexmaker/image/upload',
            data
        );
    }

    checkStatus(){
        // console.log("check status")
        this.accountLogined.next(false);
        // this.toggleFormIcon.next(false)
    }

    updateList_start(index){
        this.formSearch.next(false);
        this.count = index
    }

    changeCount(string){
        const oldCount = this._count.getValue();
        this._count.next(string);
        // console.log(this._count)
    }

    updateAllMovie(movie){
        this.allMovie = movie;
        // console.log(movie)
    }

}

// C??c service c?? th??? coi l?? n??i ch???a c??c h??m chung v?? c??c bi???n chung 
// c???a t???t c??? c??c componnet ~ redux in reactjs
// nh???ng bi???n ki???u subscribe th?? ngay khi thay ?????i th?? ch??? nh???ng component
// n??o ??ang xu???t hi???n th?? n?? m???i g???i ?????n ??c c??n c??c component kh??c th?? kh??ng