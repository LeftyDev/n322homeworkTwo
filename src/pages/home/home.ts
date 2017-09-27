import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    posts = [
        {
            imagePath: "coolPlants.jpg",
            title: "Look at these cool plants",
            description: "Here is a picture of some cool plants growing!",
            favorite: false,
            share: false
        },
        {
            imagePath: "woman.png",
            title: "New Eco-friendly Startup",
            description: "There is a new eco-friendly startup company and this woman is somehow relevant to that.",
            favorite: false,
            share: false
        },
        {
            imagePath: "dirt.jpg",
            title: "Getting to work",
            description: "Getting to work sounds like a nice name for this picture.",
            favorite: false,
            share: false
        },
        {
            imagePath: "dude.png",
            title: "Hipster Environment",
            description: "The dev community is pretty split if you actually look at it.",
            favorite: false,
            share: false
        },
        {
            imagePath: "dudeAgain.png",
            title: "Sk8 Environment?",
            description: "This guy looks like he belongs but he also doesn't.",
            favorite: false,
            share: false
        },
        {
            imagePath: "forest.jpg",
            title: "Gorgeous Scenery",
            description: "Man I wish I was really here right now.",
            favorite: false,
            share: false
        },
        {
            imagePath: "forest2.jpg",
            title: "Another cool place",
            description: "I can't wait until I can go to place like this.",
            favorite: false,
            share: false
        },
        {
            imagePath: "forest3.jpg",
            title: "Does this even exist?",
            description: "Seriously, do these places even exist? Like can I find them in the real world?",
            favorite: false,
            share: false
        },
        {
            imagePath: "gardening.jpg",
            title: "Doing some gardening stuff",
            description: "Hell yeah we're doing some gardening stuff!",
            favorite: false,
            share: false
        },
        {
            imagePath: "benchBackground.jpg",
            title: "Last one",
            description: "I put this last because it was the ugliest picture.",
            favorite: false,
            share: false
        },
    ];

    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

    clickFav(post) {
        // post.favorite = !post.favorite;
        // or...
        let index = this.posts.indexOf(post);

        if (index > -1) {
            if (post.favorite) {
                this.posts[index].favorite = false;
            } else {
                this.posts[index].favorite = true;
            }
        }
    }

    clickShare(post) {
        // post.share = !post.share;
        // or...
        let index = this.posts.indexOf(post);

        if (index > -1) {
            if (post.share) {
                this.posts[index].share = false;
            } else {
                this.posts[index].share = true;
            }
        }
    }

    clickDelete(post) {
        let deletePrompt = this.alertCtrl.create({
            title: 'Are you sure you want to delete "' + post.title + '" now?',
            buttons: [
                {text: 'Cancel'},
                {
                    text: 'Yes',
                    handler: data => {
                        let index = this.posts.indexOf(post);
                        this.posts.splice(index, 1);
                    }
                }
            ]
        });

        deletePrompt.present();
    }

}
