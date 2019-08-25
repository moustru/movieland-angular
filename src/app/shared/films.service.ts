import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

export interface Movie {
    id: number,
    title: string,
    poster_path: string,
    vote_average: number,
    popularity: number,
    video: string
}

const MAIN_URL: string = 'https://api.themoviedb.org/3/discover/movie?page=1';
const API_KEY: string = '3937655aadcaf3ea0b16fb7a63681435';

@Injectable({ providedIn: 'root' })
export class MovieList {
    private movies: Movie[] = []
    private video: string = ''

    constructor(private http: HttpClient) {}

    getFilms() {
        return this.http.get(`${ MAIN_URL }&sort_by=popularity.desc&api_key=${ API_KEY }&language=ru-RU&region=RU`)
                        .subscribe((res: any) => { this.movies = res.results})
    }

    getVideo(param: string) {
        return this.http.get(`https://api.themoviedb.org/3/movie/${ param }/videos?api_key=${ API_KEY }&language=ru-RU&region=RU`)
                        .subscribe((res: any) => {
                            this.video = res.results[0].id
                        })
    }

    getVideoData() {
        return this.video;
    }

    async relateMovie(id: number) {
        let relatedMovie = await this.movies.find((i => i.id === id))
        return relatedMovie
    }
}