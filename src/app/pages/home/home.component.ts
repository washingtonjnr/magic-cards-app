import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// Components
import { InputComponent } from '../../components/input/input.component';
import { SelectComponent } from '../../components/select/select.component';
import { ButtonComponent } from '../../components/button/button.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';
// Packages
import { ToastrService } from 'ngx-toastr';
// Services
import { MagicService } from '../../services/magic/magic.service';
// Types
import { PackResponse } from '../../types/pack-response.type';
import { SelectOption } from '../../types/select-option.types';
import { CommonModule } from '@angular/common';

type SearchForm = {
  name: FormControl,
  type: FormControl
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    // Components
    InputComponent,
    ButtonComponent,
    SelectComponent,
    LoadingComponent,
    PageLayoutComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public packs:PackResponse[] = [];
  // Filters
  public page: number = 1;
  public types: SelectOption[] = [
    { label: 'Amonkhet', value: 'amonkhet' },
    { label: 'Ixalan', value: 'ixalan' },
    { label: 'Zendikar', value: 'zendikar' },
    { label: 'Ravnica', value: 'ravnica' },
    { label: 'Onslaught', value: 'onslaught' },
  ];
  // Page state
  public isLoading: boolean = false;
  public isLoadingTypes: boolean = false;
  //
  public searchForm!: FormGroup<SearchForm>;

  constructor(
    private router: Router,
    private magicService: MagicService,
    private toastService: ToastrService
  ) {
    this.searchForm = new FormGroup({
      name: new FormControl(null, [Validators.minLength(3)]),
      type: new FormControl('onslaught', [Validators.required])
    });
  }

  ngOnInit() {
    this.findPacks();

    // this.findAllTypes();
  }

  // private async findAllTypes() {
  //   this.isLoadingTypes = true;

  //   this.magicService.findAllTypes().subscribe({
  //     error: () => this.toastService.error('Error when listing types!'),
  //     complete: () => this.isLoadingTypes = false,
  //     next: ({ types }) => {
  //       this.types = types.map(type => ({ value: type, label: type }));
  //     },
  //   });
  // }

  private async findPacks() {
    this.isLoading = true;

    this.magicService.findAll({
      page: this.page,
      text: this.searchForm.value.name,
      type: this.searchForm.value.type,
    }).subscribe({
      error: () => this.toastService.error('Error when listing packs!'),
      next: ({ sets }) => {
        this.packs = sets;

        this.isLoading = false;
      },
    });
  }

  public async submitForm() {
    this.isLoading = true;

    if(this.searchForm.valid) {
      this.findPacks();
    } else {
      this.isLoading = false;

      this.toastService.error('Type is required');
    }
  }

  public openPack(id: string){
    console.log(id);
    this.router.navigate([`/pack/${id}`]);
  }
}
