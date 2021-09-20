import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { QuestionnaireService } from '../../services/questionnaire.service';

@Component({
  selector: 'giftify-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent implements OnInit {
  activeGender = true;
  activeAge = false;
  activeHobby = false;
  hobbyList: string[] = [];
  // interests = [
  //   '3D printing',
  //   'Amateur radio',
  //   'Scrapbook',
  //   'Amateur radio',
  //   'Acting',
  //   'Baton twirling',
  //   'Board games',
  //   'Book restoration',
  //   'Cabaret',
  //   'Calligraphy',
  //   'Candle making',
  //   'Computer programming',
  //   'Coffee roasting',
  //   'Cooking',
  //   'Colouring',
  //   'Cosplaying',
  //   'Couponing',
  //   'Creative writing',
  //   'Crocheting',
  //   'Cryptography',
  //   'Dance',
  //   'Digital arts',
  //   'Drama',
  //   'Drawing',
  //   'Do it yourself',
  //   'Electronics',
  //   'Embroidery',
  //   'Fashion',
  //   'Flower arranging',
  //   'Foreign language learning',
  //   'Gaming',
  //   'Tabletop games',
  //   'Role-playing games',
  //   'Gambling',
  //   'Genealogy',
  //   'Glassblowing',
  //   'Gunsmithing',
  //   'Homebrewing',
  //   'Ice skating',
  //   'Jewelry making',
  //   'Jigsaw puzzles',
  //   'Juggling',
  //   'Knapping',
  //   'Knitting',
  //   'Kabaddi',
  //   'Knife making',
  //   'Lacemaking',
  //   'Lapidary',
  //   'Leather crafting',
  //   'Lego building',
  //   'Lockpicking',
  //   'Machining',
  //   'Macrame',
  //   'Metalworking',
  //   'Magic',
  //   'Model building',
  //   'Listening to music',
  //   'Origami',
  //   'Painting',
  //   'Playing musical instruments',
  //   'Pet',
  //   'Poi',
  //   'Pottery',
  //   'Puzzles',
  //   'Quilting',
  //   'Reading',
  //   'Scrapbooking',
  //   'Sculpting',
  //   'Sewing',
  //   'Singing',
  //   'Sketching',
  //   'Soapmaking',
  //   'Sports',
  //   'Stand-up comedy',
  //   'Sudoku',
  //   'Table tennis',
  //   'Taxidermy',
  //   'Video gaming',
  //   'Watching movies',
  //   'Web surfing',
  //   'Whittling',
  //   'Wood carving',
  //   'Woodworking',
  //   'World Building',
  //   'Writing',
  //   'Yoga',
  //   'Yo-yoing',
  //   'Air sports',
  //   'Archery',
  //   'Astronomy',
  //   'Backpacking',
  //   'Base jumping',
  //   'Baseball',
  //   'Basketball',
  //   'Beekeeping',
  //   'Bird watching',
  //   'Blacksmithing',
  //   'Board sports',
  //   'Bodybuilding',
  //   'Brazilian jiu-jitsu',
  //   'Community',
  //   'Cycling',
  //   'Dowsing',
  //   'Driving',
  //   'Fishing',
  //   'Flag football',
  //   'Flying',
  //   'Flying disc',
  //   'Foraging',
  //   'Gardening',
  //   'Geocaching',
  //   'Ghost hunting',
  //   'Graffiti',
  //   'Handball',
  //   'Hiking',
  //   'Hooping',
  //   'Horseback riding',
  //   'Hunting',
  //   'Inline skating',
  //   'Jogging',
  //   'Kayaking',
  //   'Kite flying',
  //   'Kitesurfing',
  //   'Larping',
  //   'Letterboxing',
  //   'Metal detecting',
  //   'Motor sports',
  //   'Mountain biking',
  //   'Mountaineering',
  //   'Mushroom hunting',
  //   'Mycology',
  //   'Netball',
  //   'Nordic skating',
  //   'Orienteering',
  //   'Paintball',
  //   'Parkour',
  //   'Photography',
  //   'Polo',
  //   'Rafting',
  //   'Rappelling',
  //   'Rock climbing',
  //   'Roller skating',
  //   'Rugby',
  //   'Running',
  //   'Sailing',
  //   'Sand art',
  //   'Scouting',
  //   'Scuba diving',
  //   'Sculling',
  //   'Rowing',
  //   'Shooting',
  //   'Shopping',
  //   'Skateboarding',
  //   'Skiing',
  //   'Skim Boarding',
  //   'Skydiving',
  //   'Slacklining',
  //   'Snowboarding',
  //   'Stone skipping',
  //   'Surfing',
  //   'Swimming',
  //   'Taekwondo',
  //   'Tai chi',
  //   'Urban exploration',
  //   'Vacation',
  //   'Vehicle restoration',
  //   'Water sports',
  // ];
  stateForm!: FormGroup;

  constructor(public questionnaireService: QuestionnaireService) {}

  ngOnInit() {
    this.stateForm = new FormGroup({
      search: new FormControl(null),
    });
  }

  onChoice(choice: string) {
    this.questionnaireService.onChooseGender(choice);
    this.activeGender = false;
    this.activeAge = true;
  }

  onAge(age: HTMLInputElement) {
    this.questionnaireService.onChooseAge(parseInt(age.value));
    this.activeAge = false;
    this.activeHobby = true;
  }

  getSearchValue() {
    return this.stateForm.value.search;
  }

  onToggleHobby(hobby: string) {
    this.questionnaireService.onToggleHobby(hobby);
    if (this.hobbyList.includes(hobby) === false) {
      this.hobbyList.push(hobby);
    } else if (this.hobbyList.includes(hobby)) {
      const i = this.hobbyList.indexOf(hobby);
      this.hobbyList.splice(i, 1);
    }
  }

  onSubmit() {
    console.log(this.stateForm);
  }
}
