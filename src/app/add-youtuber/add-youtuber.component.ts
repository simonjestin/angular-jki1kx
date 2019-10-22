import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { YoutubersService } from '../youtubers.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-youtuber',
  templateUrl: './add-youtuber.component.html',
  styleUrls: ['./add-youtuber.component.css']
})
export class AddYoutuberComponent implements OnInit {
  routers;
  checkoutForm;

  constructor(private formBuilder: FormBuilder, private youtubersService: YoutubersService, private router: Router) {
    this.routers = router;
    this.checkoutForm = this.formBuilder.group({
      name: '',
      followers: '',
      description:''
    });
  }

  onSubmit(data) {
    console.warn('Your order has been submitted', data);
    this.youtubersService.SetYoutuber(data);
    this.router.navigate(['/youtubers']);
    this.checkoutForm.reset();
  }

  ngOnInit() {
  }

}