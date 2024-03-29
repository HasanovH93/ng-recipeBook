import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userSub: Subscription;
  isAuthenticated: boolean = false;
  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {}
  

  ngOnInit(): void {
   this.userSub = this.authService.user.subscribe(user => {
    this.isAuthenticated = !!user;
   })
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    console.log('On Fetch Data')
    this.dataStorageService.fetchRecipes().subscribe();
  }
  onLogout(){
    this.authService.logout()
  }
}
