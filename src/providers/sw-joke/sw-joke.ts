import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import * as _ from 'lodash';

/*
  Generated class for the SwJokeProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SwJokeProvider {

  public jokes: Array<{
    title: string, 
    joke: string,
    references: Array<{ category: string, url: string }>
  }>

  getJoke() {
    let rndJoke = _.sample(this.jokes);    
    return rndJoke;

  }

  constructor(public http: Http) {

    /*
      {
        title: '',
        joke: '',
        references: [
          {
            category: '',
            url: '/?search='
          }
        ]
      }
    */
    this.jokes = [
      {
        title: '',
        joke: 'Q: Which program do Jedi use to open PDF files?<br>A: Adobe Wan Kenobi',
        references: [
          {
            category: 'people',
            url: '/?search=obi-wan'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Which website did Chewbacca get arrested for creating?<br>A: Wookieleaks',
        references: [
          {
            category: 'people',
            url: '/?search=chewbacca'
          },
          {
            category: 'species',
            url: '/?search=wookie'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Why did Anakin Skywalker cross the road?<br>A: To get to the Dark Side.',
        references: [
          {
            category: 'people',
            url: '/?search=anakin'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Why is Yoda such a good gardener?<br>A: Because he has a green thumb.',
        references: [
          {
            category: 'people',
            url: '/?search=yoda'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Why can’t you count on Yoda to pick up the tab?<br>A: Because he’s always a little short.',
        references: [
          {
            category: 'people',
            url: '/?search=yoda'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: How do you get down from a bantha?<br>A: You don’t. You get down from a goose.',
        references: []
      },
      {
        title: '',
        joke: 'Q: What did the specter of Obi Wan Kenobi say to the bartender?<br>A: “Give me a beer and a mop.”',
        references: [
          {
            category: 'people',
            url: '/?search=obi-wan'
          }
        ]
      },
      {
        title: '',
        joke: 'Jabba the Hut is so fat, Obi Wan took a closer look and said, “that’s no moon.”',
        references: [
          {
            category: 'people',
            url: '/?search=jabba'
          }, 
          {
            category: 'people',
            url: '/?search=obi-wan'
          },
          {
            category: 'species',
            url: '/?search=hutt'
          }
        ]
      },
      {
        title: '',
        joke: 'The Star Wars text crawl walks into a bar. “Get outta my pub!” the bartender yells. “We don’t serve your type here.”',
        references: [
          {
            category: 'films',
            url: '/'
          }
        ]
      },
      {
        title: '',
        joke: 'Luke walks into the Mos Eisley cantina, cradling a slab of dirt in his arms. “What’ll it be?” asks the barman. “A pint for me, and one for the road.”',
        references: [
          {
            category: 'people',
            url: '/?search=luke'
          }
        ]
      },
      {
        title: '',
        joke: 'The Death Star’s shield generator walks into a bar. The bartender scowls and says, “Alright pal, I’ll serve you, but don’t start anything.”',
        references: [
          {
            category: 'starships',
            url: '/?search=death'
          }
        ]
      },
      {
        title: '',
        joke: 'An Ewok strolls into a bar and says to the bartender, “I’ll have a whisky and …… soda.”<br>The bartender says, “Sure thing—but why the little pause?”<br>“Dunno,” says the Ewok. “I’ve had them all my life.”',
        references: [
          {
            category: 'species',
            url: '/?search=ewok'
          }
        ]
      },
      {
        title: '',
        joke: 'A clone trooper walks into a pub and asks the barman, “Hey, have you seen my brother?”<br>“I dunno,” says the barman, “What does he look like?”',
        references: []
      },
      {
        title: '',
        joke: 'Two Jawas walk under a bar.',
        references: []
      },
      {
        title: '',
        joke: 'Luke and Obi-Wan walk into a Chinese restaurant. Ten minutes into the meal, Luke’s still having trouble with the chopsticks, dropping food everywhere. Obi-Wan finally snaps, “Use the forks, Luke.”',
        references: [
          {
            category: 'people',
            url: '/?search=luke'
          },
          {
            category: 'people',
            url: '/?search=obi-wan'
          }
        ]
      },
      {
        title: '',
        joke: 'A Hutt slithers into the food court. The cashier says, “Hey! We have a pizza place named after you!”<br>The Hutt says, “You have a pizza place named Jabba Desilijic Tiure?”',
        references: [
          {
            category: 'species',
            url: '/?search=hutt'
          },
          {
            category: 'people',
            url: '/?search=jabba'
          }
        ]
      },
      {
        title: '',
        joke: 'Luke… I’m reading a great book about Force levitation… I can’t put it down.',
        references: [
          {
            category: 'people',
            url: '/?search=luke'
          }
        ]
      },
      {
        title: '',
        joke: 'Luke…did you know R2D2 used to work for me? …He asked to be paid under the table.',
        references: [
          {
            category: 'people',
            url: '/?search=luke'
          },
          {
            category: 'people',
            url: '/?search=r2'
          }
        ]
      },
      {
        title: '',
        joke: 'Luke… I just watched a great documentary about how the Death Star was built… It was riveting, Luke. It was riveting…',
        references: [
          {
            category: 'people',
            url: '/?search=luke'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: What do you call stormtroopers playing Monopoly?<br>A: Game of Clones',
        references: []
      },
      {
        title: '',
        joke: 'Q: Why did the angry Jedi cross the road?<br>A: To get to the Dark Side.',
        references: []
      },
      {
        title: '',
        joke: 'Q: What did Emperor Palpatine say to Darth Vader?<br>A: Merry Sithmas. ',
        references: [
          {
            category: 'people',
            url: '/?search=palpatine'
          },
          {
            category: 'people',
            url: '/?search=vader'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: When did Anakin\'s Jedi masters know he was leaning towards the dark side?<br>A: In the Sith Grade. ',
        references: [
          {
            category: 'people',
            url: '/?search=anakin'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Why do Doctors make the best Jedi?<br>A: Because a Jedi must have patience. ',
        references: []
      },
      {
        title: '',
        joke: 'Roses are red, violets are blue, if you love Star Wars, may the force be with you. ',
        references: []
      },
      {
        title: '',
        joke: 'The best part of any person is always their Dark Side. ',
        references: []
      },
      {
        title: '',
        joke: 'Q: How is Ducktape like the Force?<br>A: It has a Dark Side, a Light side and it binds the galaxy together. ',
        references: []
      },
      {
        title: '',
        joke: 'Q: What do you call a potato that has turned to the Dark side?<br>A: Vader Tots ',
        references: [
          {
            category: 'people',
            url: '/?search=vader'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: What do you call a Sith who won\'t fight?<br>A: A Sithy.',
        references: []
      },
      {
        title: '',
        joke: 'Q: Why is a Jedi knight never lonely?<br>A: Because the force is always with him.',
        references: []
      },
      {
        title: '',
        joke: 'Q: Where does Princess Leia go shopping for clothing and such?<br>A: At the Darth Maul, of course.',
        references: [
          {
            category: 'people',
            url: '/?search=leia'
          },
          {
            category: 'people',
            url: '/?search=maul'
          }
         ]
      },
      {
        title: '',
        joke: 'Q: How do Ewoks communicate over long distances?<br>A: With Ewokie Talkies',
        references: [
          {
            category: 'species',
            url: '/?search=ewok'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: What do you call 5 siths piled on top of a lightsaber? <br>A: A Sith-Kabob!',
        references: []
      },
      {
        title: '',
        joke: 'Q: What do you call a Jedi in denial?<br>A: Obi-Wan Cannot Be',
        references: [
          {
            category: 'people',
            url: '/?search=obi-wan'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: What do they serve at a Rebel Alliance cantina?<br>A: Jyn and Juice.',
        references: []
      },
      {
        title: '',
        joke: 'Q: What do you call a nervous Jedi?<br>A: Panicking Skywalker.',
        references: [
          {
            category: 'people',
            url: '/?search=skywalker'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: What do you call a nervous Jedi? <br>A: Panicking Skywalker.',
        references: [
          {
            category: 'people',
            url: '/?search=skywalker'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: What do you call Chewbacca when he has chocolate stuck in his hair? <br>A: Chocolate Chip Wookiee.',
        references: [
          {
            category: 'people',
            url: '/?search=chewbacca'
          },
          {
            category: 'species',
            url: '/?search=wookie'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Which Star Wars character uses meat for a weapon instead of a Lightsaber? <br>A: Obi Wan Baloney.',
        references: [
          {
            category: 'people',
            url: '/?search=obi-wan'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Why is a droid mechanic never lonely? <br>A: Because he\'s always making new friends!',
        references: []
      },
      {
        title: '',
        joke: 'Q: What did the rancor say after he ate a Wookiee? <br>A: Chewie!',
        references: [
          {
            category: 'species',
            url: '/?search=wookie'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: What do you call the website that divulges the secrets of the Galactic Empire? <br>A: Wookieeleaks',
        references: [
          {
            category: 'species',
            url: '/?search=wookie'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Why do Stormtroopers listen to Megan Trainor? <br>A: Because "They\'re all about that base, \'bout that base, no rebels."',
        references: []
      },
      {
        title: '',
        joke: 'Q: Do you know when a woman becomes a jedi? <br>A: When she\'s good and Reydy.',
        references: [
          {
            category: 'people',
            url: '/?search=rey'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: What do you call Harrison Ford when he smokes weed? <br>A: Han So-high',
        references: [
          {
            category: 'people',
            url: '/?search=han'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: What do you call a Mexican jedi? <br>A: Obi-Juan Kenobi',
        references: [
          {
            category: 'people',
            url: '/?search=obi-wan'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: What do you call Mexican Jedi apprentice? <br>A: PadaJuan.',
        references: []
      },
      {
        title: '',
        joke: 'Q: What do Gungans put things in? <br>A: Jar Jars.',
        references: [
          {
            category: 'people',
            url: '/?search=jar'
          },
          {
            category: 'people',
            url: '/?search=gungan'
          }, 
        ]
      },
      {
        title: '',
        joke: 'Q: What do you call a Sith rock star? <br>A: Darth Vedder.',
        references: [
          {
            category: 'people',
            url: '/?search=vader'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Why did Yoda visit Bank of America yesterday? <br>A: He needed a bank clone! (Loan)',
        references: [
          {
            category: 'people',
            url: '/?search=yoda'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Why does Princess Leia keep her hair tied up in buns? <br>A: So it doesn\'t Hang Solow!',
        references: [
          {
            category: 'people',
            url: '/?search=leia'
          },
          {
            category: 'people',
            url: '/?search=han'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: Why didn\'t Luke Skywalker cross the road? <br>A: Because he got a ticket for Skywalking.',
        references: [
          {
            category: 'people',
            url: '/?search=luke'
          }
        ]
      },
      {
        title: '',
        joke: 'Q: How many Alderaanians does it take to change a light bulb? <br>A: None,they were all destroyed by the death star.',
        references: [
          {
            category: 'planets',
            url: '/?search=alderaan'
          }, 
          {
            category: 'starships',
            url: '/?search=death'
          }, 
        ]
      }

    ];
  }



}
