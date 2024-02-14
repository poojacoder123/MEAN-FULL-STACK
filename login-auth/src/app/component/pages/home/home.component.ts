import { Component , ViewChild} from '@angular/core';
import { NgSignaturePadOptions, SignaturePadComponent } from '@almothafar/angular-signature-pad';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
URL :any;
  @ViewChild('signature')
  public signaturePad!: SignaturePadComponent;
  public signaturePadOptions: NgSignaturePadOptions = { // passed through to szimek/signature_pad constructor
    minWidth: 5,
    canvasWidth: 500,
    canvasHeight: 300,
    penColor: 'blue',
    backgroundColor: 'white'

  };
 
  ngAfterViewInit() {
    // this.signaturePad is now available
    this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  drawComplete(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onEnd event
    // console.log('Completed drawing', event);
    // console.log(this.signaturePad.toDataURL('image/jpeg'));
   this.URL = this.signaturePad.toDataURL();
  }

  drawStart(event: MouseEvent | Touch) {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('Start drawing', event);
  }

  download(){
 const newURL = this.signaturePad.toDataURL('image/png');
 const link = document.createElement('a');
 link.href = newURL;
 console.log(link);
 link.download= 'pooja.png';
 link.click();



 console.log(link.href)
    
   

    // Simulate click to trigger download
  
  }
 

}
