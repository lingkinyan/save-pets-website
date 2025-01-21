import { Component } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute, Router } from "@angular/router";
import { GetAge } from "../../../../common-components/class/get-age.components";
import {
  PetInfo,
  PetSex,
} from "../../../../common-components/class/pet-info.component";
import { GetPetsService } from "../../../../common-components/services/get-pet.service";
import { NzUploadFile } from "ng-zorro-antd/upload";
import { HttpClient } from "@angular/common/http";
import { Observable, Observer } from "rxjs";

@Component({
  selector: "app-pet-info",
  standalone: false,
  templateUrl: "./pet-info.component.html",
  styleUrl: "./pet-info.component.less",
})
export class PetInfoComponent {
  PetSex: any;
  constructor(
    private router: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private getPetsService: GetPetsService,
    private http: HttpClient
  ) {}

  petInfo: PetInfo;

  petId: string;

  petAge = "";

  isLoaded: boolean = false;

  isAdmin: boolean = false;

  defaultFileList: NzUploadFile[] = [];

  fileList = [...this.defaultFileList];

  uploadLink = "";

  showPopUpModal: boolean = false;

  isUnauthorized: boolean = false;

  isAdded: boolean = false;

  deleteBox: boolean = false;

  successMsg: boolean = false;

  uploadedFile: any[];

  ngOnInit(): void {
    this.petId = this.activatedRoute.snapshot.paramMap.get("id") ?? "";

    if (this.petId) {
      this.getPetsService.getPetInfoById(+this.petId).subscribe((info) => {
        this.petInfo = info;

        this.isLoaded = true;

        this.petAge = GetAge.getAge(this.petInfo.dateOfBirth);

        this.uploadLink =
          "https://api.petsaveorg.com/api/v1/pets/" + this.petId + "/images";

        this.petInfo.images = info.images.map((v) => {
          return v.imageUrl;
        });

        this.titleService.setTitle(this.petInfo.name + " | Pet Save");
      });

      this.isAdmin = localStorage.getItem("token") ? true : false;

      this.isLoaded = true;
    }
  }

  getPetGender(gender: number): PetSex {
    return gender === 1 ? PetSex.M : PetSex.F;
  }

  beforeUpload = (
    file: NzUploadFile | any,
    _fileList: NzUploadFile[]
  ): Observable<boolean> =>
    new Observable((observer: Observer<boolean>) => {
      console.log("before upload");

      let formData = new FormData();
      formData.append("images", file);

      this.http.post(this.uploadLink, formData).subscribe((response) => {
        this.showPopUpModal = true;
        this.isAdded = true;
      });

      setTimeout(() => {
        this.showPopUpModal = false;
        this.isAdded = false;

        this.ngOnInit();
      }, 3000);

      // this.uploadedFile = [...this.uploadedFile, _fileList];
    });

  handleChange($event: any): void {
    console.log($event);
    let formData = new FormData();
    formData.append("images", $event.file);

    console.log("handle?");
    // formData.append("images", this.fileList);
    // this.http.post(this.uploadLink, formData).subscribe((response) => {
    //   console.log("response", response);
    // });
  }

  routeToPage(page: string): void {
    if (page === "pets") {
      this.router.navigate(["/adopt/available-pets"]);
    }

    if (page === "application-form") {
      this.router.navigate(["/adopt/application-form"]);
    }

    if (page === "donate") {
      // TODO
    }

    if (page === "login") {
      this.router.navigate([`/admin/login`]);
    }

    if (page === "editPet") {
      this.router.navigate(["/admin/edit-pet/" + this.petId]);
    }
  }

  deleteBtnClicked(): void {
    this.showPopUpModal = true;
    this.deleteBox = true;
  }

  closeDeleteBox(choice: boolean): void {
    if (choice) {
      this.http
        .delete("https://api.petsaveorg.com/api/v1/pets/" + this.petId)
        .subscribe((response) => {
          this.showPopUpModal = true;
          this.deleteBox = false;
          this.successMsg = true;

          setTimeout(() => {
            this.showPopUpModal = false;
            this.isAdded = false;

            this.routeToPage("pets");
          }, 3000);
        });
    } else {
      this.showPopUpModal = false;
      this.deleteBox = false;
    }
  }
}
