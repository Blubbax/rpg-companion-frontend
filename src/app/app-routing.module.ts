import { SessionsComponent } from './components/sessions/sessions.component';
import { StoryComponent } from './components/story/story.component';
import { FeaturesComponent } from './components/features/features.component';
import { QuestsComponent } from './components/quests/quests.component';
import { MoneyComponent } from './components/money/money.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'features', component: FeaturesComponent },
  { path:'quests', component: QuestsComponent },
  { path:'inventory', component: InventoryComponent },
  { path:'money', component: MoneyComponent },
  { path:'characters', component: MoneyComponent },
  { path:'story', component: StoryComponent },
  { path:'sessions', component: SessionsComponent },
  { path:'', component: InventoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
