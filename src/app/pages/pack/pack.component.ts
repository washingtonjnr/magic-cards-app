import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
// Components
import { ButtonComponent } from '../../components/button/button.component';
import { LoadingComponent } from '../../components/loading/loading.component';
import { PageLayoutComponent } from '../../components/page-layout/page-layout.component';
// Packages
import { ToastrService } from 'ngx-toastr';
// Services
import { MagicService } from '../../services/magic/magic.service';
// Types
import { CardResponse } from '../../types/card-response.type';

@Component({
  selector: 'app-pack',
  standalone: true,
  imports: [
    CommonModule,
    // Components
    ButtonComponent,
    LoadingComponent,
    PageLayoutComponent,
  ],
  templateUrl: './pack.component.html',
  styleUrl: './pack.component.scss'
})
export class PackComponent {
  public id: string | undefined;
  //
  public cards:CardResponse[] = [];
  // Page state
  public isLoading: boolean = false;
  private imagePaths = {
    'B': '../../../assets/images/card-types/B.png',
    'G': '../../../assets/images/card-types/G.png',
    'R': '../../../assets/images/card-types/R.png',
    'U': '../../../assets/images/card-types/U.png',
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private magicService: MagicService,
    private toastService: ToastrService
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];

      if(this.id) this.findCards(this.id)
    });
  }

  private async findCards(id: string) {
    this.isLoading = true;

    this.magicService.findAllCards(id, []).subscribe({
      error: () => {
        this.toastService.error('Error when listing packs!');

        this.isLoading = false;
      },
      next: (cards) => {
        this.cards = cards;

        this.isLoading = false;
      },
    });
  }

  // Utils
  public goToSearch() {
    this.router.navigate(['/']);
  }

  public getImagePath(cardType: string): string {
    return this.imagePaths[cardType as keyof typeof this.imagePaths];
  }
}
