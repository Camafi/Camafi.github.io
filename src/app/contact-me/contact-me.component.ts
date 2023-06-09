import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {
  
  public readonly messageForm: FormGroup;
  public isLoadingSubmit = false;
  constructor(
    formBuilder: FormBuilder,
    private readonly message: NzMessageService) {
    this.messageForm = formBuilder.group({
      firstname: new FormControl<string>('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', Validators.required)
    });
   }

  ngOnInit(): void {
  }

  public submitForm(): void {
    this.isLoadingSubmit = true;
    setTimeout(() => {
      this.message.success('Votre message à été envoyé avec succès !');
      this.isLoadingSubmit = false;
      this.messageForm.reset();
    }, Math.random() * 1500 + 500);
  }
}
