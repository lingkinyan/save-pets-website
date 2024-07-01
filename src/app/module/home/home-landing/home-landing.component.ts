import { Component } from "@angular/core";
import { IntersectionComponents } from "../../../common-components/class/intersection.component";
import { Title } from "@angular/platform-browser";

@Component({
  selector: "app-home-landing",
  standalone: false,
  templateUrl: "./home-landing.component.html",
  styleUrl: "./home-landing.component.less",
})
export class HomeLandingComponent extends IntersectionComponents {
  constructor(private title: Title) {
    super();
    this.title.setTitle("Home | Pets Save");
  }
  
  goalsList = [
    {
      imgSrc: "home-page/circle-1.jpeg",
      content: "Rescue stray and abandoned animals",
    },
    {
      imgSrc: "home-page/circle-3.webp",

      content: "Find a suitable home by issuing adoption notices",
    },
    {
      imgSrc: "home-page/circle-2.webp",

      content: "Promote respect for domestic animals",
    },
    {
      imgSrc: "home-page/circle-4.jpeg",
      content: "Promote respect for domestic animals",
    },
  ];

  proposesList = [
    "Rescue abandoned, sick, and/or injured animals ",
    "Find permanent owners for homeless animals ",
    "Provide safe, reliable, and low-cost medical services for cats and dogs ",
    "Provide low-cost temporary foster care for animals in need ",
    "Provide basic knowledge of animal rescue to the public ",
    "Relocate neglected pets to more responsible and caring homes ",
    "Provide correct guides to raising animals, bring animals back to their home countries, and identify the best veterinary hospitals We have a very strict adoption and foster review process to ensure that all animals go to high-quality foster families ",
    "The team will follow up on the adopted animals on a regular basis and do their best to identify irresponsible behaviours after adoption ",
    "We reserve the right to recall animals",
    "permanently and put irresponsible adopters on the blacklist",
    "Cooperate with related agencies to raise funds for animal rescue",
    "We operate 24/7!",
  ];
}
