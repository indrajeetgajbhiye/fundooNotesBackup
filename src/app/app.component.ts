import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Fundoo';
  update ;
  installToggle
  constructor(public updates: SwUpdate){
    this.update = localStorage.getItem("update") 
    updates.available.subscribe(event=>{
      // this.update = true
      updates.activateUpdate().then(()=> document.location.reload())
    })
    window.addEventListener("beforeinstallprompt", (event=>{
      this.installToggle = event
      this.update = "install"
      console.log("event", this.installToggle)
      console.log("update", this.update)
    }))
  }
  installApp(){
    this.installToggle.prompt()
    this.update = "notInstall"
    console.log(this.update)
    localStorage.setItem("update", "notInstall");
  }
  notInstall(){
    this.update = "notInstall"
    localStorage.setItem("update", "notInstall")
  }
}
