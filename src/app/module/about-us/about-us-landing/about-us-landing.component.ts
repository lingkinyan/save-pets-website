import { Component } from "@angular/core";
import { IntersectionComponents } from "../../../common-components/class/intersection.component";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-about-us-landing",
  standalone: false,
  templateUrl: "./about-us-landing.component.html",
  styleUrl: "./about-us-landing.component.less",
})
export class AboutUsLandingComponent extends IntersectionComponents {
  constructor(private title: Title) {
    super();
    this.title.setTitle("About Us | Pet Save");
  }
  memberList = [
    {
      imgSrc: "about-us/wendymin.jpeg",
      name: "Wendy Min",
      position: "Co-Funder",
      des: "I cannot help myself not saving abandoned and stray dogs and cats!",
    },
    {
      imgSrc: "about-us/aprilmiao.jpeg",
      name: "April Miao",
      position: "Co-Funder",
      des: "Every pup deserves a loving home. I am passionate about helping animals and giving dogs and cats a second chance.",
    },
    {
      imgSrc: "about-us/jingjingchen.jpeg",
      name: "Jingjing Chen",
      position: "Co-funder",
      des: "We are not rescuing stray animals but rescuing the kindness and love of human beings.",
    },
    {
      imgSrc: "about-us/joyfung.jpeg",
      name: "Joy Fung",
      position: "Review and Rehoming Director",
      des: "Let us rewrite their life.",
    },

    {
      imgSrc: "about-us/hallietsang.jpeg",
      name: "Hallie Tsang",
      position: "Marketing Director",
      des: "Together, We make tails wag. Rescuing Pets, Changing Lives.",
    },

    {
      imgSrc: "about-us/boboliu.jpeg",
      name: "Bobo Liu",
      position: "Relationships Manager",
      des: "Our unwavering passion to rescue and care for pets drives us to save as many animals as we can.",
    },

    {
      imgSrc: "about-us/raymondpoon.jpeg",
      name: "Raymond Poon",
      position: "Digital Project Manager",
      des: "Our deep passion for rescuing pets fuels our mission to provide them with the care and love they deserve.",
    },
    {
      imgSrc: "about-us/osbornluk.jpeg",
      name: "Osborn Luk",
      position: "Event Planner and Marketer",
      des: "To organise a spectacular event that will make tails wag across Canada and beyond.",
    },
    {
      imgSrc: "about-us/yankiling.jpg",
      name: "Yanki Ling",
      position: "Frontend Lead",
      des: "Be the voice for the voiceless",
    },
    {
      imgSrc: "about-us/jackkwok.jpeg",
      name: "Jack Kwok",
      position: "Backend Lead",
      des: "It is not we who rescue animals, but they who rescue us.",
    },
  ];
}
