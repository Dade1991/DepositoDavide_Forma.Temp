import { Component, computed, inject, input } from '@angular/core';
import { UserProfileService } from '../../../core/services/user-profile-service';

@Component({
  selector: 'app-user-profile-component',
  imports: [],
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.css',
})
export class UserProfileComponent {
  id = input.required<string>();

  private userProfileService: UserProfileService = inject(UserProfileService);

  user = computed(() => this.userProfileService.getUser(this.id()));
}
