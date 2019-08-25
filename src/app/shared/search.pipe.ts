import { Pipe, PipeTransform } from "@angular/core";
import { Movie } from './films.service';

@Pipe({
    name: 'searchFilm'
})

export class SearchPipe implements PipeTransform {
    transform(movies: Movie[], search: string = ''): Movie[] {
        return movies.filter(x => x.title.indexOf(search) != -1)
    }
}