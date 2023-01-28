import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { InventoryComponent } from './components/inventory/inventory.component';
import { MoneyComponent } from './components/money/money.component';
import { ItemCategoryComponent } from './components/parts/item-category/item-category.component';
import { ItemComponent } from './components/parts/item/item.component';
import { AddItemComponent } from './components/parts/add-item/add-item.component';
import { AddCategoryComponent } from './components/parts/add-category/add-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeaturesComponent } from './components/features/features.component';
import { QuestsComponent } from './components/quests/quests.component';
import { StoryComponent } from './components/story/story.component';
import { AddFeatureComponent } from './components/parts/add-feature/add-feature.component';
import { FeatureComponent } from './components/parts/feature/feature.component';
import { QuestComponent } from './components/parts/quest/quest.component';
import { AddCityComponent } from './components/parts/add-city/add-city.component';
import { AddCharacterComponent } from './components/parts/add-character/add-character.component';
import { CharacterComponent } from './components/parts/character/character.component';
import { CityComponent } from './components/parts/city/city.component';
import { CharacterDialogComponent } from './components/parts/character-dialog/character-dialog.component';
import { CityDialogComponent } from './components/parts/city-dialog/city-dialog.component';
import { ItemDialogComponent } from './components/parts/item-dialog/item-dialog.component';
import { AddSessionComponent } from './components/parts/add-session/add-session.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureDialogComponent } from './components/parts/feature-dialog/feature-dialog.component';
import { AddQuestComponent } from './components/parts/add-quest/add-quest.component';
import { QuestDialogComponent } from './components/parts/quest-dialog/quest-dialog.component';
import { EditModeControlComponent } from './components/parts/edit-mode-control/edit-mode-control.component';
import { QuestListComponent } from './components/parts/quest-list/quest-list.component';
import { QuestStepDialogComponent } from './components/parts/quest-step-dialog/quest-step-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InventoryComponent,
    MoneyComponent,
    ItemCategoryComponent,
    ItemComponent,
    AddItemComponent,
    AddCategoryComponent,
    FeaturesComponent,
    QuestsComponent,
    StoryComponent,
    AddFeatureComponent,
    FeatureComponent,
    QuestComponent,
    AddCityComponent,
    AddCharacterComponent,
    CharacterComponent,
    CityComponent,
    CharacterDialogComponent,
    CityDialogComponent,
    ItemDialogComponent,
    AddSessionComponent,
    FeatureDialogComponent,
    AddQuestComponent,
    QuestDialogComponent,
    EditModeControlComponent,
    QuestListComponent,
    QuestStepDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatSnackBarModule,
    MatSelectModule,
    MatExpansionModule,
    MatStepperModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMenuModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
