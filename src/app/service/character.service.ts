import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { QuestType } from '../model/quest-type';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private url = "http://localhost:8080";

  public selectedCharacter: Observable<Character>;
  private selectedCharacterSubject: BehaviorSubject<any>;

  public favoritesChanged: Observable<string>;
  private favoritesChangedSubject: BehaviorSubject<any>;

  private exampleCharacter: Character = {
    _id: "",
    name: "Warryn",
    features: [
      {
        name: "Healer's feat",
        description: "Add 1d6 + 8 + targets max number of hit dice"
      },
      {
        name: "Other feature",
        description: "Other description"
      },
    ],
    quests: [
      {
        name: "Warryn's curse",
        description: "This is a description",
        steps: [
          {
            name: "Go to magic",
            description: "Reading a book",
            done: true
          },
          {
            name: "Go to hill",
            description: "Finding the enemy",
            done: false
          }
        ],
        type: QuestType.SideQuest
      },
      {
        name: "Cave with enemies",
        description: "This is a description",
        steps: [],
        type: QuestType.MainQuest
      }
    ],
    inventory: {
      categories: [
        {
          name: "Herbs",
          items: [
            {
              name: "Gartenkräuter",
              quantity: 3
            },
            {
              name: "Drogen",
              quantity: 0.5
            }
          ]
        },
        {
          name: "Items",
          items: [
            {
              name: "Staff of the Python",
              quantity: 1
            }
          ]
        }
      ],
      money: {
        gold: 500,
        silver: 0,
        copper: 0
      }
    },
    story: {
      name: "Sota Island",
      players: [
        {
          name: "Elagar",
          description: "e"
        },
        {
          name: "Aldred",
          description: "a"
        },
        {
          name: "Flyx",
          description: "f"
        },
        {
          name: "Warryn",
          description: "w"
        },
        {
          name: "Miranda",
          description: "m"
        }],
      npcs: [
        {
          name: "BMS",
          description: "The bm of Sota"
        }
      ],
      cities: [
        {
          name: "Sota",
          description: "The city with BMS"
        }
      ],
      sessions: [
        {
          date: new Date("2023-01-22"),
          steps: [
            {
              name: "Kampf bei der Zitadelle",
              place: "Zitadelle",
              description: "Aldred und Elagar bekommen eine aufm Deckel."
            },
            {
              name: "Enthüllungen von Miranda",
              place: "Zimmer in Zitadelle",
              description: "PLan, den Westen auszuspionieren"
            }
          ],
          summary: "This is the summary"
        }
      ]
    }
  }

  private newCharacter: Character = {
    name: "",
    features: [],
    quests: [],
    inventory: {
      categories: [],
      money: {
        gold: 0,
        silver: 0,
        copper: 0
      }
    },
    story: {
      name: "",
      players: [],
      npcs: [],
      cities: [],
      sessions: []
    }
  };

  private allCharactersData: Character[] = [];
  private selectedCharacterData: Character|undefined;

  constructor(private httpClient: HttpClient) {
    this.selectedCharacterSubject = new BehaviorSubject<Character>(this.newCharacter);
    this.selectedCharacter = this.selectedCharacterSubject.asObservable();

    this.favoritesChangedSubject = new BehaviorSubject<string>("");
    this.favoritesChanged = this.favoritesChangedSubject.asObservable();

    this.loadCharacters().subscribe(result => {
      console.log(result);
      this.allCharactersData = result;
      if (this.allCharactersData.length > 0) {
        this.selectedCharacterData = this.allCharactersData[0];
      } else {
        this.selectedCharacterData = undefined;
      }
      this.selectedCharacterSubject.next(this.selectedCharacterData);
      this.favoritesChangedSubject.next("");
    })

  }

  characterChanged() {
    if (this.selectedCharacterData != undefined) {
      this.saveCharacter(this.selectedCharacterData).subscribe();
    }
  }

  changeFavorites() {
    this.favoritesChangedSubject.next("");
  }

  createNewCharacter(name: string): Observable<Character> {
    this.newCharacter.name = name;
    return this.httpClient.post<Character>(this.url + "/characters", this.newCharacter, this.httpOptions);
  }

  loadCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.url + "/characters");
  }

  saveCharacter(character: Character): Observable<Character> {
    if (character._id != undefined) {
      // Update character
      return this.httpClient.put<Character>(this.url + "/characters/" + character._id, character, this.httpOptions);
    } else {
      // Create new character
      return this.httpClient.post<Character>(this.url + "/characters", character, this.httpOptions);
    }
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
