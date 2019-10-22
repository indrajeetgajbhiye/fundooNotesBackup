var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
        this.API_URL = environment.baseUrl;
    }
    HttpService.prototype.postRequest = function (url, user) {
        var headers = new HttpHeaders({
            'Accept': 'application/json',
        });
        console.log("service");
        return this.http.post(this.API_URL + url, user, { headers: headers });
    };
    HttpService.prototype.encode = function (data) {
        var formBody = [];
        for (var property in data) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(data[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    HttpService.prototype.postUrlEncoded = function (url, notes) {
        console.log("In service");
        this.httpOptions = {
            headers: new HttpHeaders({
                'content-Type': 'application/x-www-form-urlencoded',
                'Authorization': localStorage.getItem('userToken')
            })
        };
        return this.http.post(this.API_URL + url, this.encode(notes), this.httpOptions);
    };
    HttpService.prototype.httpGetData = function (url) {
        var headers = new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': localStorage.getItem('userToken')
        });
        return this.http.get(this.API_URL + url, { headers: headers });
    };
    HttpService.prototype.encodedPostForm = function (url, data) {
        url = environment.baseUrl + url;
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': localStorage.getItem('userToken')
            })
        };
        return this.http.post(url, this.encode(data), httpOptions);
    };
    HttpService.prototype.encodedPostFormDelete = function (url) {
        url = environment.baseUrl + url;
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': localStorage.getItem('userToken')
            })
        };
        return this.http.delete(url, httpOptions);
    };
    HttpService.prototype.postJSON = function (url, body) {
        url = environment.baseUrl + url;
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem('userToken')
            })
        };
        return this.http.post(url, body, httpOptions);
    };
    HttpService.prototype.postImage = function (url, body) {
        url = environment.baseUrl + url;
        var httpOptions = {
            headers: new HttpHeaders({
                'Authorization': localStorage.getItem('userToken')
            })
        };
        console.log(localStorage.getItem('userToken'), "token");
        return this.http.post(url, body, httpOptions);
    };
    HttpService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], HttpService);
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=http.service.js.map