import { Component } from '@angular/core';
import { IntersectionComponents } from '../../../common-components/class/intersection.component';

@Component({
  selector: 'app-adopt-landing',
  standalone: false,
  templateUrl: './adopt-landing.component.html',
  styleUrl: './adopt-landing.component.less',
})
export class AdoptLandingComponent extends IntersectionComponents {
  stepList = [
    {
      title: 'Finding your Furry Friend',
      content:
        'Our website and instagram page are constantly being updated with the most recent and past rescues. <br>Head to the “available for adoption” pages to search for your perfect match. <br>Learn more about them and their rescue stories by selecting “read more.”',
    },
    {
      title: 'Filling out an Application',
      content:
        'Once you have selected your preferred animal, fill out an application form, also found at the end of each animal’s description, to state your interest. <br>Due to the volume of applications we get, it may take up to 2 weeks for us to process the applications. <br>Again, you will only hear back from us if you have been selected to move on to step 3: home visit.',
    },
    {
      title: 'Arranging a Home Visit',
      content:
        'SDC will contact you via phone number or email to arrange a home visit if you have been selected to move forward with your application. <br>Under the circumstances, a virtual meet and greet will also be possible if you feel more comfortable with that option.',
    },
    {
      title: 'Meet and Greet',
      content:
        'During this stage, we will chat with you to get to know you a little more and your interest regarding the animal. <br>You may also ask questions and get to know the organization more as well.',
    },
    {
      title: 'Finalizing the Details of the Adoption',
      content:
        'If everything goes well during the meet and greet, we will forward you an adoption agreement form in which you would have to read and fill out.  <br>This includes details about payment and your responsibility and commitment towards the animal you’re adopting. <br> Payments can be e-transferred to the SaveDogCat email. <br>Note that prices may vary between each adoption and will take into account any vaccination and medical records as well as flight fees if your animal is currently being fostered in a different country.',
    },
    {
      title: 'Arrival of your Furry Friend',
      content:
        'If your furry friend is located in a different country and needs to be transported to you via flight, we will give you details about the date and time of arrival as well as the preparations beforehand.',
    },
  ];

  adoptionRequirements = [
    'Have a stable home and income',
    'Do not abandon your pet due to reasons such as pregnancy, relocation, change of city and etc.',
    'Regular feeding of small animals and taking the time to walk the animals if needed',
    'Vaccinating on time, ensuring they’re healthy and sterilizing at the right age (No adopted animals are for breeding)',
    'Signing the adoption agreement and agreeing to visits regularly',
  ];
}
