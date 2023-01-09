import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { debounce, interval } from 'rxjs';
import { SearchService } from 'src/services/data/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  formGroup!: FormGroup;
  options: string[] = [];
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private searchService: SearchService
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formGroup = this.fb.group({
      search: [''],
    });

    this.formGroup
      .get('search')
      ?.valueChanges.pipe(debounce(() => interval(300)))
      .subscribe((value) => this.search(value));
  }

  async search(value: string) {
    if (value) {
      this.isLoading = true;
      const response = await this.searchService.get(value);
      this.options = response.quotes?.map(({ symbol }) => symbol);
      this.isLoading = false;
    }
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.router.navigateByUrl(`/chart/${event.option.value}`);
  }
}
