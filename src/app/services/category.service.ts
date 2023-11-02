import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class categoryService {

    constructor(private http: HttpClient) { }

    getAllCategories()
    {
        return this.http.get<Category[]>(environment.baseApiUrl + '/category/get');
    }
}
